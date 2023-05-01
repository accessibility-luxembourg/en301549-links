# this script generates a json file for every version of the ETSI EN 301 549 standard
# the json file contains a mapping between the reference number of the standard and the page number in the pdf file

import requests
import json
import re
import os

from PyPDF2 import PdfReader

def flattenBookmarks(bookmarks):
    results = []
    for bookmark in bookmarks:
        if (type(bookmark) == list):
            results = results + flattenBookmarks(bookmark)
        else:
            results.append(bookmark)
    return results

def getPages(url):
    # download the pdf file
    r = requests.get(url)
    with open('temp.pdf', 'wb') as f:
        f.write(r.content)

    # get the list of bookmarks and the associated page number
    with open('temp.pdf', 'rb') as f:
        pdf = PdfReader(f)
        bookmarks = flattenBookmarks(pdf.outline)
        results = {}

        for bookmark in bookmarks:
            result = {}
            result['title'] = bookmark['/Title']
            result['page'] = pdf.get_destination_page_number(bookmark)  +1 # +1 because the first page is page 0

            reference_number = re.search(r'^[A-F\d\.]+\s|^Annex\s[A-F]+\s', result['title'])
            if reference_number:
                reference_number = reference_number.group(0).strip() 
                results[reference_number] = result

    os.remove('temp.pdf')
    return results

def main():
    versions = {    '1.1.2': 'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/01.01.02_60/en_301549v010102p.pdf',
                    '2.1.2': 'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf',
                    '3.1.1': 'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.01.01_60/en_301549v030101p.pdf',
                    '3.2.1': 'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf'}

    pages = {}
    for version in versions:
        pages[version] = getPages(versions[version])
    os.makedirs('./esm', exist_ok=True)
    os.makedirs('./cjs', exist_ok=True)
    with open('./helpers.js', 'r') as helpers:
        intro = helpers.read()
        with open('./esm/index.js', 'w') as f:
            f.write(intro)
            f.write('\nen301549.versions = ' + json.dumps(versions, indent=4) + ';' )
            f.write('\nen301549.mapping = ' + json.dumps(pages, indent=4) + ';')
            f.write('\nexport default en301549;')
        with open('./cjs/index.js', 'w') as f:
            f.write(intro)
            f.write('\nen301549.versions = ' + json.dumps(versions, indent=4) + ';' )
            f.write('\nen301549.mapping = ' + json.dumps(pages, indent=4) + ';')
            f.write('\nexports.en301549 = en301549;')
        with open('./cjs/package.json', 'w') as f:
            f.write('{"type": "commonjs"}')

if __name__ == '__main__':
    main()
    



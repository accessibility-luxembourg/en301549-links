# en301549-links

The european norm [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) is only published as a PDF file. It is thus not so easy to link to a particular section in the document. The goal of this library is to be able to get the URL of a particular section of the norm and create corresponding links.

## Installation

```
npm install en301549-links
```

## Usage

```
import en301549

// get the page number of the section 9.1.1.1 in the norm version 3.2.1 
en301549.getPageNumber('3.2.1', '9.1.1.1');
// result: 45


// get the url of the section 9.1.1.1 in the norm version 1.1.2
en301549.getUrl('1.1.2', '9.1.1.1');
// result : https://www.etsi.org/deliver/etsi_en/301500_301599/301549/01.01.02_60/en_301549v010102p.pdf#page=41'

// create an html link towards the section 9.1.1.1 of the norm version 3.2.1
en301549.getLink('3.2.1', '9.1.1.1');
// result: <a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=45" >9.1.1.1 Non-text content</a>
```

## License
This software is developed by the [Information and press service](https://sip.gouvernement.lu/en.html) of the luxembourgish government and licensed under the MIT license.
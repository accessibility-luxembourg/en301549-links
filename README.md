# en301549-links

The european norm [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) is only published as a PDF file. It is thus not so easy to link to a particular section in the document. The goal of this library is to be able to get the URL of a particular section of the norm and create corresponding links.
The URL to a specific page comply with the [specification defined by Adobe](https://helpx.adobe.com/acrobat/kb/link-html-pdf-page-acrobat.html). It is compatible with most desktop browsers but does not work properly on mobile browsers (last tested in may 2023).

## Installation

```
npm install en301549-links
```

## Usage

```javascript
import en301549 from 'en301549-links'
// or const en301549 = require('en301549-links')

// get the page number of the section 9.1.1.1 in the norm version 3.2.1 
en301549.getPageNumber('3.2.1', '9.1.1.1');
// result: 45

// get the url of the section 9.1.1.1 in the norm version 1.1.2
en301549.getUrl('1.1.2', '9.1.1.1');
// result: https://www.etsi.org/deliver/etsi_en/301500_301599/301549/01.01.02_60/en_301549v010102p.pdf#page=41'

// create an html link towards the section 9.1.1.1 of the norm version 3.2.1, the third parameter is optional
en301549.getLink('3.2.1', '9.1.1.1', 'class="european-norm" id="9.1.1.1"')
// result: <a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=45" class="european-norm" id="9.1.1.1">9.1.1.1 Non-text content</a>
```
## API

### en301549.getPageNumber(version: string, id: string): int

Gets the page number for a given version of the norm (ex: "3.2.1") and id of a success criterion (ex: "9.1.1.1").

### en301549.getTitle(version: string, id: string): string

Returns the title of a given success criterion (ex: "9.1.1.1") for a given version of the norm (ex: "3.2.1").

### en301549.getUrl(version: string, id: string): string

Generates the URL to the page of a given success criterion (ex: "9.1.1.1") for a given version of the norm (ex: "3.2.1").

### en301549.getLink(version: string, id: string[, attrs: string]): string

Generates a link to the page of a given success criterion (ex: "9.1.1.1") for a given version of the norm (ex: "3.2.1"). It is possible to set some attributes on this link by passing these attributes and their values separated by spaces as the third parameter (ex: 'class="norm" id="test").

## License
This software is developed by the [Information and press service](https://sip.gouvernement.lu/en.html) of the luxembourgish government and licensed under the MIT license.

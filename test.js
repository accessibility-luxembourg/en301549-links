import en301549  from './index.js'
import { strict as assert } from 'node:assert';

assert.strictEqual(en301549.getPageNumber('3.2.1', '9.1.1.1'), 45)
assert.strictEqual(en301549.getUrl('3.2.1', '9.1.1.1'), 'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=45')
assert.strictEqual(en301549.getLink('3.2.1', '9.1.1.1'), '<a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=45" >9.1.1.1 Non-text content</a>')
const en301549 = {}

en301549.checkParams = function(version, id) {
    if (this.mapping[version] === undefined) {
        throw new Error('Version not found')
    } else if (this.mapping[version][id] === undefined) {
        throw new Error('Page not found')
    }
}

en301549.getPageNumber = function(version, id) {
    this.checkParams(version, id)
    return this.mapping[version][id].page
}

en301549.getUrl = function(version, id) {
    this.checkParams(version, id)
    return this.versions[version] + '#page=' + this.mapping[version][id].page
}

en301549.getLink = function(version, id, attrs = '') {
    this.checkParams(version, id)
    return `<a href="${this.getUrl(version,id)}" ${attrs}>${this.mapping[version][id].title}</a>`
}
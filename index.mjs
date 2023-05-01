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
en301549.versions = {
    "1.1.2": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/01.01.02_60/en_301549v010102p.pdf",
    "2.1.2": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf",
    "3.1.1": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.01.01_60/en_301549v030101p.pdf",
    "3.2.1": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf"
};
en301549.mapping = {
    "1.1.2": {
        "1": {
            "title": "1 Scope",
            "page": 16
        },
        "2": {
            "title": "2 References",
            "page": 16
        },
        "2.1": {
            "title": "2.1 Normative references",
            "page": 16
        },
        "2.2": {
            "title": "2.2 Informative references",
            "page": 17
        },
        "3": {
            "title": "3 Definitions and abbreviations",
            "page": 18
        },
        "3.1": {
            "title": "3.1 Definitions",
            "page": 18
        },
        "3.2": {
            "title": "3.2 Abbreviations",
            "page": 21
        },
        "4": {
            "title": "4 Functional performance",
            "page": 21
        },
        "4.1": {
            "title": "4.1 Meeting functional performance statements",
            "page": 21
        },
        "4.2": {
            "title": "4.2 Functional performance statements",
            "page": 22
        },
        "4.2.1": {
            "title": "4.2.1 Usage without vision",
            "page": 22
        },
        "4.2.2": {
            "title": "4.2.2 Usage with limited vision",
            "page": 22
        },
        "4.2.3": {
            "title": "4.2.3 Usage without perception of colour",
            "page": 22
        },
        "4.2.4": {
            "title": "4.2.4 Usage without hearing",
            "page": 22
        },
        "4.2.5": {
            "title": "4.2.5 Usage with limited hearing",
            "page": 22
        },
        "4.2.6": {
            "title": "4.2.6 Usage without vocal capability",
            "page": 22
        },
        "4.2.7": {
            "title": "4.2.7 Usage with limited manipulation or strength",
            "page": 23
        },
        "4.2.8": {
            "title": "4.2.8 Usage with limited reach",
            "page": 23
        },
        "4.2.9": {
            "title": "4.2.9 Minimize photosensitive seizure triggers",
            "page": 23
        },
        "4.2.10": {
            "title": "4.2.10 Usage with limited cognition",
            "page": 23
        },
        "4.2.11": {
            "title": "4.2.11 Privacy",
            "page": 23
        },
        "5": {
            "title": "5 Generic requirements",
            "page": 23
        },
        "5.1": {
            "title": "5.1 Closed functionality",
            "page": 23
        },
        "5.1.1": {
            "title": "5.1.1 Introduction (Informative)",
            "page": 23
        },
        "5.1.2": {
            "title": "5.1.2 General",
            "page": 24
        },
        "5.1.2.1": {
            "title": "5.1.2.1 Closed functionality",
            "page": 24
        },
        "5.1.2.2": {
            "title": "5.1.2.2 Assistive technology",
            "page": 24
        },
        "5.1.3": {
            "title": "5.1.3 Non-visual access",
            "page": 24
        },
        "5.1.3.1": {
            "title": "5.1.3.1 General",
            "page": 24
        },
        "5.1.3.2": {
            "title": "5.1.3.2 Auditory output delivery including speech",
            "page": 24
        },
        "5.1.3.3": {
            "title": "5.1.3.3 Auditory output correlation",
            "page": 24
        },
        "5.1.3.4": {
            "title": "5.1.3.4 Speech output user control",
            "page": 25
        },
        "5.1.3.5": {
            "title": "5.1.3.5 Speech output automatic interruption",
            "page": 25
        },
        "5.1.3.6": {
            "title": "5.1.3.6 Speech output for non-text content",
            "page": 25
        },
        "5.1.3.7": {
            "title": "5.1.3.7 Speech output for video information",
            "page": 25
        },
        "5.1.3.8": {
            "title": "5.1.3.8 Masked entry",
            "page": 25
        },
        "5.1.3.9": {
            "title": "5.1.3.9 Private access to personal data",
            "page": 25
        },
        "5.1.3.10": {
            "title": "5.1.3.10 Non-interfering audio output",
            "page": 26
        },
        "5.1.3.11": {
            "title": "5.1.3.11 Private listening volume",
            "page": 26
        },
        "5.1.3.12": {
            "title": "5.1.3.12 Speaker volume",
            "page": 26
        },
        "5.1.3.13": {
            "title": "5.1.3.13 Volume reset",
            "page": 26
        },
        "5.1.3.14": {
            "title": "5.1.3.14 Spoken languages",
            "page": 26
        },
        "5.1.3.15": {
            "title": "5.1.3.15 Non-visual error identification",
            "page": 26
        },
        "5.1.3.16": {
            "title": "5.1.3.16 Receipts, tickets, and transactional outputs",
            "page": 26
        },
        "5.1.4": {
            "title": "5.1.4 Functionality closed to text enlargement",
            "page": 26
        },
        "5.1.5": {
            "title": "5.1.5 Visual output for auditory information",
            "page": 27
        },
        "5.1.6": {
            "title": "5.1.6 Operation without keyboard interface",
            "page": 27
        },
        "5.1.6.1": {
            "title": "5.1.6.1 Closed functionality",
            "page": 27
        },
        "5.1.6.2": {
            "title": "5.1.6.2 Input focus",
            "page": 27
        },
        "5.2": {
            "title": "5.2 Activation of accessibility features",
            "page": 27
        },
        "5.3": {
            "title": "5.3 Biometrics",
            "page": 27
        },
        "5.4": {
            "title": "5.4 Preservation of accessibility information during conversion",
            "page": 27
        },
        "5.5": {
            "title": "5.5 Operable parts",
            "page": 27
        },
        "5.5.1": {
            "title": "5.5.1 Means of operation",
            "page": 27
        },
        "5.5.2": {
            "title": "5.5.2 Operable parts discernibility",
            "page": 28
        },
        "5.6": {
            "title": "5.6 Locking or toggle controls",
            "page": 28
        },
        "5.6.1": {
            "title": "5.6.1 Tactile or auditory status",
            "page": 28
        },
        "5.6.2": {
            "title": "5.6.2 Visual status",
            "page": 28
        },
        "5.7": {
            "title": "5.7 Key repeat",
            "page": 28
        },
        "5.8": {
            "title": "5.8 Double-strike key acceptance",
            "page": 28
        },
        "5.9": {
            "title": "5.9 Simultaneous user actions",
            "page": 28
        },
        "6": {
            "title": "6 ICT with two-way voice communication",
            "page": 28
        },
        "6.1": {
            "title": "6.1 Audio bandwidth for speech (informative recommendation)",
            "page": 28
        },
        "6.2": {
            "title": "6.2 Real-time text (RTT) functionality",
            "page": 29
        },
        "6.2.1": {
            "title": "6.2.1 RTT provision",
            "page": 29
        },
        "6.2.1.1": {
            "title": "6.2.1.1 RTT communication",
            "page": 29
        },
        "6.2.1.2": {
            "title": "6.2.1.2 Concurrent voice and text",
            "page": 29
        },
        "6.2.2": {
            "title": "6.2.2 Display of Real-time Text",
            "page": 29
        },
        "6.2.2.1": {
            "title": "6.2.2.1 Visually distinguishable display",
            "page": 29
        },
        "6.2.2.2": {
            "title": "6.2.2.2 Programmatically determinable send and receive direction",
            "page": 29
        },
        "6.2.3": {
            "title": "6.2.3 Interoperability",
            "page": 29
        },
        "6.2.4": {
            "title": "6.2.4 Real-time text responsiveness",
            "page": 30
        },
        "6.3": {
            "title": "6.3 Caller ID",
            "page": 30
        },
        "6.4": {
            "title": "6.4 Alternatives to voice-based services",
            "page": 30
        },
        "6.5": {
            "title": "6.5 Video communication",
            "page": 30
        },
        "6.5.1": {
            "title": "6.5.1 General (informative)",
            "page": 30
        },
        "6.5.2": {
            "title": "6.5.2 Resolution",
            "page": 30
        },
        "6.5.3": {
            "title": "6.5.3 Frame rate",
            "page": 30
        },
        "6.5.4": {
            "title": "6.5.4 Synchronization between audio and video",
            "page": 31
        },
        "6.6": {
            "title": "6.6 Alternatives to video-based services",
            "page": 31
        },
        "7": {
            "title": "7 ICT with video capabilities",
            "page": 31
        },
        "7.1": {
            "title": "7.1 Caption processing technology",
            "page": 31
        },
        "7.1.1": {
            "title": "7.1.1 Captioning playback",
            "page": 31
        },
        "7.1.2": {
            "title": "7.1.2 Captioning synchronization",
            "page": 31
        },
        "7.1.3": {
            "title": "7.1.3 Preservation of captioning",
            "page": 31
        },
        "7.2": {
            "title": "7.2 Audio description technology",
            "page": 31
        },
        "7.2.1": {
            "title": "7.2.1 Audio description playback",
            "page": 31
        },
        "7.2.2": {
            "title": "7.2.2 Audio description synchronization",
            "page": 32
        },
        "7.2.3": {
            "title": "7.2.3 Preservation of audio description",
            "page": 32
        },
        "7.3": {
            "title": "7.3 User controls for captions and audio description",
            "page": 32
        },
        "8": {
            "title": "8 Hardware",
            "page": 32
        },
        "8.1": {
            "title": "8.1 General",
            "page": 32
        },
        "8.1.1": {
            "title": "8.1.1 Generic requirements",
            "page": 32
        },
        "8.1.2": {
            "title": "8.1.2 Standard connections",
            "page": 32
        },
        "8.1.3": {
            "title": "8.1.3 Colour",
            "page": 32
        },
        "8.2": {
            "title": "8.2 Hardware products with speech output",
            "page": 33
        },
        "8.2.1": {
            "title": "8.2.1 Speech volume gain",
            "page": 33
        },
        "8.2.1.1": {
            "title": "8.2.1.1 Speech volume range",
            "page": 33
        },
        "8.2.1.2": {
            "title": "8.2.1.2 Incremental volume control",
            "page": 33
        },
        "8.2.2": {
            "title": "8.2.2 Magnetic coupling",
            "page": 33
        },
        "8.2.2.1": {
            "title": "8.2.2.1 Fixed-line devices",
            "page": 33
        },
        "8.2.2.2": {
            "title": "8.2.2.2 Wireless communication devices",
            "page": 33
        },
        "8.3": {
            "title": "8.3 Physical access to ICT",
            "page": 33
        },
        "8.3.1": {
            "title": "8.3.1 General (informative)",
            "page": 33
        },
        "8.3.2": {
            "title": "8.3.2 Clear floor or ground space",
            "page": 34
        },
        "8.3.2.1": {
            "title": "8.3.2.1 Change in level",
            "page": 34
        },
        "8.3.2.2": {
            "title": "8.3.2.2 Clear floor or ground space",
            "page": 34
        },
        "8.3.2.3": {
            "title": "8.3.2.3 Approach",
            "page": 34
        },
        "8.3.2.3.1": {
            "title": "8.3.2.3.1 General",
            "page": 34
        },
        "8.3.2.3.2": {
            "title": "8.3.2.3.2 Forward approach",
            "page": 34
        },
        "8.3.2.3.3": {
            "title": "8.3.2.3.3 Parallel approach",
            "page": 35
        },
        "8.3.2.4": {
            "title": "8.3.2.4 Knee and toe clearance width",
            "page": 35
        },
        "8.3.2.5": {
            "title": "8.3.2.5 Toe clearance",
            "page": 35
        },
        "8.3.2.6": {
            "title": "8.3.2.6 Knee clearance",
            "page": 36
        },
        "8.3.3": {
            "title": "8.3.3 Reach range for ICT",
            "page": 36
        },
        "8.3.3.1": {
            "title": "8.3.3.1 Forward reach",
            "page": 36
        },
        "8.3.3.1.1": {
            "title": "8.3.3.1.1 Unobstructed high forward reach",
            "page": 36
        },
        "8.3.3.1.2": {
            "title": "8.3.3.1.2 Unobstructed low forward reach",
            "page": 36
        },
        "8.3.3.1.3": {
            "title": "8.3.3.1.3 Obstructed reach",
            "page": 37
        },
        "8.3.3.2": {
            "title": "8.3.3.2 Side reach",
            "page": 37
        },
        "8.3.3.2.1": {
            "title": "8.3.3.2.1 Unobstructed high side reach",
            "page": 37
        },
        "8.3.3.2.2": {
            "title": "8.3.3.2.2 Unobstructed low side reach",
            "page": 37
        },
        "8.3.3.2.3": {
            "title": "8.3.3.2.3 Obstructed side reach",
            "page": 38
        },
        "8.3.4": {
            "title": "8.3.4 Visibility",
            "page": 38
        },
        "8.3.5": {
            "title": "8.3.5 Installation instructions",
            "page": 38
        },
        "8.4": {
            "title": "8.4 Mechanically operable parts",
            "page": 38
        },
        "8.4.1": {
            "title": "8.4.1 Numeric keys",
            "page": 38
        },
        "8.4.2": {
            "title": "8.4.2 Operation of mechanical parts",
            "page": 38
        },
        "8.4.2.1": {
            "title": "8.4.2.1 Means of operation of mechanical parts",
            "page": 38
        },
        "8.4.2.2": {
            "title": "8.4.2.2 Force of operation of mechanical parts",
            "page": 39
        },
        "8.4.3": {
            "title": "8.4.3 Keys, tickets and fare cards",
            "page": 39
        },
        "8.5": {
            "title": "8.5 Tactile indication of speech mode",
            "page": 39
        },
        "9": {
            "title": "9 Web",
            "page": 39
        },
        "9.1": {
            "title": "9.1 General (informative)",
            "page": 39
        },
        "9.2": {
            "title": "9.2 Web content requirements",
            "page": 40
        },
        "9.2.1": {
            "title": "9.2.1 Non-text content",
            "page": 40
        },
        "9.2.2": {
            "title": "9.2.2 Audio-only and video-only (pre-recorded)",
            "page": 40
        },
        "9.2.3": {
            "title": "9.2.3 Captions (pre-recorded)",
            "page": 40
        },
        "9.2.4": {
            "title": "9.2.4 Audio description or media alternative (pre-recorded)",
            "page": 40
        },
        "9.2.5": {
            "title": "9.2.5 Captions (live)",
            "page": 40
        },
        "9.2.6": {
            "title": "9.2.6 Audio description (pre-recorded)",
            "page": 40
        },
        "9.2.7": {
            "title": "9.2.7 Info and relationships",
            "page": 40
        },
        "9.2.8": {
            "title": "9.2.8 Meaningful sequence",
            "page": 40
        },
        "9.2.9": {
            "title": "9.2.9 Sensory characteristics",
            "page": 40
        },
        "9.2.10": {
            "title": "9.2.10 Use of colour",
            "page": 40
        },
        "9.2.11": {
            "title": "9.2.11 Audio control",
            "page": 40
        },
        "9.2.12": {
            "title": "9.2.12 Contrast (minimum)",
            "page": 40
        },
        "9.2.13": {
            "title": "9.2.13 Resize text",
            "page": 40
        },
        "9.2.14": {
            "title": "9.2.14 Images of text",
            "page": 40
        },
        "9.2.15": {
            "title": "9.2.15 Keyboard",
            "page": 41
        },
        "9.2.16": {
            "title": "9.2.16 No keyboard trap",
            "page": 41
        },
        "9.2.17": {
            "title": "9.2.17 Timing adjustable",
            "page": 41
        },
        "9.2.18": {
            "title": "9.2.18 Pause, stop, hide",
            "page": 41
        },
        "9.2.19": {
            "title": "9.2.19 Three flashes or below threshold",
            "page": 41
        },
        "9.2.20": {
            "title": "9.2.20 Bypass blocks",
            "page": 41
        },
        "9.2.21": {
            "title": "9.2.21 Page titled",
            "page": 41
        },
        "9.2.22": {
            "title": "9.2.22 Focus Order",
            "page": 41
        },
        "9.2.23": {
            "title": "9.2.23 Link purpose (in context)",
            "page": 41
        },
        "9.2.24": {
            "title": "9.2.24 Multiple ways",
            "page": 41
        },
        "9.2.25": {
            "title": "9.2.25 Headings and labels",
            "page": 41
        },
        "9.2.26": {
            "title": "9.2.26 Focus visible",
            "page": 41
        },
        "9.2.27": {
            "title": "9.2.27 Language of page",
            "page": 41
        },
        "9.2.28": {
            "title": "9.2.28 Language of parts",
            "page": 41
        },
        "9.2.29": {
            "title": "9.2.29 On focus",
            "page": 41
        },
        "9.2.30": {
            "title": "9.2.30 On input",
            "page": 42
        },
        "9.2.31": {
            "title": "9.2.31 Consistent navigation",
            "page": 42
        },
        "9.2.32": {
            "title": "9.2.32 Consistent identification",
            "page": 42
        },
        "9.2.33": {
            "title": "9.2.33 Error identification",
            "page": 42
        },
        "9.2.34": {
            "title": "9.2.34 Labels or instructions",
            "page": 42
        },
        "9.2.35": {
            "title": "9.2.35 Error suggestion",
            "page": 42
        },
        "9.2.36": {
            "title": "9.2.36 Error prevention (legal, financial, data)",
            "page": 42
        },
        "9.2.37": {
            "title": "9.2.37 Parsing",
            "page": 42
        },
        "9.2.38": {
            "title": "9.2.38 Name, role, value",
            "page": 42
        },
        "9.3": {
            "title": "9.3 WCAG 2.0 conformance requirements",
            "page": 42
        },
        "10": {
            "title": "10 Non-web documents",
            "page": 43
        },
        "10.1": {
            "title": "10.1 General (informative)",
            "page": 43
        },
        "10.2": {
            "title": "10.2 Document success criteria",
            "page": 43
        },
        "10.2.1": {
            "title": "10.2.1 Non-text content",
            "page": 43
        },
        "10.2.2": {
            "title": "10.2.2 Audio-only and video-only (pre-recorded)",
            "page": 44
        },
        "10.2.3": {
            "title": "10.2.3 Captions (pre-recorded)",
            "page": 44
        },
        "10.2.4": {
            "title": "10.2.4 Audio description or media alternative (pre-recorded)",
            "page": 44
        },
        "10.2.5": {
            "title": "10.2.5 Captions (live)",
            "page": 45
        },
        "10.2.6": {
            "title": "10.2.6 Audio description (pre-recorded)",
            "page": 45
        },
        "10.2.7": {
            "title": "10.2.7 Info and relationships",
            "page": 45
        },
        "10.2.8": {
            "title": "10.2.8 Meaningful sequence",
            "page": 45
        },
        "10.2.9": {
            "title": "10.2.9 Sensory characteristics",
            "page": 45
        },
        "10.2.10": {
            "title": "10.2.10 Use of colour",
            "page": 46
        },
        "10.2.11": {
            "title": "10.2.11 Audio control",
            "page": 46
        },
        "10.2.12": {
            "title": "10.2.12 Contrast (minimum)",
            "page": 46
        },
        "10.2.13": {
            "title": "10.2.13 Resize text",
            "page": 46
        },
        "10.2.14": {
            "title": "10.2.14 Images of text",
            "page": 47
        },
        "10.2.15": {
            "title": "10.2.15 Keyboard",
            "page": 47
        },
        "10.2.16": {
            "title": "10.2.16 No keyboard trap",
            "page": 47
        },
        "10.2.17": {
            "title": "10.2.17 Timing adjustable",
            "page": 48
        },
        "10.2.18": {
            "title": "10.2.18 Pause, stop, hide",
            "page": 48
        },
        "10.2.19": {
            "title": "10.2.19 Three flashes or below threshold",
            "page": 49
        },
        "10.2.20": {
            "title": "10.2.20 Empty clause",
            "page": 49
        },
        "10.2.21": {
            "title": "10.2.21 Document titled",
            "page": 49
        },
        "10.2.22": {
            "title": "10.2.22 Focus order",
            "page": 49
        },
        "10.2.23": {
            "title": "10.2.23 Link purpose (in context)",
            "page": 49
        },
        "10.2.24": {
            "title": "10.2.24 Empty clause",
            "page": 49
        },
        "10.2.25": {
            "title": "10.2.25 Headings and labels",
            "page": 50
        },
        "10.2.26": {
            "title": "10.2.26 Focus visible",
            "page": 50
        },
        "10.2.27": {
            "title": "10.2.27 Language of document",
            "page": 50
        },
        "10.2.28": {
            "title": "10.2.28 Language of parts",
            "page": 50
        },
        "10.2.29": {
            "title": "10.2.29 On focus",
            "page": 51
        },
        "10.2.30": {
            "title": "10.2.30 On input",
            "page": 51
        },
        "10.2.31": {
            "title": "10.2.31 Empty clause",
            "page": 51
        },
        "10.2.32": {
            "title": "10.2.32 Empty clause",
            "page": 51
        },
        "10.2.33": {
            "title": "10.2.33 Error identification",
            "page": 51
        },
        "10.2.34": {
            "title": "10.2.34 Labels or instructions",
            "page": 51
        },
        "10.2.35": {
            "title": "10.2.35 Error suggestion",
            "page": 52
        },
        "10.2.36": {
            "title": "10.2.36 Error prevention (legal, financial, data)",
            "page": 52
        },
        "10.2.37": {
            "title": "10.2.37 Parsing",
            "page": 52
        },
        "10.2.38": {
            "title": "10.2.38 Name, role, value",
            "page": 53
        },
        "10.2.39": {
            "title": "10.2.39 Caption positioning",
            "page": 53
        },
        "10.2.40": {
            "title": "10.2.40 Audio description timing",
            "page": 53
        },
        "11": {
            "title": "11 Software",
            "page": 53
        },
        "11.1": {
            "title": "11.1 General (informative)",
            "page": 53
        },
        "11.2": {
            "title": "11.2 Non-Web software success criteria",
            "page": 53
        },
        "11.2.1": {
            "title": "11.2.1 Non-Web software success criteria (excluding closed functionality)",
            "page": 54
        },
        "11.2.1.1": {
            "title": "11.2.1.1 Non-text content (screen reading supported)",
            "page": 54
        },
        "11.2.1.2": {
            "title": "11.2.1.2 Audio-only and video-only (pre-recorded)",
            "page": 55
        },
        "11.2.1.3": {
            "title": "11.2.1.3 Captions (pre-recorded)",
            "page": 55
        },
        "11.2.1.4": {
            "title": "11.2.1.4 Audio description or media alternative (pre-recorded)",
            "page": 55
        },
        "11.2.1.5": {
            "title": "11.2.1.5 Captions (live)",
            "page": 56
        },
        "11.2.1.6": {
            "title": "11.2.1.6 Audio description (pre-recorded)",
            "page": 56
        },
        "11.2.1.7": {
            "title": "11.2.1.7 Info and relationships",
            "page": 56
        },
        "11.2.1.8": {
            "title": "11.2.1.8 Meaningful sequence",
            "page": 56
        },
        "11.2.1.9": {
            "title": "11.2.1.9 Sensory characteristics",
            "page": 57
        },
        "11.2.1.10": {
            "title": "11.2.1.10 Use of colour",
            "page": 57
        },
        "11.2.1.11": {
            "title": "11.2.1.11 Audio control",
            "page": 57
        },
        "11.2.1.12": {
            "title": "11.2.1.12 Contrast (minimum)",
            "page": 57
        },
        "11.2.1.13": {
            "title": "11.2.1.13 Resize text",
            "page": 58
        },
        "11.2.1.14": {
            "title": "11.2.1.14 Images of text",
            "page": 58
        },
        "11.2.1.15": {
            "title": "11.2.1.15 Keyboard",
            "page": 58
        },
        "11.2.1.16": {
            "title": "11.2.1.16 No keyboard trap",
            "page": 59
        },
        "11.2.1.17": {
            "title": "11.2.1.17 Timing adjustable",
            "page": 59
        },
        "11.2.1.18": {
            "title": "11.2.1.18 Pause, stop, hide",
            "page": 60
        },
        "11.2.1.19": {
            "title": "11.2.1.19 Three flashes or below threshold",
            "page": 60
        },
        "11.2.1.20": {
            "title": "11.2.1.20 Empty clause",
            "page": 60
        },
        "11.2.1.21": {
            "title": "11.2.1.21 Empty clause",
            "page": 60
        },
        "11.2.1.22": {
            "title": "11.2.1.22 Focus order",
            "page": 61
        },
        "11.2.1.23": {
            "title": "11.2.1.23 Link purpose (in context)",
            "page": 61
        },
        "11.2.1.24": {
            "title": "11.2.1.24 Empty clause",
            "page": 61
        },
        "11.2.1.25": {
            "title": "11.2.1.25 Headings and labels",
            "page": 61
        },
        "11.2.1.26": {
            "title": "11.2.1.26 Focus visible",
            "page": 61
        },
        "11.2.1.27": {
            "title": "11.2.1.27 Language of software",
            "page": 62
        },
        "11.2.1.28": {
            "title": "11.2.1.28 Empty clause",
            "page": 62
        },
        "11.2.1.29": {
            "title": "11.2.1.29 On focus",
            "page": 62
        },
        "11.2.1.30": {
            "title": "11.2.1.30 On input",
            "page": 62
        },
        "11.2.1.31": {
            "title": "11.2.1.31 Empty clause",
            "page": 62
        },
        "11.2.1.32": {
            "title": "11.2.1.32 Empty clause",
            "page": 62
        },
        "11.2.1.33": {
            "title": "11.2.1.33 Error identification",
            "page": 63
        },
        "11.2.1.34": {
            "title": "11.2.1.34 Labels or instructions",
            "page": 63
        },
        "11.2.1.35": {
            "title": "11.2.1.35 Error suggestion",
            "page": 63
        },
        "11.2.1.36": {
            "title": "11.2.1.36 Error prevention (legal, financial, data)",
            "page": 63
        },
        "11.2.1.37": {
            "title": "11.2.1.37 Parsing",
            "page": 64
        },
        "11.2.1.38": {
            "title": "11.2.1.38 Name, role, value",
            "page": 64
        },
        "11.2.2": {
            "title": "11.2.2 Non-Web software requirements (closed functionality)",
            "page": 65
        },
        "11.2.2.1": {
            "title": "11.2.2.1 Non-text content",
            "page": 65
        },
        "11.2.2.2": {
            "title": "11.2.2.2 Audio-only and video-only (pre-recorded)",
            "page": 65
        },
        "11.2.2.2.1": {
            "title": "11.2.2.2.1 Pre-recorded audio-only",
            "page": 65
        },
        "11.2.2.2.2": {
            "title": "11.2.2.2.2 Pre-recorded video-only",
            "page": 65
        },
        "11.2.2.3": {
            "title": "11.2.2.3 Empty clause",
            "page": 65
        },
        "11.2.2.4": {
            "title": "11.2.2.4 Audio description or media alternative (pre-recorded)",
            "page": 65
        },
        "11.2.2.5": {
            "title": "11.2.2.5 Empty clause",
            "page": 65
        },
        "11.2.2.6": {
            "title": "11.2.2.6 Empty clause",
            "page": 65
        },
        "11.2.2.7": {
            "title": "11.2.2.7 Info and relationships",
            "page": 66
        },
        "11.2.2.8": {
            "title": "11.2.2.8 Meaningful sequence",
            "page": 66
        },
        "11.2.2.9": {
            "title": "11.2.2.9 Empty clause",
            "page": 66
        },
        "11.2.2.10": {
            "title": "11.2.2.10 Empty clause",
            "page": 66
        },
        "11.2.2.11": {
            "title": "11.2.2.11 Empty clause",
            "page": 66
        },
        "11.2.2.12": {
            "title": "11.2.2.12 Empty clause",
            "page": 66
        },
        "11.2.2.13": {
            "title": "11.2.2.13 Resize text",
            "page": 66
        },
        "11.2.2.14": {
            "title": "11.2.2.14 Images of text",
            "page": 67
        },
        "11.2.2.15": {
            "title": "11.2.2.15 Keyboard",
            "page": 67
        },
        "11.2.2.16": {
            "title": "11.2.2.16 Empty clause",
            "page": 67
        },
        "11.2.2.17": {
            "title": "11.2.2.17 Empty clause",
            "page": 67
        },
        "11.2.2.18": {
            "title": "11.2.2.18 Empty clause",
            "page": 67
        },
        "11.2.2.19": {
            "title": "11.2.2.19 Empty clause",
            "page": 67
        },
        "11.2.2.20": {
            "title": "11.2.2.20 Empty clause",
            "page": 67
        },
        "11.2.2.21": {
            "title": "11.2.2.21 Empty clause",
            "page": 67
        },
        "11.2.2.22": {
            "title": "11.2.2.22 Empty clause",
            "page": 67
        },
        "11.2.2.23": {
            "title": "11.2.2.23 Empty clause",
            "page": 67
        },
        "11.2.2.24": {
            "title": "11.2.2.24 Empty clause",
            "page": 67
        },
        "11.2.2.25": {
            "title": "11.2.2.25 Empty clause",
            "page": 67
        },
        "11.2.2.26": {
            "title": "11.2.2.26 Empty clause",
            "page": 68
        },
        "11.2.2.27": {
            "title": "11.2.2.27 Language of software",
            "page": 68
        },
        "11.2.2.28": {
            "title": "11.2.2.28 Empty clause",
            "page": 68
        },
        "11.2.2.29": {
            "title": "11.2.2.29 Empty clause",
            "page": 68
        },
        "11.2.2.30": {
            "title": "11.2.2.30 Empty clause",
            "page": 68
        },
        "11.2.2.31": {
            "title": "11.2.2.31 Empty clause",
            "page": 68
        },
        "11.2.2.32": {
            "title": "11.2.2.32 Empty clause",
            "page": 68
        },
        "11.2.2.33": {
            "title": "11.2.2.33 Error Identification",
            "page": 68
        },
        "11.2.2.34": {
            "title": "11.2.2.34 Empty clause",
            "page": 68
        },
        "11.2.2.35": {
            "title": "11.2.2.35 Empty clause",
            "page": 68
        },
        "11.2.2.36": {
            "title": "11.2.2.36 Empty clause",
            "page": 68
        },
        "11.2.2.37": {
            "title": "11.2.2.37 Parsing",
            "page": 69
        },
        "11.2.2.38": {
            "title": "11.2.2.38 Name, role, value",
            "page": 69
        },
        "11.3": {
            "title": "11.3 Interoperability with assistive technology",
            "page": 69
        },
        "11.3.1": {
            "title": "11.3.1 Closed functionality",
            "page": 69
        },
        "11.3.2": {
            "title": "11.3.2 Accessibility services",
            "page": 69
        },
        "11.3.2.1": {
            "title": "11.3.2.1 Platform accessibility service support for software that provides a user interface",
            "page": 69
        },
        "11.3.2.2": {
            "title": "11.3.2.2 Platform accessibility service support for assistive technologies",
            "page": 69
        },
        "11.3.2.3": {
            "title": "11.3.2.3 Use of accessibility services",
            "page": 70
        },
        "11.3.2.4": {
            "title": "11.3.2.4 Assistive technology",
            "page": 70
        },
        "11.3.2.5": {
            "title": "11.3.2.5 Object information",
            "page": 70
        },
        "11.3.2.6": {
            "title": "11.3.2.6 Row, column, and headers",
            "page": 70
        },
        "11.3.2.7": {
            "title": "11.3.2.7 Values",
            "page": 70
        },
        "11.3.2.8": {
            "title": "11.3.2.8 Label relationships",
            "page": 70
        },
        "11.3.2.9": {
            "title": "11.3.2.9 Parent-child relationships",
            "page": 70
        },
        "11.3.2.10": {
            "title": "11.3.2.10 Text",
            "page": 71
        },
        "11.3.2.11": {
            "title": "11.3.2.11 List of available actions",
            "page": 71
        },
        "11.3.2.12": {
            "title": "11.3.2.12 Execution of available actions",
            "page": 71
        },
        "11.3.2.13": {
            "title": "11.3.2.13 Tracking of focus and selection attributes",
            "page": 71
        },
        "11.3.2.14": {
            "title": "11.3.2.14 Modification of focus and selection attributes",
            "page": 71
        },
        "11.3.2.15": {
            "title": "11.3.2.15 Change notification",
            "page": 71
        },
        "11.3.2.16": {
            "title": "11.3.2.16 Modifications of states and properties",
            "page": 71
        },
        "11.3.2.17": {
            "title": "11.3.2.17 Modifications of values and text",
            "page": 72
        },
        "11.4": {
            "title": "11.4 Documented accessibility usage",
            "page": 72
        },
        "11.4.1": {
            "title": "11.4.1 User control of accessibility features",
            "page": 72
        },
        "11.4.2": {
            "title": "11.4.2 No disruption of accessibility features",
            "page": 72
        },
        "11.5": {
            "title": "11.5 User preferences",
            "page": 72
        },
        "11.6": {
            "title": "11.6 Authoring tools",
            "page": 72
        },
        "11.6.1": {
            "title": "11.6.1 Content technology",
            "page": 72
        },
        "11.6.2": {
            "title": "11.6.2 Accessible content creation",
            "page": 72
        },
        "11.6.3": {
            "title": "11.6.3 Preservation of accessibility information in transformations",
            "page": 72
        },
        "11.6.4": {
            "title": "11.6.4 Repair assistance",
            "page": 73
        },
        "11.6.5": {
            "title": "11.6.5 Templates",
            "page": 73
        },
        "12": {
            "title": "12 Documentation and support services",
            "page": 73
        },
        "12.1": {
            "title": "12.1 Product documentation",
            "page": 73
        },
        "12.1.1": {
            "title": "12.1.1 Accessibility and compatibility features",
            "page": 73
        },
        "12.1.2": {
            "title": "12.1.2 Accessible documentation",
            "page": 73
        },
        "12.2": {
            "title": "12.2 Support services",
            "page": 73
        },
        "12.2.1": {
            "title": "12.2.1 General (informative)",
            "page": 73
        },
        "12.2.2": {
            "title": "12.2.2 Information on accessibility and compatibility features",
            "page": 74
        },
        "12.2.3": {
            "title": "12.2.3 Effective communication",
            "page": 74
        },
        "12.2.4": {
            "title": "12.2.4 Accessible documentation",
            "page": 74
        },
        "13": {
            "title": "13 ICT providing relay or emergency service access",
            "page": 74
        },
        "13.1": {
            "title": "13.1 Relay services requirements",
            "page": 74
        },
        "13.1.1": {
            "title": "13.1.1 General (informative)",
            "page": 74
        },
        "13.1.2": {
            "title": "13.1.2 Text relay services",
            "page": 74
        },
        "13.1.3": {
            "title": "13.1.3 Sign relay services",
            "page": 74
        },
        "13.1.4": {
            "title": "13.1.4 Lip-reading relay services",
            "page": 74
        },
        "13.1.5": {
            "title": "13.1.5 Captioned telephony services",
            "page": 75
        },
        "13.1.6": {
            "title": "13.1.6 Speech to speech relay services",
            "page": 75
        },
        "13.2": {
            "title": "13.2 Access to relay services",
            "page": 75
        },
        "13.3": {
            "title": "13.3 Access to emergency services",
            "page": 75
        },
        "Annex A": {
            "title": "Annex A (informative): WCAG 2.0",
            "page": 76
        },
        "A.1": {
            "title": "A.1 Electronic attachment",
            "page": 76
        },
        "Annex B": {
            "title": "Annex B (informative): Relationship between requirements and functional performance statements",
            "page": 77
        },
        "B.1": {
            "title": "B.1 Relationships between clauses 5 to 13 and the functional performance statements",
            "page": 77
        },
        "Annex C": {
            "title": "Annex C (normative): Determination of compliance",
            "page": 84
        },
        "C.1": {
            "title": "C.1 Introduction",
            "page": 84
        },
        "C.2": {
            "title": "C.2 Blank clause",
            "page": 84
        },
        "C.3": {
            "title": "C.3 Blank clause",
            "page": 84
        },
        "C.4": {
            "title": "C.4 Functional performance",
            "page": 84
        },
        "C.5": {
            "title": "C.5 Generic requirements",
            "page": 85
        },
        "C.5.1": {
            "title": "C.5.1 Closed functionality",
            "page": 85
        },
        "C.5.1.1": {
            "title": "C.5.1.1 Introduction",
            "page": 85
        },
        "C.5.1.2": {
            "title": "C.5.1.2 General",
            "page": 85
        },
        "C.5.1.2.1": {
            "title": "C.5.1.2.1 Closed functionality",
            "page": 85
        },
        "C.5.1.2.2": {
            "title": "C.5.1.2.2 Assistive technology",
            "page": 85
        },
        "C.5.1.3": {
            "title": "C.5.1.3 Non-visual access",
            "page": 85
        },
        "C.5.1.3.1": {
            "title": "C.5.1.3.1 General",
            "page": 85
        },
        "C.5.1.3.2": {
            "title": "C.5.1.3.2 Auditory output delivery including speech",
            "page": 85
        },
        "C.5.1.3.3": {
            "title": "C.5.1.3.3 Auditory output correlation",
            "page": 85
        },
        "C.5.1.3.4": {
            "title": "C.5.1.3.4 Speech output user control",
            "page": 86
        },
        "C.5.1.3.5": {
            "title": "C.5.1.3.5 Speech output automatic interruption",
            "page": 86
        },
        "C.5.1.3.6": {
            "title": "C.5.1.3.6 Speech output for non-text content",
            "page": 86
        },
        "C.5.1.3.7": {
            "title": "C.5.1.3.7 Speech output for video information",
            "page": 86
        },
        "C.5.1.3.8": {
            "title": "C.5.1.3.8 Masked entry",
            "page": 86
        },
        "C.5.1.3.9": {
            "title": "C.5.1.3.9 Private access to personal data",
            "page": 87
        },
        "C.5.1.3.10": {
            "title": "C.5.1.3.10 Non-interfering audio output",
            "page": 87
        },
        "C.5.1.3.11": {
            "title": "C.5.1.3.11 Private listening volume",
            "page": 87
        },
        "C.5.1.3.12": {
            "title": "C.5.1.3.12 Speaker volume",
            "page": 87
        },
        "C.5.1.3.13": {
            "title": "C.5.1.3.13 Volume reset",
            "page": 87
        },
        "C.5.1.3.14": {
            "title": "C.5.1.3.14 Spoken languages",
            "page": 88
        },
        "C.5.1.3.15": {
            "title": "C.5.1.3.15 Non-visual error identification",
            "page": 88
        },
        "C.5.1.3.16": {
            "title": "C.5.1.3.16 Receipts, tickets, and transactional outputs",
            "page": 88
        },
        "C.5.1.4": {
            "title": "C.5.1.4 Functionality closed to text enlargement",
            "page": 88
        },
        "C.5.1.5": {
            "title": "C.5.1.5 Visual output for auditory information",
            "page": 88
        },
        "C.5.1.6": {
            "title": "C.5.1.6 Operation without keyboard interface",
            "page": 89
        },
        "C.5.1.6.1": {
            "title": "C.5.1.6.1 Closed functionality",
            "page": 89
        },
        "C.5.1.6.2": {
            "title": "C.5.1.6.2 Input focus",
            "page": 89
        },
        "C.5.2": {
            "title": "C.5.2 Activation of accessibility features",
            "page": 89
        },
        "C.5.3": {
            "title": "C.5.3 Biometrics",
            "page": 89
        },
        "C.5.4": {
            "title": "C.5.4 Preservation of accessibility information during conversion",
            "page": 89
        },
        "C.5.5": {
            "title": "C.5.5 Operable parts",
            "page": 90
        },
        "C.5.5.1": {
            "title": "C.5.5.1 Means of operation",
            "page": 90
        },
        "C.5.5.2": {
            "title": "C.5.5.2 Operable part discernibility",
            "page": 90
        },
        "C.5.6": {
            "title": "C.5.6 Locking or toggle controls",
            "page": 90
        },
        "C.5.6.1": {
            "title": "C.5.6.1 Tactile or auditory status",
            "page": 90
        },
        "C.5.6.2": {
            "title": "C.5.6.2 Visual status",
            "page": 90
        },
        "C.5.7": {
            "title": "C.5.7 Key repeat",
            "page": 90
        },
        "C.5.8": {
            "title": "C.5.8 Double-strike key acceptance",
            "page": 91
        },
        "C.5.9": {
            "title": "C.5.9 Simultaneous user actions",
            "page": 91
        },
        "C.6": {
            "title": "C.6 ICT with two-way voice communication",
            "page": 91
        },
        "C.6.1": {
            "title": "C.6.1 Audio bandwidth for speech",
            "page": 91
        },
        "C.6.2": {
            "title": "C.6.2 Real-Time Text (RTT) functionality",
            "page": 91
        },
        "C.6.2.1": {
            "title": "C.6.2.1 RTT provision",
            "page": 91
        },
        "C.6.2.1.1": {
            "title": "C.6.2.1.1 RTT communication",
            "page": 91
        },
        "C.6.2.1.2": {
            "title": "C.6.2.1.2 Concurrent voice and text",
            "page": 92
        },
        "C.6.2.2": {
            "title": "C.6.2.2 Display of Real-Time Text",
            "page": 92
        },
        "C.6.2.2.1": {
            "title": "C.6.2.2.1 Visually distinguishable display",
            "page": 92
        },
        "C.6.2.2.2": {
            "title": "C.6.2.2.2 Programmatically determinable send and receive direction",
            "page": 92
        },
        "C.6.2.3": {
            "title": "C.6.2.3 Interoperability",
            "page": 93
        },
        "C.6.2.4": {
            "title": "C.6.2.4 Real-Time Text responsiveness",
            "page": 93
        },
        "C.6.3": {
            "title": "C.6.3 Caller ID",
            "page": 93
        },
        "C.6.4": {
            "title": "C.6.4 Alternatives to voice-based services",
            "page": 93
        },
        "C.6.5": {
            "title": "C.6.5 Video communication",
            "page": 94
        },
        "C.6.5.1": {
            "title": "C.6.5.1 General",
            "page": 94
        },
        "C.6.5.2": {
            "title": "C.6.5.2 Resolution",
            "page": 94
        },
        "C.6.5.3": {
            "title": "C.6.5.3 Frame rate",
            "page": 94
        },
        "C.6.5.4": {
            "title": "C.6.5.4 Synchronization between audio and video",
            "page": 94
        },
        "C.6.6": {
            "title": "C.6.6 Alternatives to video-based services",
            "page": 94
        },
        "C.7": {
            "title": "C.7 ICT with video capabilities",
            "page": 94
        },
        "C.7.1": {
            "title": "C.7.1 Caption processing technology",
            "page": 94
        },
        "C.7.1.1": {
            "title": "C.7.1.1 Captioning playback",
            "page": 94
        },
        "C.7.1.2": {
            "title": "C.7.1.2 Captioning synchronization",
            "page": 95
        },
        "C.7.1.3": {
            "title": "C.7.1.3 Preservation of captioning",
            "page": 95
        },
        "C.7.2": {
            "title": "C.7.2 Audio description technology",
            "page": 95
        },
        "C.7.2.1": {
            "title": "C.7.2.1 Audio description playback",
            "page": 95
        },
        "C.7.2.2": {
            "title": "C.7.2.2 Audio description synchronization",
            "page": 95
        },
        "C.7.2.3": {
            "title": "C.7.2.3 Preservation of audio description",
            "page": 95
        },
        "C.7.3": {
            "title": "C.7.3 User controls for captions and audio description",
            "page": 95
        },
        "C.8": {
            "title": "C.8 Hardware",
            "page": 96
        },
        "C.8.1": {
            "title": "C.8.1 General",
            "page": 96
        },
        "C.8.1.1": {
            "title": "C.8.1.1 Generic requirements",
            "page": 96
        },
        "C.8.1.2": {
            "title": "C.8.1.2 Standard connections",
            "page": 96
        },
        "C.8.1.3": {
            "title": "C.8.1.3 Colour",
            "page": 96
        },
        "C.8.2": {
            "title": "C.8.2 Hardware products with speech output",
            "page": 96
        },
        "C.8.2.1": {
            "title": "C.8.2.1 Speech volume gain",
            "page": 96
        },
        "C.8.2.1.1": {
            "title": "C.8.2.1.1 Speech volume range",
            "page": 96
        },
        "C.8.2.1.2": {
            "title": "C.8.2.1.2 Incremental volume control",
            "page": 96
        },
        "C.8.2.2": {
            "title": "C.8.2.2 Magnetic coupling",
            "page": 97
        },
        "C.8.2.2.1": {
            "title": "C.8.2.2.1 Fixed-line devices",
            "page": 97
        },
        "C.8.2.2.2": {
            "title": "C.8.2.2.2 Wireless communication devices",
            "page": 97
        },
        "C.8.3": {
            "title": "C.8.3 Physical access to ICT",
            "page": 97
        },
        "C.8.3.1": {
            "title": "C.8.3.1 General",
            "page": 97
        },
        "C.8.3.2": {
            "title": "C.8.3.2 Clear floor or ground space",
            "page": 97
        },
        "C.8.3.2.1": {
            "title": "C.8.3.2.1 Change in level",
            "page": 97
        },
        "C.8.3.2.2": {
            "title": "C.8.3.2.2 Clear floor or ground space",
            "page": 98
        },
        "C.8.3.2.3": {
            "title": "C.8.3.2.3 Approach",
            "page": 98
        },
        "C.8.3.2.3.1": {
            "title": "C.8.3.2.3.1 General",
            "page": 98
        },
        "C.8.3.2.3.2": {
            "title": "C.8.3.2.3.2 Forward Approach",
            "page": 98
        },
        "C.8.3.2.3.3": {
            "title": "C.8.3.2.3.3 Parallel Approach",
            "page": 98
        },
        "C.8.3.2.4": {
            "title": "C.8.3.2.4 Knee and toe clearance width",
            "page": 98
        },
        "C.8.3.2.5": {
            "title": "C.8.3.2.5 Toe clearance",
            "page": 98
        },
        "C.8.3.2.6": {
            "title": "C.8.3.2.6 Knee clearance",
            "page": 99
        },
        "C.8.3.3": {
            "title": "C.8.3.3 Reach range for ICT",
            "page": 100
        },
        "C.8.3.3.1": {
            "title": "C.8.3.3.1 Forward reach",
            "page": 100
        },
        "C.8.3.3.1.1": {
            "title": "C.8.3.3.1.1 Unobstructed high forward reach",
            "page": 100
        },
        "C.8.3.3.1.2": {
            "title": "C.8.3.3.1.2 Unobstructed low forward reach",
            "page": 100
        },
        "C.8.3.3.1.3": {
            "title": "C.8.3.3.1.3 Obstructed reach",
            "page": 100
        },
        "C.8.3.3.2": {
            "title": "C.8.3.3.2 Side reach",
            "page": 101
        },
        "C.8.3.3.2.1": {
            "title": "C.8.3.3.2.1 Unobstructed high side reach",
            "page": 101
        },
        "C.8.3.3.2.2": {
            "title": "C.8.3.3.2.2 Unobstructed low side reach",
            "page": 101
        },
        "C.8.3.3.2.3": {
            "title": "C.8.3.3.2.3 Obstructed side reach",
            "page": 101
        },
        "C.8.3.4": {
            "title": "C.8.3.4 Visibility",
            "page": 101
        },
        "C.8.3.5": {
            "title": "C.8.3.5 Installation instructions",
            "page": 102
        },
        "C.8.4": {
            "title": "C.8.4 Mechanically operable parts",
            "page": 102
        },
        "C.8.4.1": {
            "title": "C.8.4.1 Numeric keys",
            "page": 102
        },
        "C.8.4.2": {
            "title": "C.8.4.2 Operation of mechanical parts",
            "page": 102
        },
        "C.8.4.2.1": {
            "title": "C.8.4.2.1 Means of operation of mechanical parts",
            "page": 102
        },
        "C.8.4.2.2": {
            "title": "C.8.4.2.2 Force of operation of mechanical parts",
            "page": 102
        },
        "C.8.4.3": {
            "title": "C.8.4.3 Keys, tickets and fare cards",
            "page": 102
        },
        "C.8.5": {
            "title": "C.8.5 Tactile indication of speech mode",
            "page": 102
        },
        "C.9": {
            "title": "C.9 Web",
            "page": 103
        },
        "C.9.1": {
            "title": "C.9.1 General (informative)",
            "page": 103
        },
        "C.9.2": {
            "title": "C.9.2 Web content requirements",
            "page": 103
        },
        "C.9.2.1": {
            "title": "C.9.2.1 Non-text content",
            "page": 103
        },
        "C.9.2.2": {
            "title": "C.9.2.2 Audio-only and video-only (pre-recorded)",
            "page": 103
        },
        "C.9.2.3": {
            "title": "C.9.2.3 Captions (pre-recorded)",
            "page": 103
        },
        "C.9.2.4": {
            "title": "C.9.2.4 Audio description or media alternative (pre-recorded)",
            "page": 103
        },
        "C.9.2.5": {
            "title": "C.9.2.5 Captions (live)",
            "page": 103
        },
        "C.9.2.6": {
            "title": "C.9.2.6 Audio description (pre-recorded)",
            "page": 104
        },
        "C.9.2.7": {
            "title": "C.9.2.7 Info and relationships",
            "page": 104
        },
        "C.9.2.8": {
            "title": "C.9.2.8 Meaningful sequence",
            "page": 104
        },
        "C.9.2.9": {
            "title": "C.9.2.9 Sensory characteristics",
            "page": 104
        },
        "C.9.2.10": {
            "title": "C.9.2.10 Use of colour",
            "page": 104
        },
        "C.9.2.11": {
            "title": "C.9.2.11 Audio control",
            "page": 104
        },
        "C.9.2.12": {
            "title": "C.9.2.12 Contrast (minimum)",
            "page": 105
        },
        "C.9.2.13": {
            "title": "C.9.2.13 Resize text",
            "page": 105
        },
        "C.9.2.14": {
            "title": "C.9.2.14 Images of text",
            "page": 105
        },
        "C.9.2.15": {
            "title": "C.9.2.15 Keyboard",
            "page": 105
        },
        "C.9.2.16": {
            "title": "C.9.2.16 No keyboard trap",
            "page": 105
        },
        "C.9.2.17": {
            "title": "C.9.2.17 Timing adjustable",
            "page": 105
        },
        "C.9.2.18": {
            "title": "C.9.2.18 Pause, stop, hide",
            "page": 106
        },
        "C.9.2.19": {
            "title": "C.9.2.19 Three flashes or below threshold",
            "page": 106
        },
        "C.9.2.20": {
            "title": "C.9.2.20 Bypass blocks",
            "page": 106
        },
        "C.9.2.21": {
            "title": "C.9.2.21 Page titled",
            "page": 106
        },
        "C.9.2.22": {
            "title": "C.9.2.22 Focus Order",
            "page": 106
        },
        "C.9.2.23": {
            "title": "C.9.2.23 Link purpose (in context)",
            "page": 106
        },
        "C.9.2.24": {
            "title": "C.9.2.24 Multiple ways",
            "page": 107
        },
        "C.9.2.25": {
            "title": "C.9.2.25 Headings and labels",
            "page": 107
        },
        "C.9.2.26": {
            "title": "C.9.2.26 Focus visible",
            "page": 107
        },
        "C.9.2.27": {
            "title": "C.9.2.27 Language of page",
            "page": 107
        },
        "C.9.2.28": {
            "title": "C.9.2.28 Language of parts",
            "page": 107
        },
        "C.9.2.29": {
            "title": "C.9.2.29 On focus",
            "page": 107
        },
        "C.9.2.30": {
            "title": "C.9.2.30 On input",
            "page": 108
        },
        "C.9.2.31": {
            "title": "C.9.2.31 Consistent navigation",
            "page": 108
        },
        "C.9.2.32": {
            "title": "C.9.2.32 Consistent identification",
            "page": 108
        },
        "C.9.2.33": {
            "title": "C.9.2.33 Error identification",
            "page": 108
        },
        "C.9.2.34": {
            "title": "C.9.2.34 Labels or instructions",
            "page": 108
        },
        "C.9.2.35": {
            "title": "C.9.2.35 Error suggestion",
            "page": 108
        },
        "C.9.2.36": {
            "title": "C.9.2.36 Error prevention (legal, financial, data)",
            "page": 109
        },
        "C.9.2.37": {
            "title": "C.9.2.37 Parsing",
            "page": 109
        },
        "C.9.2.38": {
            "title": "C.9.2.38 Name, role, value",
            "page": 109
        },
        "C.9.3": {
            "title": "C.9.3 WCAG 2.0 conformance requirements",
            "page": 109
        },
        "C.10": {
            "title": "C.10 Non-web documents",
            "page": 109
        },
        "C.10.1": {
            "title": "C.10.1 General",
            "page": 109
        },
        "C.10.2": {
            "title": "C.10.2 Document success criteria",
            "page": 109
        },
        "C.10.2.1": {
            "title": "C.10.2.1 Non-text content",
            "page": 109
        },
        "C.10.2.2": {
            "title": "C.10.2.2 Audio-only and video-only (pre-recorded)",
            "page": 110
        },
        "C.10.2.3": {
            "title": "C.10.2.3 Captions (pre-recorded)",
            "page": 110
        },
        "C.10.2.4": {
            "title": "C.10.2.4 Audio description or media alternative (pre-recorded)",
            "page": 110
        },
        "C.10.2.5": {
            "title": "C.10.2.5 Captions (live)",
            "page": 110
        },
        "C.10.2.6": {
            "title": "C.10.2.6 Audio description (pre-recorded)",
            "page": 110
        },
        "C.10.2.7": {
            "title": "C.10.2.7 Info and relationships",
            "page": 110
        },
        "C.10.2.8": {
            "title": "C.10.2.8 Meaningful sequence",
            "page": 110
        },
        "C.10.2.9": {
            "title": "C.10.2.9 Sensory characteristics",
            "page": 111
        },
        "C.10.2.10": {
            "title": "C.10.2.10 Use of colour",
            "page": 111
        },
        "C.10.2.11": {
            "title": "C.10.2.11 Audio control",
            "page": 111
        },
        "C.10.2.12": {
            "title": "C.10.2.12 Contrast (minimum)",
            "page": 111
        },
        "C.10.2.13": {
            "title": "C.10.2.13 Resize text",
            "page": 111
        },
        "C.10.2.14": {
            "title": "C.10.2.14 Images of text",
            "page": 111
        },
        "C.10.2.15": {
            "title": "C.10.2.15 Keyboard",
            "page": 111
        },
        "C.10.2.16": {
            "title": "C.10.2.16 No keyboard trap",
            "page": 112
        },
        "C.10.2.17": {
            "title": "C.10.2.17 Timing adjustable",
            "page": 112
        },
        "C.10.2.18": {
            "title": "C.10.2.18 Pause, stop, hide",
            "page": 112
        },
        "C.10.2.19": {
            "title": "C.10.2.19 Three flashes or below threshold",
            "page": 112
        },
        "C.10.2.20": {
            "title": "C.10.2.20 Empty clause",
            "page": 112
        },
        "C.10.2.21": {
            "title": "C.10.2.21 Document titled",
            "page": 112
        },
        "C.10.2.22": {
            "title": "C.10.2.22 Focus order",
            "page": 112
        },
        "C.10.2.23": {
            "title": "C.10.2.23 Link purpose (in context)",
            "page": 113
        },
        "C.10.2.24": {
            "title": "C.10.2.24 Empty clause",
            "page": 113
        },
        "C.10.2.25": {
            "title": "C.10.2.25 Headings and labels",
            "page": 113
        },
        "C.10.2.26": {
            "title": "C.10.2.26 Focus visible",
            "page": 113
        },
        "C.10.2.27": {
            "title": "C.10.2.27 Language of document",
            "page": 113
        },
        "C.10.2.28": {
            "title": "C.10.2.28 Language of parts",
            "page": 113
        },
        "C.10.2.29": {
            "title": "C.10.2.29 On focus",
            "page": 113
        },
        "C.10.2.30": {
            "title": "C.10.2.30 On input",
            "page": 114
        },
        "C.10.2.31": {
            "title": "C.10.2.31 Empty clause",
            "page": 114
        },
        "C.10.2.32": {
            "title": "C.10.2.32 Empty clause",
            "page": 114
        },
        "C.10.2.33": {
            "title": "C.10.2.33 Error identification",
            "page": 114
        },
        "C.10.2.34": {
            "title": "C.10.2.34 Labels or instructions",
            "page": 114
        },
        "C.10.2.35": {
            "title": "C.10.2.35 Error suggestion",
            "page": 114
        },
        "C.10.2.36": {
            "title": "C.10.2.36 Error prevention (legal, financial, data)",
            "page": 114
        },
        "C.10.2.37": {
            "title": "C.10.2.37 Parsing",
            "page": 114
        },
        "C.10.2.38": {
            "title": "C.10.2.38 Name, role, value",
            "page": 115
        },
        "C.10.2.39": {
            "title": "C.10.2.39 Caption positioning",
            "page": 115
        },
        "C.10.2.40": {
            "title": "C.10.2.40 Audio description timing",
            "page": 115
        },
        "C.11": {
            "title": "C.11 Software",
            "page": 115
        },
        "C.11.1": {
            "title": "C.11.1 General",
            "page": 115
        },
        "C.11.2": {
            "title": "C.11.2 Non-Web software success criteria",
            "page": 115
        },
        "C.11.2.1": {
            "title": "C.11.2.1 Non-Web software success criteria (excluding closed functionality)",
            "page": 115
        },
        "C.11.2.1.1": {
            "title": "C.11.2.1.1 Non-text content (screen reading supported)",
            "page": 115
        },
        "C.11.2.1.2": {
            "title": "C.11.2.1.2 Audio-only and video-only (pre-recorded)",
            "page": 115
        },
        "C.11.2.1.3": {
            "title": "C.11.2.1.3 Captions (pre-recorded)",
            "page": 115
        },
        "C.11.2.1.4": {
            "title": "C.11.2.1.4 Audio description or media alternative (pre-recorded)",
            "page": 116
        },
        "C.11.2.1.5": {
            "title": "C.11.2.1.5 Captions (live)",
            "page": 116
        },
        "C.11.2.1.6": {
            "title": "C.11.2.1.6 Audio description (pre-recorded)",
            "page": 116
        },
        "C.11.2.1.7": {
            "title": "C.11.2.1.7 Info and relationships",
            "page": 116
        },
        "C.11.2.1.8": {
            "title": "C.11.2.1.8 Meaningful sequence",
            "page": 116
        },
        "C.11.2.1.9": {
            "title": "C.11.2.1.9 Sensory characteristics",
            "page": 116
        },
        "C.11.2.1.10": {
            "title": "C.11.2.1.10 Use of colour",
            "page": 116
        },
        "C.11.2.1.11": {
            "title": "C.11.2.1.11 Audio control",
            "page": 117
        },
        "C.11.2.1.12": {
            "title": "C.11.2.1.12 Contrast (minimum)",
            "page": 117
        },
        "C.11.2.1.13": {
            "title": "C.11.2.1.13 Resize text",
            "page": 117
        },
        "C.11.2.1.14": {
            "title": "C.11.2.1.14 Images of text",
            "page": 117
        },
        "C.11.2.1.15": {
            "title": "C.11.2.1.15 Keyboard",
            "page": 117
        },
        "C.11.2.1.16": {
            "title": "C.11.2.1.16 No keyboard trap",
            "page": 117
        },
        "C.11.2.1.17": {
            "title": "C.11.2.1.17 Timing adjustable",
            "page": 117
        },
        "C.11.2.1.18": {
            "title": "C.11.2.1.18 Pause, stop, hide",
            "page": 118
        },
        "C.11.2.1.19": {
            "title": "C.11.2.1.19 Three flashes or below threshold",
            "page": 118
        },
        "C.11.2.1.20": {
            "title": "C.11.2.1.20 Empty clause",
            "page": 118
        },
        "C.11.2.1.21": {
            "title": "C.11.2.1.21 Empty clause",
            "page": 118
        },
        "C.11.2.1.22": {
            "title": "C.11.2.1.22 Focus order",
            "page": 118
        },
        "C.11.2.1.23": {
            "title": "C.11.2.1.23 Link purpose (in context)",
            "page": 118
        },
        "C.11.2.1.24": {
            "title": "C.11.2.1.24 Empty clause",
            "page": 118
        },
        "C.11.2.1.25": {
            "title": "C.11.2.1.25 Headings and labels",
            "page": 118
        },
        "C.11.2.1.26": {
            "title": "C.11.2.1.26 Focus visible",
            "page": 118
        },
        "C.11.2.1.27": {
            "title": "C.11.2.1.27 Language of software",
            "page": 119
        },
        "C.11.2.1.28": {
            "title": "C.11.2.1.28 Empty clause",
            "page": 119
        },
        "C.11.2.1.29": {
            "title": "C.11.2.1.29 On focus",
            "page": 119
        },
        "C.11.2.1.30": {
            "title": "C.11.2.1.30 On input",
            "page": 119
        },
        "C.11.2.1.31": {
            "title": "C.11.2.1.31 Empty clause",
            "page": 119
        },
        "C.11.2.1.32": {
            "title": "C.11.2.1.32 Empty clause",
            "page": 119
        },
        "C.11.2.1.33": {
            "title": "C.11.2.1.33 Error identification",
            "page": 119
        },
        "C.11.2.1.34": {
            "title": "C.11.2.1.34 Labels or instructions",
            "page": 119
        },
        "C.11.2.1.35": {
            "title": "C.11.2.1.35 Error suggestion",
            "page": 120
        },
        "C.11.2.1.36": {
            "title": "C.11.2.1.36 Error prevention (legal, financial, data)",
            "page": 120
        },
        "C.11.2.1.37": {
            "title": "C.11.2.1.37 Parsing",
            "page": 120
        },
        "C.11.2.1.38": {
            "title": "C.11.2.1.38 Name, role, value",
            "page": 120
        },
        "C.11.2.2": {
            "title": "C.11.2.2 Non-Web software requirements (closed functionality)",
            "page": 120
        },
        "C.11.2.2.1": {
            "title": "C.11.2.2.1 Non-text content",
            "page": 120
        },
        "C.11.2.2.2": {
            "title": "C.11.2.2.2 Audio-only and video-only (pre-recorded)",
            "page": 121
        },
        "C.11.2.2.2.1": {
            "title": "C.11.2.2.2.1 Pre-recorded audio-only",
            "page": 121
        },
        "C.11.2.2.2.2": {
            "title": "C.11.2.2.2.2 Pre-recorded video-only",
            "page": 121
        },
        "C.11.2.2.3": {
            "title": "C.11.2.2.3 Empty clause",
            "page": 121
        },
        "C.11.2.2.4": {
            "title": "C.11.2.2.4 Audio description or media alternative (pre-recorded)",
            "page": 121
        },
        "C.11.2.2.5": {
            "title": "C.11.2.2.5 Empty clause",
            "page": 121
        },
        "C.11.2.2.6": {
            "title": "C.11.2.2.6 Empty clause",
            "page": 121
        },
        "C.11.2.2.7": {
            "title": "C.11.2.2.7 Info and relationships",
            "page": 121
        },
        "C.11.2.2.8": {
            "title": "C.11.2.2.8 Meaningful sequence",
            "page": 121
        },
        "C.11.2.2.9": {
            "title": "C.11.2.2.9 Empty clause",
            "page": 121
        },
        "C.11.2.2.10": {
            "title": "C.11.2.2.10 Empty clause",
            "page": 122
        },
        "C.11.2.2.11": {
            "title": "C.11.2.2.11 Empty clause",
            "page": 122
        },
        "C.11.2.2.12": {
            "title": "C.11.2.2.12 Empty clause",
            "page": 122
        },
        "C.11.2.2.13": {
            "title": "C.11.2.2.13 Resize text",
            "page": 122
        },
        "C.11.2.2.14": {
            "title": "C.11.2.2.14 Images of text",
            "page": 122
        },
        "C.11.2.2.15": {
            "title": "C.11.2.2.15 Keyboard",
            "page": 122
        },
        "C.11.2.2.16": {
            "title": "C.11.2.2.16 Empty clause",
            "page": 122
        },
        "C.11.2.2.17": {
            "title": "C.11.2.2.17 Empty clause",
            "page": 122
        },
        "C.11.2.2.18": {
            "title": "C.11.2.2.18 Empty clause",
            "page": 122
        },
        "C.11.2.2.19": {
            "title": "C.11.2.2.19 Empty clause",
            "page": 122
        },
        "C.11.2.2.20": {
            "title": "C.11.2.2.20 Empty clause",
            "page": 122
        },
        "C.11.2.2.21": {
            "title": "C.11.2.2.21 Empty clause",
            "page": 122
        },
        "C.11.2.2.22": {
            "title": "C.11.2.2.22 Empty clause",
            "page": 122
        },
        "C.11.2.2.23": {
            "title": "C.11.2.2.23 Empty clause",
            "page": 123
        },
        "C.11.2.2.24": {
            "title": "C.11.2.2.24 Empty clause",
            "page": 123
        },
        "C.11.2.2.25": {
            "title": "C.11.2.2.25 Empty clause",
            "page": 123
        },
        "C.11.2.2.26": {
            "title": "C.11.2.2.26 Empty clause",
            "page": 123
        },
        "C.11.2.2.27": {
            "title": "C.11.2.2.27 Language of software",
            "page": 123
        },
        "C.11.2.2.28": {
            "title": "C.11.2.2.28 Empty clause",
            "page": 123
        },
        "C.11.2.2.29": {
            "title": "C.11.2.2.29 Empty clause",
            "page": 123
        },
        "C.11.2.2.30": {
            "title": "C.11.2.2.30 Empty clause",
            "page": 123
        },
        "C.11.2.2.31": {
            "title": "C.11.2.2.31 Empty clause",
            "page": 123
        },
        "C.11.2.2.32": {
            "title": "C.11.2.2.32 Empty clause",
            "page": 123
        },
        "C.11.2.2.33": {
            "title": "C.11.2.2.33 Error Identification",
            "page": 123
        },
        "C.11.2.2.34": {
            "title": "C.11.2.2.34 Empty clause",
            "page": 124
        },
        "C.11.2.2.35": {
            "title": "C.11.2.2.35 Empty clause",
            "page": 124
        },
        "C.11.2.2.36": {
            "title": "C.11.2.2.36 Empty clause",
            "page": 124
        },
        "C.11.2.2.37": {
            "title": "C.11.2.2.37 Parsing",
            "page": 124
        },
        "C.11.2.2.38": {
            "title": "C.11.2.2.38 Name, role, value",
            "page": 124
        },
        "C.11.3": {
            "title": "C.11.3 Interoperability with assistive technology",
            "page": 124
        },
        "C.11.3.1": {
            "title": "C.11.3.1 Closed functionality",
            "page": 124
        },
        "C.11.3.2": {
            "title": "C.11.3.2 Accessibility services",
            "page": 124
        },
        "C.11.3.2.1": {
            "title": "C.11.3.2.1 Platform accessibility service support for software that provides a user interface",
            "page": 124
        },
        "C.11.3.2.2": {
            "title": "C.11.3.2.2 Platform accessibility service support for assistive technologies",
            "page": 124
        },
        "C.11.3.2.3": {
            "title": "C.11.3.2.3 Use of accessibility services",
            "page": 125
        },
        "C.11.3.2.4": {
            "title": "C.11.3.2.4 Assistive technology",
            "page": 125
        },
        "C.11.3.2.5": {
            "title": "C.11.3.2.5 Object information",
            "page": 125
        },
        "C.11.3.2.6": {
            "title": "C.11.3.2.6 Row, column, and headers",
            "page": 125
        },
        "C.11.3.2.7": {
            "title": "C.11.3.2.7 Values",
            "page": 126
        },
        "C.11.3.2.8": {
            "title": "C.11.3.2.8 Label relationships",
            "page": 126
        },
        "C.11.3.2.9": {
            "title": "C.11.3.2.9 Parent-child relationships",
            "page": 126
        },
        "C.11.3.2.10": {
            "title": "C.11.3.2.10 Text",
            "page": 127
        },
        "C.11.3.2.11": {
            "title": "C.11.3.2.11 List of available actions",
            "page": 127
        },
        "C.11.3.2.12": {
            "title": "C.11.3.2.12 Execution of available actions",
            "page": 127
        },
        "C.11.3.2.13": {
            "title": "C.11.3.2.13 Tracking of focus and selection attributes",
            "page": 127
        },
        "C.11.3.2.14": {
            "title": "C.11.3.2.14 Modification of focus and selection attributes",
            "page": 128
        },
        "C.11.3.2.15": {
            "title": "C.11.3.2.15 Change notification",
            "page": 128
        },
        "C.11.3.2.16": {
            "title": "C.11.3.2.16 Modifications of states and properties",
            "page": 128
        },
        "C.11.3.2.17": {
            "title": "C.11.3.2.17 Modifications of values and text",
            "page": 129
        },
        "C.11.4": {
            "title": "C.11.4 Documented accessibility usage",
            "page": 129
        },
        "C.11.4.1": {
            "title": "C.11.4.1 User control of accessibility features",
            "page": 129
        },
        "C.11.4.2": {
            "title": "C.11.4.2 No disruption of accessibility features",
            "page": 129
        },
        "C.11.5": {
            "title": "C.11.5 User preferences",
            "page": 129
        },
        "C.11.6": {
            "title": "C.11.6 Authoring tools",
            "page": 130
        },
        "C.11.6.1": {
            "title": "C.11.6.1 Content technology",
            "page": 130
        },
        "C.11.6.2": {
            "title": "C.11.6.2 Accessible content creation",
            "page": 130
        },
        "C.11.6.3": {
            "title": "C.11.6.3 Preservation of accessibility information in transformations",
            "page": 130
        },
        "C.11.6.4": {
            "title": "C.11.6.4 Repair assistance",
            "page": 130
        },
        "C.11.6.5": {
            "title": "C.11.6.5 Templates",
            "page": 131
        },
        "C.12": {
            "title": "C.12 Documentation and support services",
            "page": 131
        },
        "C.12.1": {
            "title": "C.12.1 Product documentation",
            "page": 131
        },
        "C.12.1.1": {
            "title": "C.12.1.1 Accessibility and compatibility features",
            "page": 131
        },
        "C.12.1.2": {
            "title": "C.12.1.2 Accessible documentation",
            "page": 131
        },
        "C.12.2": {
            "title": "C.12.2 Support services",
            "page": 131
        },
        "C.12.2.1": {
            "title": "C.12.2.1 General",
            "page": 131
        },
        "C.12.2.2": {
            "title": "C.12.2.2 Information on accessibility and compatibility features",
            "page": 131
        },
        "C.12.2.3": {
            "title": "C.12.2.3 Effective communication",
            "page": 132
        },
        "C.12.2.4": {
            "title": "C.12.2.4 Accessible documentation",
            "page": 132
        },
        "C.13": {
            "title": "C.13 ICT providing relay or emergency service access",
            "page": 132
        },
        "C.13.1": {
            "title": "C.13.1 Relay service requirements",
            "page": 132
        },
        "C.13.1.1": {
            "title": "C.13.1.1 General",
            "page": 132
        },
        "C.13.1.2": {
            "title": "C.13.1.2 Text relay services",
            "page": 132
        },
        "C.13.1.3": {
            "title": "C.13.1.3 Sign relay services",
            "page": 132
        },
        "C.13.1.4": {
            "title": "C.13.1.4 Lip-reading relay services",
            "page": 132
        },
        "C.13.1.5": {
            "title": "C.13.1.5 Captioned telephony services",
            "page": 133
        },
        "C.13.1.6": {
            "title": "C.13.1.6 Speech to speech relay services",
            "page": 133
        },
        "C.13.2": {
            "title": "C.13.2 Access to relay services",
            "page": 133
        },
        "C.13.3": {
            "title": "C.13.3 Access to emergency services",
            "page": 133
        }
    },
    "2.1.2": {
        "1": {
            "title": "1 Scope",
            "page": 10
        },
        "2": {
            "title": "2 References",
            "page": 10
        },
        "2.1": {
            "title": "2.1 Normative references",
            "page": 10
        },
        "2.2": {
            "title": "2.2 Informative references",
            "page": 11
        },
        "3": {
            "title": "3 Definitions and abbreviations",
            "page": 13
        },
        "3.1": {
            "title": "3.1 Definitions",
            "page": 13
        },
        "3.2": {
            "title": "3.2 Abbreviations",
            "page": 16
        },
        "4": {
            "title": "4 Functional performance",
            "page": 17
        },
        "4.1": {
            "title": "4.1 Meeting functional performance statements",
            "page": 17
        },
        "4.2": {
            "title": "4.2 Functional performance statements",
            "page": 17
        },
        "4.2.1": {
            "title": "4.2.1 Usage without vision",
            "page": 17
        },
        "4.2.2": {
            "title": "4.2.2 Usage with limited vision",
            "page": 17
        },
        "4.2.3": {
            "title": "4.2.3 Usage without perception of colour",
            "page": 18
        },
        "4.2.4": {
            "title": "4.2.4 Usage without hearing",
            "page": 18
        },
        "4.2.5": {
            "title": "4.2.5 Usage with limited hearing",
            "page": 18
        },
        "4.2.6": {
            "title": "4.2.6 Usage without vocal capability",
            "page": 18
        },
        "4.2.7": {
            "title": "4.2.7 Usage with limited manipulation or strength",
            "page": 18
        },
        "4.2.8": {
            "title": "4.2.8 Usage with limited reach",
            "page": 18
        },
        "4.2.9": {
            "title": "4.2.9 Minimize photosensitive seizure triggers",
            "page": 19
        },
        "4.2.10": {
            "title": "4.2.10 Usage with limited cognition",
            "page": 19
        },
        "4.2.11": {
            "title": "4.2.11 Privacy",
            "page": 19
        },
        "5": {
            "title": "5 Generic requirements",
            "page": 20
        },
        "5.1": {
            "title": "5.1 Closed functionality",
            "page": 20
        },
        "5.1.1": {
            "title": "5.1.1 Introduction (informative)",
            "page": 20
        },
        "5.1.2": {
            "title": "5.1.2 General",
            "page": 20
        },
        "5.1.2.1": {
            "title": "5.1.2.1 Closed functionality",
            "page": 20
        },
        "5.1.2.2": {
            "title": "5.1.2.2 Assistive technology",
            "page": 20
        },
        "5.1.3": {
            "title": "5.1.3 Non-visual access",
            "page": 20
        },
        "5.1.3.1": {
            "title": "5.1.3.1 General",
            "page": 20
        },
        "5.1.3.2": {
            "title": "5.1.3.2 Auditory output delivery including speech",
            "page": 20
        },
        "5.1.3.3": {
            "title": "5.1.3.3 Auditory output correlation",
            "page": 21
        },
        "5.1.3.4": {
            "title": "5.1.3.4 Speech output user control",
            "page": 21
        },
        "5.1.3.5": {
            "title": "5.1.3.5 Speech output automatic interruption",
            "page": 21
        },
        "5.1.3.6": {
            "title": "5.1.3.6 Speech output for non-text content",
            "page": 21
        },
        "5.1.3.7": {
            "title": "5.1.3.7 Speech output for video information",
            "page": 21
        },
        "5.1.3.8": {
            "title": "5.1.3.8 Masked entry",
            "page": 22
        },
        "5.1.3.9": {
            "title": "5.1.3.9 Private access to personal data",
            "page": 22
        },
        "5.1.3.10": {
            "title": "5.1.3.10 Non-interfering audio output",
            "page": 22
        },
        "5.1.3.11": {
            "title": "5.1.3.11 Private listening volume",
            "page": 22
        },
        "5.1.3.12": {
            "title": "5.1.3.12 Speaker volume",
            "page": 22
        },
        "5.1.3.13": {
            "title": "5.1.3.13 Volume reset",
            "page": 22
        },
        "5.1.3.14": {
            "title": "5.1.3.14 Spoken languages",
            "page": 23
        },
        "5.1.3.15": {
            "title": "5.1.3.15 Non-visual error identification",
            "page": 23
        },
        "5.1.3.16": {
            "title": "5.1.3.16 Receipts, tickets, and transactional outputs",
            "page": 23
        },
        "5.1.4": {
            "title": "5.1.4 Functionality closed to text enlargement",
            "page": 23
        },
        "5.1.5": {
            "title": "5.1.5 Visual output for auditory information",
            "page": 24
        },
        "5.1.6": {
            "title": "5.1.6 Operation without keyboard interface",
            "page": 24
        },
        "5.1.6.1": {
            "title": "5.1.6.1 Closed functionality",
            "page": 24
        },
        "5.1.6.2": {
            "title": "5.1.6.2 Input focus",
            "page": 25
        },
        "5.2": {
            "title": "5.2 Activation of accessibility features",
            "page": 25
        },
        "5.3": {
            "title": "5.3 Biometrics",
            "page": 25
        },
        "5.4": {
            "title": "5.4 Preservation of accessibility information during conversion",
            "page": 25
        },
        "5.5": {
            "title": "5.5 Operable parts",
            "page": 25
        },
        "5.5.1": {
            "title": "5.5.1 Means of operation",
            "page": 25
        },
        "5.5.2": {
            "title": "5.5.2 Operable parts discernibility",
            "page": 25
        },
        "5.6": {
            "title": "5.6 Locking or toggle controls",
            "page": 25
        },
        "5.6.1": {
            "title": "5.6.1 Tactile or auditory status",
            "page": 25
        },
        "5.6.2": {
            "title": "5.6.2 Visual status",
            "page": 26
        },
        "5.7": {
            "title": "5.7 Key repeat",
            "page": 26
        },
        "5.8": {
            "title": "5.8 Double-strike key acceptance",
            "page": 26
        },
        "5.9": {
            "title": "5.9 Simultaneous user actions",
            "page": 26
        },
        "6": {
            "title": "6 ICT with two-way voice communication",
            "page": 27
        },
        "6.1": {
            "title": "6.1 Audio bandwidth for speech",
            "page": 27
        },
        "6.2": {
            "title": "6.2 Real-time text (RTT) functionality",
            "page": 27
        },
        "6.2.1": {
            "title": "6.2.1 RTT provision",
            "page": 27
        },
        "6.2.1.1": {
            "title": "6.2.1.1 RTT communication",
            "page": 27
        },
        "6.2.1.2": {
            "title": "6.2.1.2 Concurrent voice and text",
            "page": 27
        },
        "6.2.2": {
            "title": "6.2.2 Display of Real-time Text",
            "page": 27
        },
        "6.2.2.1": {
            "title": "6.2.2.1 Visually distinguishable display",
            "page": 27
        },
        "6.2.2.2": {
            "title": "6.2.2.2 Programmatically determinable send and receive direction",
            "page": 27
        },
        "6.2.3": {
            "title": "6.2.3 Interoperability",
            "page": 28
        },
        "6.2.4": {
            "title": "6.2.4 Real-time text responsiveness",
            "page": 28
        },
        "6.3": {
            "title": "6.3 Caller ID",
            "page": 28
        },
        "6.4": {
            "title": "6.4 Alternatives to voice-based services",
            "page": 28
        },
        "6.5": {
            "title": "6.5 Video communication",
            "page": 28
        },
        "6.5.1": {
            "title": "6.5.1 General (informative)",
            "page": 28
        },
        "6.5.2": {
            "title": "6.5.2 Resolution",
            "page": 29
        },
        "6.5.3": {
            "title": "6.5.3 Frame rate",
            "page": 29
        },
        "6.5.4": {
            "title": "6.5.4 Synchronization between audio and video",
            "page": 29
        },
        "6.6": {
            "title": "6.6 Alternatives to video-based services",
            "page": 29
        },
        "7": {
            "title": "7 ICT with video capabilities",
            "page": 30
        },
        "7.1": {
            "title": "7.1 Caption processing technology",
            "page": 30
        },
        "7.1.1": {
            "title": "7.1.1 Captioning playback",
            "page": 30
        },
        "7.1.2": {
            "title": "7.1.2 Captioning synchronization",
            "page": 30
        },
        "7.1.3": {
            "title": "7.1.3 Preservation of captioning",
            "page": 30
        },
        "7.2": {
            "title": "7.2 Audio description technology",
            "page": 30
        },
        "7.2.1": {
            "title": "7.2.1 Audio description playback",
            "page": 30
        },
        "7.2.2": {
            "title": "7.2.2 Audio description synchronization",
            "page": 30
        },
        "7.2.3": {
            "title": "7.2.3 Preservation of audio description",
            "page": 30
        },
        "7.3": {
            "title": "7.3 User controls for captions and audio description",
            "page": 31
        },
        "8": {
            "title": "8 Hardware",
            "page": 32
        },
        "8.1": {
            "title": "8.1 General",
            "page": 32
        },
        "8.1.1": {
            "title": "8.1.1 Generic requirements",
            "page": 32
        },
        "8.1.2": {
            "title": "8.1.2 Standard connections",
            "page": 32
        },
        "8.1.3": {
            "title": "8.1.3 Colour",
            "page": 32
        },
        "8.2": {
            "title": "8.2 Hardware products with speech output",
            "page": 32
        },
        "8.2.1": {
            "title": "8.2.1 Speech volume gain",
            "page": 32
        },
        "8.2.1.1": {
            "title": "8.2.1.1 Speech volume range",
            "page": 32
        },
        "8.2.1.2": {
            "title": "8.2.1.2 Incremental volume control",
            "page": 32
        },
        "8.2.2": {
            "title": "8.2.2 Magnetic coupling",
            "page": 32
        },
        "8.2.2.1": {
            "title": "8.2.2.1 Fixed-line devices",
            "page": 32
        },
        "8.2.2.2": {
            "title": "8.2.2.2 Wireless communication devices",
            "page": 33
        },
        "8.3": {
            "title": "8.3 Physical access to ICT",
            "page": 33
        },
        "8.3.1": {
            "title": "8.3.1 General (informative)",
            "page": 33
        },
        "8.3.2": {
            "title": "8.3.2 Clear floor or ground space",
            "page": 33
        },
        "8.3.2.1": {
            "title": "8.3.2.1 Change in level",
            "page": 33
        },
        "8.3.2.2": {
            "title": "8.3.2.2 Clear floor or ground space",
            "page": 34
        },
        "8.3.2.3": {
            "title": "8.3.2.3 Approach",
            "page": 34
        },
        "8.3.2.3.1": {
            "title": "8.3.2.3.1 General",
            "page": 34
        },
        "8.3.2.3.2": {
            "title": "8.3.2.3.2 Forward approach",
            "page": 34
        },
        "8.3.2.3.3": {
            "title": "8.3.2.3.3 Parallel approach",
            "page": 35
        },
        "8.3.2.4": {
            "title": "8.3.2.4 Knee and toe clearance width",
            "page": 35
        },
        "8.3.2.5": {
            "title": "8.3.2.5 Toe clearance",
            "page": 35
        },
        "8.3.2.6": {
            "title": "8.3.2.6 Knee clearance",
            "page": 35
        },
        "8.3.3": {
            "title": "8.3.3 Reach range for ICT",
            "page": 36
        },
        "8.3.3.1": {
            "title": "8.3.3.1 Forward reach",
            "page": 36
        },
        "8.3.3.1.1": {
            "title": "8.3.3.1.1 Unobstructed high forward reach",
            "page": 36
        },
        "8.3.3.1.2": {
            "title": "8.3.3.1.2 Unobstructed low forward reach",
            "page": 36
        },
        "8.3.3.1.3": {
            "title": "8.3.3.1.3 Obstructed reach",
            "page": 36
        },
        "8.3.3.2": {
            "title": "8.3.3.2 Side reach",
            "page": 37
        },
        "8.3.3.2.1": {
            "title": "8.3.3.2.1 Unobstructed high side reach",
            "page": 37
        },
        "8.3.3.2.2": {
            "title": "8.3.3.2.2 Unobstructed low side reach",
            "page": 37
        },
        "8.3.3.2.3": {
            "title": "8.3.3.2.3 Obstructed side reach",
            "page": 38
        },
        "8.3.4": {
            "title": "8.3.4 Visibility",
            "page": 38
        },
        "8.3.5": {
            "title": "8.3.5 Installation instructions",
            "page": 38
        },
        "8.4": {
            "title": "8.4 Mechanically operable parts",
            "page": 38
        },
        "8.4.1": {
            "title": "8.4.1 Numeric keys",
            "page": 38
        },
        "8.4.2": {
            "title": "8.4.2 Operation of mechanical parts",
            "page": 39
        },
        "8.4.2.1": {
            "title": "8.4.2.1 Means of operation of mechanical parts",
            "page": 39
        },
        "8.4.2.2": {
            "title": "8.4.2.2 Force of operation of mechanical parts",
            "page": 39
        },
        "8.4.3": {
            "title": "8.4.3 Keys, tickets and fare cards",
            "page": 39
        },
        "8.5": {
            "title": "8.5 Tactile indication of speech mode",
            "page": 39
        },
        "9": {
            "title": "9 Web",
            "page": 40
        },
        "9.0": {
            "title": "9.0 General (informative)",
            "page": 40
        },
        "9.1": {
            "title": "9.1 Perceivable",
            "page": 41
        },
        "9.1.1": {
            "title": "9.1.1 Text alternatives",
            "page": 41
        },
        "9.1.1.1": {
            "title": "9.1.1.1 Non-text content",
            "page": 41
        },
        "9.1.2": {
            "title": "9.1.2 Time-based media",
            "page": 41
        },
        "9.1.2.1": {
            "title": "9.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 41
        },
        "9.1.2.2": {
            "title": "9.1.2.2 Captions (pre-recorded)",
            "page": 41
        },
        "9.1.2.3": {
            "title": "9.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 41
        },
        "9.1.2.4": {
            "title": "9.1.2.4 Captions (live)",
            "page": 41
        },
        "9.1.2.5": {
            "title": "9.1.2.5 Audio description (pre-recorded)",
            "page": 41
        },
        "9.1.3": {
            "title": "9.1.3 Adaptable",
            "page": 41
        },
        "9.1.3.1": {
            "title": "9.1.3.1 Info and relationships",
            "page": 41
        },
        "9.1.3.2": {
            "title": "9.1.3.2 Meaningful sequence",
            "page": 41
        },
        "9.1.3.3": {
            "title": "9.1.3.3 Sensory characteristics",
            "page": 41
        },
        "9.1.3.4": {
            "title": "9.1.3.4 Orientation",
            "page": 41
        },
        "9.1.3.5": {
            "title": "9.1.3.5 Identify input purpose",
            "page": 42
        },
        "9.1.4": {
            "title": "9.1.4 Distinguishable",
            "page": 42
        },
        "9.1.4.1": {
            "title": "9.1.4.1 Use of colour",
            "page": 42
        },
        "9.1.4.2": {
            "title": "9.1.4.2 Audio control",
            "page": 42
        },
        "9.1.4.3": {
            "title": "9.1.4.3 Contrast (minimum)",
            "page": 42
        },
        "9.1.4.4": {
            "title": "9.1.4.4 Resize text",
            "page": 42
        },
        "9.1.4.5": {
            "title": "9.1.4.5 Images of text",
            "page": 42
        },
        "9.1.4.6": {
            "title": "9.1.4.6 Void",
            "page": 42
        },
        "9.1.4.7": {
            "title": "9.1.4.7 Void",
            "page": 42
        },
        "9.1.4.8": {
            "title": "9.1.4.8 Void",
            "page": 42
        },
        "9.1.4.9": {
            "title": "9.1.4.9 Void",
            "page": 42
        },
        "9.1.4.10": {
            "title": "9.1.4.10 Reflow",
            "page": 42
        },
        "9.1.4.11": {
            "title": "9.1.4.11 Non-text contrast",
            "page": 42
        },
        "9.1.4.12": {
            "title": "9.1.4.12 Text spacing",
            "page": 42
        },
        "9.1.4.13": {
            "title": "9.1.4.13 Content on hover or focus",
            "page": 42
        },
        "9.2": {
            "title": "9.2 Operable",
            "page": 43
        },
        "9.2.1": {
            "title": "9.2.1 Keyboard accessible",
            "page": 43
        },
        "9.2.1.1": {
            "title": "9.2.1.1 Keyboard",
            "page": 43
        },
        "9.2.1.2": {
            "title": "9.2.1.2 No keyboard trap",
            "page": 43
        },
        "9.2.1.3": {
            "title": "9.2.1.3 Void",
            "page": 43
        },
        "9.2.1.4": {
            "title": "9.2.1.4 Character key shortcuts",
            "page": 43
        },
        "9.2.2": {
            "title": "9.2.2 Enough time",
            "page": 43
        },
        "9.2.2.1": {
            "title": "9.2.2.1 Timing adjustable",
            "page": 43
        },
        "9.2.2.2": {
            "title": "9.2.2.2 Pause, stop, hide",
            "page": 43
        },
        "9.2.3": {
            "title": "9.2.3 Seizures and physical reactions",
            "page": 43
        },
        "9.2.3.1": {
            "title": "9.2.3.1 Three flashes or below threshold",
            "page": 43
        },
        "9.2.4": {
            "title": "9.2.4 Navigable",
            "page": 43
        },
        "9.2.4.1": {
            "title": "9.2.4.1 Bypass blocks",
            "page": 43
        },
        "9.2.4.2": {
            "title": "9.2.4.2 Page titled",
            "page": 43
        },
        "9.2.4.3": {
            "title": "9.2.4.3 Focus Order",
            "page": 43
        },
        "9.2.4.4": {
            "title": "9.2.4.4 Link purpose (in context)",
            "page": 43
        },
        "9.2.4.5": {
            "title": "9.2.4.5 Multiple ways",
            "page": 44
        },
        "9.2.4.6": {
            "title": "9.2.4.6 Headings and labels",
            "page": 44
        },
        "9.2.4.7": {
            "title": "9.2.4.7 Focus visible",
            "page": 44
        },
        "9.2.5": {
            "title": "9.2.5 Input modalities",
            "page": 44
        },
        "9.2.5.1": {
            "title": "9.2.5.1 Pointer gestures",
            "page": 44
        },
        "9.2.5.2": {
            "title": "9.2.5.2 Pointer cancellation",
            "page": 44
        },
        "9.2.5.3": {
            "title": "9.2.5.3 Label in name",
            "page": 44
        },
        "9.2.5.4": {
            "title": "9.2.5.4 Motion actuation",
            "page": 44
        },
        "9.3": {
            "title": "9.3 Understandable",
            "page": 44
        },
        "9.3.1": {
            "title": "9.3.1 Readable",
            "page": 44
        },
        "9.3.1.1": {
            "title": "9.3.1.1 Language of page",
            "page": 44
        },
        "9.3.1.2": {
            "title": "9.3.1.2 Language of parts",
            "page": 44
        },
        "9.3.2": {
            "title": "9.3.2 Predictable",
            "page": 44
        },
        "9.3.2.1": {
            "title": "9.3.2.1 On focus",
            "page": 44
        },
        "9.3.2.2": {
            "title": "9.3.2.2 On input",
            "page": 44
        },
        "9.3.2.3": {
            "title": "9.3.2.3 Consistent navigation",
            "page": 45
        },
        "9.3.2.4": {
            "title": "9.3.2.4 Consistent identification",
            "page": 45
        },
        "9.3.3": {
            "title": "9.3.3 Input assistance",
            "page": 45
        },
        "9.3.3.1": {
            "title": "9.3.3.1 Error identification",
            "page": 45
        },
        "9.3.3.2": {
            "title": "9.3.3.2 Labels or instructions",
            "page": 45
        },
        "9.3.3.3": {
            "title": "9.3.3.3 Error suggestion",
            "page": 45
        },
        "9.3.3.4": {
            "title": "9.3.3.4 Error prevention (legal, financial, data)",
            "page": 45
        },
        "9.4": {
            "title": "9.4 Robust",
            "page": 45
        },
        "9.4.1": {
            "title": "9.4.1 Compatible",
            "page": 45
        },
        "9.4.1.1": {
            "title": "9.4.1.1 Parsing",
            "page": 45
        },
        "9.4.1.2": {
            "title": "9.4.1.2 Name, role, value",
            "page": 45
        },
        "9.4.1.3": {
            "title": "9.4.1.3 Status messages",
            "page": 45
        },
        "9.5": {
            "title": "9.5 WCAG conformance requirements",
            "page": 45
        },
        "10": {
            "title": "10 Non-web documents",
            "page": 47
        },
        "10.0": {
            "title": "10.0 General (informative)",
            "page": 47
        },
        "10.1": {
            "title": "10.1 Perceivable",
            "page": 47
        },
        "10.1.1": {
            "title": "10.1.1 Text alternatives",
            "page": 47
        },
        "10.1.1.1": {
            "title": "10.1.1.1 Non-text content",
            "page": 47
        },
        "10.1.2": {
            "title": "10.1.2 Time-based media",
            "page": 47
        },
        "10.1.2.1": {
            "title": "10.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 47
        },
        "10.1.2.2": {
            "title": "10.1.2.2 Captions (pre-recorded)",
            "page": 48
        },
        "10.1.2.3": {
            "title": "10.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 48
        },
        "10.1.2.4": {
            "title": "10.1.2.4 Captions (live)",
            "page": 48
        },
        "10.1.2.5": {
            "title": "10.1.2.5 Audio description (pre-recorded)",
            "page": 48
        },
        "10.1.3": {
            "title": "10.1.3 Adaptable",
            "page": 48
        },
        "10.1.3.1": {
            "title": "10.1.3.1 Info and relationships",
            "page": 48
        },
        "10.1.3.2": {
            "title": "10.1.3.2 Meaningful sequence",
            "page": 48
        },
        "10.1.3.3": {
            "title": "10.1.3.3 Sensory characteristics",
            "page": 48
        },
        "10.1.3.4": {
            "title": "10.1.3.4 Orientation",
            "page": 49
        },
        "10.1.3.5": {
            "title": "10.1.3.5 Identify input purpose",
            "page": 49
        },
        "10.1.4": {
            "title": "10.1.4 Distinguishable",
            "page": 49
        },
        "10.1.4.1": {
            "title": "10.1.4.1 Use of colour",
            "page": 49
        },
        "10.1.4.2": {
            "title": "10.1.4.2 Audio control",
            "page": 49
        },
        "10.1.4.3": {
            "title": "10.1.4.3 Contrast (minimum)",
            "page": 49
        },
        "10.1.4.4": {
            "title": "10.1.4.4 Resize text",
            "page": 49
        },
        "10.1.4.5": {
            "title": "10.1.4.5 Images of text",
            "page": 49
        },
        "10.1.4.6": {
            "title": "10.1.4.6 Void",
            "page": 49
        },
        "10.1.4.7": {
            "title": "10.1.4.7 Void",
            "page": 49
        },
        "10.1.4.8": {
            "title": "10.1.4.8 Void",
            "page": 49
        },
        "10.1.4.9": {
            "title": "10.1.4.9 Void",
            "page": 50
        },
        "10.1.4.10": {
            "title": "10.1.4.10 Reflow",
            "page": 50
        },
        "10.1.4.11": {
            "title": "10.1.4.11 Non-text contrast",
            "page": 50
        },
        "10.1.4.12": {
            "title": "10.1.4.12 Text spacing",
            "page": 50
        },
        "10.1.4.13": {
            "title": "10.1.4.13 Content on hover or focus",
            "page": 50
        },
        "10.2": {
            "title": "10.2 Operable",
            "page": 50
        },
        "10.2.1": {
            "title": "10.2.1 Keyboard accessible",
            "page": 50
        },
        "10.2.1.1": {
            "title": "10.2.1.1 Keyboard",
            "page": 50
        },
        "10.2.1.2": {
            "title": "10.2.1.2 No keyboard trap",
            "page": 51
        },
        "10.2.1.3": {
            "title": "10.2.1.3 Void",
            "page": 51
        },
        "10.2.1.4": {
            "title": "10.2.1.4 Character key shortcuts",
            "page": 51
        },
        "10.2.2": {
            "title": "10.2.2 Enough time",
            "page": 51
        },
        "10.2.2.1": {
            "title": "10.2.2.1 Timing adjustable",
            "page": 51
        },
        "10.2.2.2": {
            "title": "10.2.2.2 Pause, stop, hide",
            "page": 52
        },
        "10.2.3": {
            "title": "10.2.3 Seizures and physical reactions",
            "page": 52
        },
        "10.2.3.1": {
            "title": "10.2.3.1 Three flashes or below threshold",
            "page": 52
        },
        "10.2.4": {
            "title": "10.2.4 Navigable",
            "page": 52
        },
        "10.2.4.1": {
            "title": "10.2.4.1 Void",
            "page": 52
        },
        "10.2.4.2": {
            "title": "10.2.4.2 Document titled",
            "page": 52
        },
        "10.2.4.3": {
            "title": "10.2.4.3 Focus Order",
            "page": 53
        },
        "10.2.4.4": {
            "title": "10.2.4.4 Link purpose (in context)",
            "page": 53
        },
        "10.2.4.5": {
            "title": "10.2.4.5 Void",
            "page": 53
        },
        "10.2.4.6": {
            "title": "10.2.4.6 Headings and labels",
            "page": 53
        },
        "10.2.4.7": {
            "title": "10.2.4.7 Focus visible",
            "page": 53
        },
        "10.2.5": {
            "title": "10.2.5 Input modalities",
            "page": 53
        },
        "10.2.5.1": {
            "title": "10.2.5.1 Pointer gestures",
            "page": 53
        },
        "10.2.5.2": {
            "title": "10.2.5.2 Pointer cancellation",
            "page": 53
        },
        "10.2.5.3": {
            "title": "10.2.5.3 Label in name",
            "page": 54
        },
        "10.2.5.4": {
            "title": "10.2.5.4 Motion actuation",
            "page": 54
        },
        "10.3": {
            "title": "10.3 Understandable",
            "page": 54
        },
        "10.3.1": {
            "title": "10.3.1 Readable",
            "page": 54
        },
        "10.3.1.1": {
            "title": "10.3.1.1 Language of page",
            "page": 54
        },
        "10.3.1.2": {
            "title": "10.3.1.2 Language of parts",
            "page": 54
        },
        "10.3.2": {
            "title": "10.3.2 Predictable",
            "page": 55
        },
        "10.3.2.1": {
            "title": "10.3.2.1 On focus",
            "page": 55
        },
        "10.3.2.2": {
            "title": "10.3.2.2 On input",
            "page": 55
        },
        "10.3.2.3": {
            "title": "10.3.2.3 Void",
            "page": 55
        },
        "10.3.2.4": {
            "title": "10.3.2.4 Void",
            "page": 55
        },
        "10.3.3": {
            "title": "10.3.3 Input assistance",
            "page": 55
        },
        "10.3.3.1": {
            "title": "10.3.3.1 Error identification",
            "page": 55
        },
        "10.3.3.2": {
            "title": "10.3.3.2 Labels or instructions",
            "page": 55
        },
        "10.3.3.3": {
            "title": "10.3.3.3 Error suggestion",
            "page": 55
        },
        "10.3.3.4": {
            "title": "10.3.3.4 Error prevention (legal, financial, data)",
            "page": 55
        },
        "10.4": {
            "title": "10.4 Robust",
            "page": 56
        },
        "10.4.1": {
            "title": "10.4.1 Compatible",
            "page": 56
        },
        "10.4.1.1": {
            "title": "10.4.1.1 Parsing",
            "page": 56
        },
        "10.4.1.2": {
            "title": "10.4.1.2 Name, role, value",
            "page": 56
        },
        "10.4.1.3": {
            "title": "10.4.1.3 Void",
            "page": 56
        },
        "10.5": {
            "title": "10.5 Caption positioning",
            "page": 56
        },
        "10.6": {
            "title": "10.6 Audio description timing",
            "page": 57
        },
        "11": {
            "title": "11 Software",
            "page": 57
        },
        "11.0": {
            "title": "11.0 General (informative)",
            "page": 57
        },
        "11.1": {
            "title": "11.1 Perceivable",
            "page": 58
        },
        "11.1.1": {
            "title": "11.1.1 Text alternatives",
            "page": 58
        },
        "11.1.1.1": {
            "title": "11.1.1.1 Non-text content",
            "page": 58
        },
        "11.1.1.1.1": {
            "title": "11.1.1.1.1 Non-text content (open functionality)",
            "page": 58
        },
        "11.1.1.1.2": {
            "title": "11.1.1.1.2 Non-text content (closed functionality)",
            "page": 58
        },
        "11.1.2": {
            "title": "11.1.2 Time-based media",
            "page": 58
        },
        "11.1.2.1": {
            "title": "11.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 58
        },
        "11.1.2.1.1": {
            "title": "11.1.2.1.1 Audio-only and video-only (pre-recorded - open functionality)",
            "page": 58
        },
        "11.1.2.1.2": {
            "title": "11.1.2.1.2 Audio-only and video-only (pre-recorded - closed functionality)",
            "page": 58
        },
        "11.1.2.1.2.1": {
            "title": "11.1.2.1.2.1 Pre-recorded audio-only (closed functionality)",
            "page": 58
        },
        "11.1.2.1.2.2": {
            "title": "11.1.2.1.2.2 Pre-recorded video-only (closed functionality)",
            "page": 58
        },
        "11.1.2.2": {
            "title": "11.1.2.2 Captions (pre-recorded)",
            "page": 58
        },
        "11.1.2.3": {
            "title": "11.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 59
        },
        "11.1.2.3.1": {
            "title": "11.1.2.3.1 Audio description or media alternative (pre-recorded - open functionality)",
            "page": 59
        },
        "11.1.2.3.2": {
            "title": "11.1.2.3.2 Audio description or media alternative (pre-recorded - closed functionality)",
            "page": 59
        },
        "11.1.2.4": {
            "title": "11.1.2.4 Captions (live)",
            "page": 59
        },
        "11.1.2.5": {
            "title": "11.1.2.5 Audio description (pre-recorded)",
            "page": 59
        },
        "11.1.3": {
            "title": "11.1.3 Adaptable",
            "page": 59
        },
        "11.1.3.1": {
            "title": "11.1.3.1 Info and relationships",
            "page": 59
        },
        "11.1.3.1.1": {
            "title": "11.1.3.1.1 Info and relationships (open functionality)",
            "page": 59
        },
        "11.1.3.1.2": {
            "title": "11.1.3.1.2 Info and relationships (closed functionality)",
            "page": 60
        },
        "11.1.3.2": {
            "title": "11.1.3.2 Meaningful sequence",
            "page": 60
        },
        "11.1.3.2.1": {
            "title": "11.1.3.2.1 Meaningful sequence (open functionality)",
            "page": 60
        },
        "11.1.3.2.2": {
            "title": "11.1.3.2.2 Meaningful sequence (closed functionality)",
            "page": 60
        },
        "11.1.3.3": {
            "title": "11.1.3.3 Sensory characteristics",
            "page": 60
        },
        "11.1.3.4": {
            "title": "11.1.3.4 Orientation",
            "page": 60
        },
        "11.1.3.5": {
            "title": "11.1.3.5 Identify input purpose",
            "page": 60
        },
        "11.1.4": {
            "title": "11.1.4 Distinguishable",
            "page": 61
        },
        "11.1.4.1": {
            "title": "11.1.4.1 Use of colour",
            "page": 61
        },
        "11.1.4.2": {
            "title": "11.1.4.2 Audio control",
            "page": 61
        },
        "11.1.4.3": {
            "title": "11.1.4.3 Contrast (minimum)",
            "page": 61
        },
        "11.1.4.4": {
            "title": "11.1.4.4 Resize text",
            "page": 61
        },
        "11.1.4.4.1": {
            "title": "11.1.4.4.1 Resize text (open functionality)",
            "page": 61
        },
        "11.1.4.4.2": {
            "title": "11.1.4.4.2 Resize text (closed functionality)",
            "page": 61
        },
        "11.1.4.5": {
            "title": "11.1.4.5 Images of text",
            "page": 62
        },
        "11.1.4.5.1": {
            "title": "11.1.4.5.1 Images of text (open functionality)",
            "page": 62
        },
        "11.1.4.5.2": {
            "title": "11.1.4.5.2 Images of text (closed functionality)",
            "page": 62
        },
        "11.1.4.6": {
            "title": "11.1.4.6 Void",
            "page": 62
        },
        "11.1.4.7": {
            "title": "11.1.4.7 Void",
            "page": 62
        },
        "11.1.4.8": {
            "title": "11.1.4.8 Void",
            "page": 62
        },
        "11.1.4.9": {
            "title": "11.1.4.9 Void",
            "page": 62
        },
        "11.1.4.10": {
            "title": "11.1.4.10 Reflow",
            "page": 62
        },
        "11.1.4.10.1": {
            "title": "11.1.4.10.1 Reflow (open functionality)",
            "page": 62
        },
        "11.1.4.10.2": {
            "title": "11.1.4.10.2 Reflow (closed functionality)",
            "page": 62
        },
        "11.1.4.11": {
            "title": "11.1.4.11 Non-text contrast",
            "page": 62
        },
        "11.1.4.12": {
            "title": "11.1.4.12 Text spacing",
            "page": 63
        },
        "11.1.4.13": {
            "title": "11.1.4.13 Content on hover or focus",
            "page": 63
        },
        "11.2": {
            "title": "11.2 Operable",
            "page": 63
        },
        "11.2.1": {
            "title": "11.2.1 Keyboard accessible",
            "page": 63
        },
        "11.2.1.1": {
            "title": "11.2.1.1 Keyboard",
            "page": 63
        },
        "11.2.1.1.1": {
            "title": "11.2.1.1.1 Keyboard (open functionality)",
            "page": 63
        },
        "11.2.1.1.2": {
            "title": "11.2.1.1.2 Keyboard (closed functionality)",
            "page": 63
        },
        "11.2.1.2": {
            "title": "11.2.1.2 No keyboard trap",
            "page": 64
        },
        "11.2.1.3": {
            "title": "11.2.1.3 Void",
            "page": 64
        },
        "11.2.1.4": {
            "title": "11.2.1.4 Character key shortcuts",
            "page": 64
        },
        "11.2.1.4.1": {
            "title": "11.2.1.4.1 Character key shortcuts (open functionality)",
            "page": 64
        },
        "11.2.1.4.2": {
            "title": "11.2.1.4.2 Character key shortcuts (closed functionality)",
            "page": 64
        },
        "11.2.2": {
            "title": "11.2.2 Enough time",
            "page": 64
        },
        "11.2.2.1": {
            "title": "11.2.2.1 Timing adjustable",
            "page": 64
        },
        "11.2.2.2": {
            "title": "11.2.2.2 Pause, stop, hide",
            "page": 65
        },
        "11.2.3": {
            "title": "11.2.3 Seizures and physical reactions",
            "page": 65
        },
        "11.2.3.1": {
            "title": "11.2.3.1 Three flashes or below threshold",
            "page": 65
        },
        "11.2.4": {
            "title": "11.2.4 Navigable",
            "page": 66
        },
        "11.2.4.1": {
            "title": "11.2.4.1 Void",
            "page": 66
        },
        "11.2.4.2": {
            "title": "11.2.4.2 Void",
            "page": 66
        },
        "11.2.4.3": {
            "title": "11.2.4.3 Focus order",
            "page": 66
        },
        "11.2.4.4": {
            "title": "11.2.4.4 Link purpose (in context)",
            "page": 66
        },
        "11.2.4.5": {
            "title": "11.2.4.5 Void",
            "page": 66
        },
        "11.2.4.6": {
            "title": "11.2.4.6 Headings and labels",
            "page": 66
        },
        "11.2.4.7": {
            "title": "11.2.4.7 Focus visible",
            "page": 66
        },
        "11.2.5": {
            "title": "11.2.5 Input modalities",
            "page": 66
        },
        "11.2.5.1": {
            "title": "11.2.5.1 Pointer gestures",
            "page": 66
        },
        "11.2.5.2": {
            "title": "11.2.5.2 Pointer cancellation",
            "page": 66
        },
        "11.2.5.3": {
            "title": "11.2.5.3 Label in name",
            "page": 67
        },
        "11.2.5.4": {
            "title": "11.2.5.4 Motion actuation",
            "page": 67
        },
        "11.3": {
            "title": "11.3 Understandable",
            "page": 67
        },
        "11.3.1": {
            "title": "11.3.1 Readable",
            "page": 67
        },
        "11.3.1.1": {
            "title": "11.3.1.1 Language of software",
            "page": 67
        },
        "11.3.1.1.1": {
            "title": "11.3.1.1.1 Language of software (open functionality)",
            "page": 67
        },
        "11.3.1.1.2": {
            "title": "11.3.1.1.2 Language of software (closed functionality)",
            "page": 67
        },
        "11.3.1.2": {
            "title": "11.3.1.2 Void",
            "page": 68
        },
        "11.3.2": {
            "title": "11.3.2 Predictable",
            "page": 68
        },
        "11.3.2.1": {
            "title": "11.3.2.1 On focus",
            "page": 68
        },
        "11.3.2.2": {
            "title": "11.3.2.2 On input",
            "page": 68
        },
        "11.3.2.3": {
            "title": "11.3.2.3 Void",
            "page": 68
        },
        "11.3.2.4": {
            "title": "11.3.2.4 Void",
            "page": 68
        },
        "11.3.3": {
            "title": "11.3.3 Input assistance",
            "page": 68
        },
        "11.3.3.1": {
            "title": "11.3.3.1 Error identification",
            "page": 68
        },
        "11.3.3.1.1": {
            "title": "11.3.3.1.1 Error identification (open functionality)",
            "page": 68
        },
        "11.3.3.1.2": {
            "title": "11.3.3.1.2 Error Identification (closed functionality)",
            "page": 68
        },
        "11.3.3.2": {
            "title": "11.3.3.2 Labels or instructions",
            "page": 68
        },
        "11.3.3.3": {
            "title": "11.3.3.3 Error suggestion",
            "page": 68
        },
        "11.3.3.4": {
            "title": "11.3.3.4 Error prevention (legal, financial, data)",
            "page": 68
        },
        "11.4": {
            "title": "11.4 Robust",
            "page": 69
        },
        "11.4.1": {
            "title": "11.4.1 Compatible",
            "page": 69
        },
        "11.4.1.1": {
            "title": "11.4.1.1 Parsing",
            "page": 69
        },
        "11.4.1.1.1": {
            "title": "11.4.1.1.1 Parsing (open functionality)",
            "page": 69
        },
        "11.4.1.1.2": {
            "title": "11.4.1.1.2 Parsing (closed functionality)",
            "page": 69
        },
        "11.4.1.2": {
            "title": "11.4.1.2 Name, role, value",
            "page": 70
        },
        "11.4.1.2.1": {
            "title": "11.4.1.2.1 Name, role, value (open functionality)",
            "page": 70
        },
        "11.4.1.2.2": {
            "title": "11.4.1.2.2 Name, role, value (closed functionality)",
            "page": 70
        },
        "11.4.1.3": {
            "title": "11.4.1.3 Void",
            "page": 70
        },
        "11.5": {
            "title": "11.5 Interoperability with assistive technology",
            "page": 70
        },
        "11.5.1": {
            "title": "11.5.1 Closed functionality",
            "page": 70
        },
        "11.5.2": {
            "title": "11.5.2 Accessibility services",
            "page": 70
        },
        "11.5.2.1": {
            "title": "11.5.2.1 Platform accessibility service support for software that provides a user interface",
            "page": 70
        },
        "11.5.2.2": {
            "title": "11.5.2.2 Platform accessibility service support for assistive technologies",
            "page": 71
        },
        "11.5.2.3": {
            "title": "11.5.2.3 Use of accessibility services",
            "page": 71
        },
        "11.5.2.4": {
            "title": "11.5.2.4 Assistive technology",
            "page": 71
        },
        "11.5.2.5": {
            "title": "11.5.2.5 Object information",
            "page": 72
        },
        "11.5.2.6": {
            "title": "11.5.2.6 Row, column, and headers",
            "page": 72
        },
        "11.5.2.7": {
            "title": "11.5.2.7 Values",
            "page": 72
        },
        "11.5.2.8": {
            "title": "11.5.2.8 Label relationships",
            "page": 72
        },
        "11.5.2.9": {
            "title": "11.5.2.9 Parent-child relationships",
            "page": 72
        },
        "11.5.2.10": {
            "title": "11.5.2.10 Text",
            "page": 72
        },
        "11.5.2.11": {
            "title": "11.5.2.11 List of available actions",
            "page": 72
        },
        "11.5.2.12": {
            "title": "11.5.2.12 Execution of available actions",
            "page": 72
        },
        "11.5.2.13": {
            "title": "11.5.2.13 Tracking of focus and selection attributes",
            "page": 73
        },
        "11.5.2.14": {
            "title": "11.5.2.14 Modification of focus and selection attributes",
            "page": 73
        },
        "11.5.2.15": {
            "title": "11.5.2.15 Change notification",
            "page": 73
        },
        "11.5.2.16": {
            "title": "11.5.2.16 Modifications of states and properties",
            "page": 73
        },
        "11.5.2.17": {
            "title": "11.5.2.17 Modifications of values and text",
            "page": 73
        },
        "11.6": {
            "title": "11.6 Documented accessibility usage",
            "page": 74
        },
        "11.6.1": {
            "title": "11.6.1 User control of accessibility features",
            "page": 74
        },
        "11.6.2": {
            "title": "11.6.2 No disruption of accessibility features",
            "page": 74
        },
        "11.7": {
            "title": "11.7 User preferences",
            "page": 74
        },
        "11.8": {
            "title": "11.8 Authoring tools",
            "page": 74
        },
        "11.8.1": {
            "title": "11.8.1 Content technology",
            "page": 74
        },
        "11.8.2": {
            "title": "11.8.2 Accessible content creation",
            "page": 74
        },
        "11.8.3": {
            "title": "11.8.3 Preservation of accessibility information in transformations",
            "page": 74
        },
        "11.8.4": {
            "title": "11.8.4 Repair assistance",
            "page": 74
        },
        "11.8.5": {
            "title": "11.8.5 Templates",
            "page": 75
        },
        "12": {
            "title": "12 Documentation and support services",
            "page": 76
        },
        "12.1": {
            "title": "12.1 Product documentation",
            "page": 76
        },
        "12.1.1": {
            "title": "12.1.1 Accessibility and compatibility features",
            "page": 76
        },
        "12.1.2": {
            "title": "12.1.2 Accessible documentation",
            "page": 76
        },
        "12.2": {
            "title": "12.2 Support services",
            "page": 76
        },
        "12.2.1": {
            "title": "12.2.1 General (informative)",
            "page": 76
        },
        "12.2.2": {
            "title": "12.2.2 Information on accessibility and compatibility features",
            "page": 76
        },
        "12.2.3": {
            "title": "12.2.3 Effective communication",
            "page": 76
        },
        "12.2.4": {
            "title": "12.2.4 Accessible documentation",
            "page": 77
        },
        "13": {
            "title": "13 ICT providing relay or emergency service access",
            "page": 78
        },
        "13.1": {
            "title": "13.1 Relay services requirements",
            "page": 78
        },
        "13.1.1": {
            "title": "13.1.1 General (informative)",
            "page": 78
        },
        "13.1.2": {
            "title": "13.1.2 Text relay services",
            "page": 78
        },
        "13.1.3": {
            "title": "13.1.3 Sign relay services",
            "page": 78
        },
        "13.1.4": {
            "title": "13.1.4 Lip-reading relay services",
            "page": 78
        },
        "13.1.5": {
            "title": "13.1.5 Captioned telephony services",
            "page": 78
        },
        "13.1.6": {
            "title": "13.1.6 Speech to speech relay services",
            "page": 78
        },
        "13.2": {
            "title": "13.2 Access to relay services",
            "page": 78
        },
        "13.3": {
            "title": "13.3 Access to emergency services",
            "page": 79
        },
        "Annex A": {
            "title": "Annex A (informative): Relationship between the present document and the essential requirements of Directive 2016/2102",
            "page": 80
        },
        "Annex B": {
            "title": "Annex B (informative): Relationship between requirements and functional performance statements",
            "page": 88
        },
        "B.1": {
            "title": "B.1 Relationships between clauses 5 to 13 and the functional performance statements",
            "page": 88
        },
        "Annex C": {
            "title": "Annex C (normative): Determination of compliance",
            "page": 96
        },
        "C.1": {
            "title": "C.1 Introduction",
            "page": 96
        },
        "C.2": {
            "title": "C.2 Empty clause",
            "page": 96
        },
        "C.3": {
            "title": "C.3 Empty clause",
            "page": 97
        },
        "C.4": {
            "title": "C.4 Functional performance",
            "page": 97
        },
        "C.5": {
            "title": "C.5 Generic requirements",
            "page": 97
        },
        "C.5.1": {
            "title": "C.5.1 Closed functionality",
            "page": 97
        },
        "C.5.1.1": {
            "title": "C.5.1.1 Introduction",
            "page": 97
        },
        "C.5.1.2": {
            "title": "C.5.1.2 General",
            "page": 97
        },
        "C.5.1.2.1": {
            "title": "C.5.1.2.1 Closed functionality",
            "page": 97
        },
        "C.5.1.2.2": {
            "title": "C.5.1.2.2 Assistive technology",
            "page": 97
        },
        "C.5.1.3": {
            "title": "C.5.1.3 Non-visual access",
            "page": 97
        },
        "C.5.1.3.1": {
            "title": "C.5.1.3.1 General",
            "page": 97
        },
        "C.5.1.3.2": {
            "title": "C.5.1.3.2 Auditory output delivery including speech",
            "page": 97
        },
        "C.5.1.3.3": {
            "title": "C.5.1.3.3 Auditory output correlation",
            "page": 98
        },
        "C.5.1.3.4": {
            "title": "C.5.1.3.4 Speech output user control",
            "page": 98
        },
        "C.5.1.3.5": {
            "title": "C.5.1.3.5 Speech output automatic interruption",
            "page": 98
        },
        "C.5.1.3.6": {
            "title": "C.5.1.3.6 Speech output for non-text content",
            "page": 98
        },
        "C.5.1.3.7": {
            "title": "C.5.1.3.7 Speech output for video information",
            "page": 98
        },
        "C.5.1.3.8": {
            "title": "C.5.1.3.8 Masked entry",
            "page": 98
        },
        "C.5.1.3.9": {
            "title": "C.5.1.3.9 Private access to personal data",
            "page": 99
        },
        "C.5.1.3.10": {
            "title": "C.5.1.3.10 Non-interfering audio output",
            "page": 99
        },
        "C.5.1.3.11": {
            "title": "C.5.1.3.11 Private listening volume",
            "page": 99
        },
        "C.5.1.3.12": {
            "title": "C.5.1.3.12 Speaker volume",
            "page": 99
        },
        "C.5.1.3.13": {
            "title": "C.5.1.3.13 Volume reset",
            "page": 99
        },
        "C.5.1.3.14": {
            "title": "C.5.1.3.14 Spoken languages",
            "page": 100
        },
        "C.5.1.3.15": {
            "title": "C.5.1.3.15 Non-visual error identification",
            "page": 100
        },
        "C.5.1.3.16": {
            "title": "C.5.1.3.16 Receipts, tickets and transactional outputs",
            "page": 100
        },
        "C.5.1.4": {
            "title": "C.5.1.4 Functionality closed to text enlargement",
            "page": 100
        },
        "C.5.1.5": {
            "title": "C.5.1.5 Visual output for auditory information",
            "page": 100
        },
        "C.5.1.6": {
            "title": "C.5.1.6 Operation without keyboard interface",
            "page": 101
        },
        "C.5.1.6.1": {
            "title": "C.5.1.6.1 Closed functionality",
            "page": 101
        },
        "C.5.1.6.2": {
            "title": "C.5.1.6.2 Input focus",
            "page": 101
        },
        "C.5.2": {
            "title": "C.5.2 Activation of accessibility features",
            "page": 101
        },
        "C.5.3": {
            "title": "C.5.3 Biometrics",
            "page": 101
        },
        "C.5.4": {
            "title": "C.5.4 Preservation of accessibility information during conversion",
            "page": 101
        },
        "C.5.5": {
            "title": "C.5.5 Operable parts",
            "page": 102
        },
        "C.5.5.1": {
            "title": "C.5.5.1 Means of operation",
            "page": 102
        },
        "C.5.5.2": {
            "title": "C.5.5.2 Operable part discernibility",
            "page": 102
        },
        "C.5.6": {
            "title": "C.5.6 Locking or toggle controls",
            "page": 102
        },
        "C.5.6.1": {
            "title": "C.5.6.1 Tactile or auditory status",
            "page": 102
        },
        "C.5.6.2": {
            "title": "C.5.6.2 Visual status",
            "page": 102
        },
        "C.5.7": {
            "title": "C.5.7 Key repeat",
            "page": 102
        },
        "C.5.8": {
            "title": "C.5.8 Double-strike key acceptance",
            "page": 103
        },
        "C.5.9": {
            "title": "C.5.9 Simultaneous user actions",
            "page": 103
        },
        "C.6": {
            "title": "C.6 ICT with two-way voice communication",
            "page": 103
        },
        "C.6.1": {
            "title": "C.6.1 Audio bandwidth for speech",
            "page": 103
        },
        "C.6.2": {
            "title": "C.6.2 Real-Time Text (RTT) functionality",
            "page": 103
        },
        "C.6.2.1": {
            "title": "C.6.2.1 RTT provision",
            "page": 103
        },
        "C.6.2.1.1": {
            "title": "C.6.2.1.1 RTT communication",
            "page": 103
        },
        "C.6.2.1.2": {
            "title": "C.6.2.1.2 Concurrent voice and text",
            "page": 104
        },
        "C.6.2.2": {
            "title": "C.6.2.2 Display of Real-Time Text",
            "page": 104
        },
        "C.6.2.2.1": {
            "title": "C.6.2.2.1 Visually distinguishable display",
            "page": 104
        },
        "C.6.2.2.2": {
            "title": "C.6.2.2.2 Programmatically determinable send and receive direction",
            "page": 104
        },
        "C.6.2.3": {
            "title": "C.6.2.3 Interoperability",
            "page": 105
        },
        "C.6.2.4": {
            "title": "C.6.2.4 Real-Time Text responsiveness",
            "page": 105
        },
        "C.6.3": {
            "title": "C.6.3 Caller ID",
            "page": 105
        },
        "C.6.4": {
            "title": "C.6.4 Alternatives to voice-based services",
            "page": 105
        },
        "C.6.5": {
            "title": "C.6.5 Video communication",
            "page": 106
        },
        "C.6.5.1": {
            "title": "C.6.5.1 General",
            "page": 106
        },
        "C.6.5.2": {
            "title": "C.6.5.2 Resolution",
            "page": 106
        },
        "C.6.5.3": {
            "title": "C.6.5.3 Frame rate",
            "page": 106
        },
        "C.6.5.4": {
            "title": "C.6.5.4 Synchronization between audio and video",
            "page": 106
        },
        "C.6.6": {
            "title": "C.6.6 Alternatives to video-based services",
            "page": 106
        },
        "C.7": {
            "title": "C.7 ICT with video capabilities",
            "page": 106
        },
        "C.7.1": {
            "title": "C.7.1 Caption processing technology",
            "page": 106
        },
        "C.7.1.1": {
            "title": "C.7.1.1 Captioning playback",
            "page": 106
        },
        "C.7.1.2": {
            "title": "C.7.1.2 Captioning synchronization",
            "page": 107
        },
        "C.7.1.3": {
            "title": "C.7.1.3 Preservation of captioning",
            "page": 107
        },
        "C.7.2": {
            "title": "C.7.2 Audio description technology",
            "page": 107
        },
        "C.7.2.1": {
            "title": "C.7.2.1 Audio description playback",
            "page": 107
        },
        "C.7.2.2": {
            "title": "C.7.2.2 Audio description synchronization",
            "page": 107
        },
        "C.7.2.3": {
            "title": "C.7.2.3 Preservation of audio description",
            "page": 107
        },
        "C.7.3": {
            "title": "C.7.3 User controls for captions and audio description",
            "page": 107
        },
        "C.8": {
            "title": "C.8 Hardware",
            "page": 108
        },
        "C.8.1": {
            "title": "C.8.1 General",
            "page": 108
        },
        "C.8.1.1": {
            "title": "C.8.1.1 Generic requirements",
            "page": 108
        },
        "C.8.1.2": {
            "title": "C.8.1.2 Standard connections",
            "page": 108
        },
        "C.8.1.3": {
            "title": "C.8.1.3 Colour",
            "page": 108
        },
        "C.8.2": {
            "title": "C.8.2 Hardware products with speech output",
            "page": 108
        },
        "C.8.2.1": {
            "title": "C.8.2.1 Speech volume gain",
            "page": 108
        },
        "C.8.2.1.1": {
            "title": "C.8.2.1.1 Speech volume range",
            "page": 108
        },
        "C.8.2.1.2": {
            "title": "C.8.2.1.2 Incremental volume control",
            "page": 108
        },
        "C.8.2.2": {
            "title": "C.8.2.2 Magnetic coupling",
            "page": 109
        },
        "C.8.2.2.1": {
            "title": "C.8.2.2.1 Fixed-line devices",
            "page": 109
        },
        "C.8.2.2.2": {
            "title": "C.8.2.2.2 Wireless communication devices",
            "page": 109
        },
        "C.8.3": {
            "title": "C.8.3 Physical access to ICT",
            "page": 109
        },
        "C.8.3.1": {
            "title": "C.8.3.1 General",
            "page": 109
        },
        "C.8.3.2": {
            "title": "C.8.3.2 Clear floor or ground space",
            "page": 109
        },
        "C.8.3.2.1": {
            "title": "C.8.3.2.1 Change in level",
            "page": 109
        },
        "C.8.3.2.2": {
            "title": "C.8.3.2.2 Clear floor or ground space",
            "page": 110
        },
        "C.8.3.2.3": {
            "title": "C.8.3.2.3 Approach",
            "page": 110
        },
        "C.8.3.2.3.1": {
            "title": "C.8.3.2.3.1 General",
            "page": 110
        },
        "C.8.3.2.3.2": {
            "title": "C.8.3.2.3.2 Forward Approach",
            "page": 110
        },
        "C.8.3.2.3.3": {
            "title": "C.8.3.2.3.3 Parallel Approach",
            "page": 110
        },
        "C.8.3.2.4": {
            "title": "C.8.3.2.4 Knee and toe clearance width",
            "page": 110
        },
        "C.8.3.2.5": {
            "title": "C.8.3.2.5 Toe clearance",
            "page": 110
        },
        "C.8.3.2.6": {
            "title": "C.8.3.2.6 Knee clearance",
            "page": 111
        },
        "C.8.3.3": {
            "title": "C.8.3.3 Reach range for ICT",
            "page": 111
        },
        "C.8.3.3.1": {
            "title": "C.8.3.3.1 Forward reach",
            "page": 111
        },
        "C.8.3.3.1.1": {
            "title": "C.8.3.3.1.1 Unobstructed high forward reach",
            "page": 111
        },
        "C.8.3.3.1.2": {
            "title": "C.8.3.3.1.2 Unobstructed low forward reach",
            "page": 111
        },
        "C.8.3.3.1.3": {
            "title": "C.8.3.3.1.3 Obstructed reach",
            "page": 112
        },
        "C.8.3.3.2": {
            "title": "C.8.3.3.2 Side reach",
            "page": 112
        },
        "C.8.3.3.2.1": {
            "title": "C.8.3.3.2.1 Unobstructed high side reach",
            "page": 112
        },
        "C.8.3.3.2.2": {
            "title": "C.8.3.3.2.2 Unobstructed low side reach",
            "page": 112
        },
        "C.8.3.3.2.3": {
            "title": "C.8.3.3.2.3 Obstructed side reach",
            "page": 112
        },
        "C.8.3.4": {
            "title": "C.8.3.4 Visibility",
            "page": 113
        },
        "C.8.3.5": {
            "title": "C.8.3.5 Installation instructions",
            "page": 113
        },
        "C.8.4": {
            "title": "C.8.4 Mechanically operable parts",
            "page": 113
        },
        "C.8.4.1": {
            "title": "C.8.4.1 Numeric keys",
            "page": 113
        },
        "C.8.4.2": {
            "title": "C.8.4.2 Operation of mechanical parts",
            "page": 113
        },
        "C.8.4.2.1": {
            "title": "C.8.4.2.1 Means of operation of mechanical parts",
            "page": 113
        },
        "C.8.4.2.2": {
            "title": "C.8.4.2.2 Force of operation of mechanical parts",
            "page": 113
        },
        "C.8.4.3": {
            "title": "C.8.4.3 Keys, tickets and fare cards",
            "page": 114
        },
        "C.8.5": {
            "title": "C.8.5 Tactile indication of speech mode",
            "page": 114
        },
        "C.9": {
            "title": "C.9 Web",
            "page": 114
        },
        "C.9.0": {
            "title": "C.9.0 General (informative)",
            "page": 114
        },
        "C.9.1": {
            "title": "C.9.1 Perceivable",
            "page": 114
        },
        "C.9.1.1": {
            "title": "C.9.1.1 Text alternatives",
            "page": 114
        },
        "C.9.1.1.1": {
            "title": "C.9.1.1.1 Non-text content",
            "page": 114
        },
        "C.9.1.2": {
            "title": "C.9.1.2 Time-based media",
            "page": 114
        },
        "C.9.1.2.1": {
            "title": "C.9.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 114
        },
        "C.9.1.2.2": {
            "title": "C.9.1.2.2 Captions (pre-recorded)",
            "page": 114
        },
        "C.9.1.2.3": {
            "title": "C.9.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 115
        },
        "C.9.1.2.4": {
            "title": "C.9.1.2.4 Captions (live)",
            "page": 115
        },
        "C.9.1.2.5": {
            "title": "C.9.1.2.5 Audio description (pre-recorded)",
            "page": 115
        },
        "C.9.1.3": {
            "title": "C.9.1.3 Adaptable",
            "page": 115
        },
        "C.9.1.3.1": {
            "title": "C.9.1.3.1 Info and relationships",
            "page": 115
        },
        "C.9.1.3.2": {
            "title": "C.9.1.3.2 Meaningful sequence",
            "page": 115
        },
        "C.9.1.3.3": {
            "title": "C.9.1.3.3 Sensory characteristics",
            "page": 115
        },
        "C.9.1.3.4": {
            "title": "C.9.1.3.4 Orientation",
            "page": 115
        },
        "C.9.1.3.5": {
            "title": "C.9.1.3.5 Identify input purpose",
            "page": 116
        },
        "C.9.1.4": {
            "title": "C.9.1.4 Distinguishable",
            "page": 116
        },
        "C.9.1.4.1": {
            "title": "C.9.1.4.1 Use of colour",
            "page": 116
        },
        "C.9.1.4.2": {
            "title": "C.9.1.4.2 Audio control",
            "page": 116
        },
        "C.9.1.4.3": {
            "title": "C.9.1.4.3 Contrast (minimum)",
            "page": 116
        },
        "C.9.1.4.4": {
            "title": "C.9.1.4.4 Resize text",
            "page": 116
        },
        "C.9.1.4.5": {
            "title": "C.9.1.4.5 Images of text",
            "page": 116
        },
        "C.9.1.4.6": {
            "title": "C.9.1.4.6 Void",
            "page": 116
        },
        "C.9.1.4.7": {
            "title": "C.9.1.4.7 Void",
            "page": 116
        },
        "C.9.1.4.8": {
            "title": "C.9.1.4.8 Void",
            "page": 116
        },
        "C.9.1.4.9": {
            "title": "C.9.1.4.9 Void",
            "page": 116
        },
        "C.9.1.4.10": {
            "title": "C.9.1.4.10 Reflow",
            "page": 117
        },
        "C.9.1.4.11": {
            "title": "C.9.1.4.11 Non-text contrast",
            "page": 117
        },
        "C.9.1.4.12": {
            "title": "C.9.1.4.12 Text spacing",
            "page": 117
        },
        "C.9.1.4.13": {
            "title": "C.9.1.4.13 Content on hover or focus",
            "page": 117
        },
        "C.9.2": {
            "title": "C.9.2 Operable",
            "page": 117
        },
        "C.9.2.1": {
            "title": "C.9.2.1 Keyboard accessible",
            "page": 117
        },
        "C.9.2.1.1": {
            "title": "C.9.2.1.1 Keyboard",
            "page": 117
        },
        "C.9.2.1.2": {
            "title": "C.9.2.1.2 No keyboard trap",
            "page": 117
        },
        "C.9.2.1.3": {
            "title": "C.9.2.1.3 Void",
            "page": 117
        },
        "C.9.2.1.4": {
            "title": "C.9.2.1.4 Character key shortcuts",
            "page": 118
        },
        "C.9.2.2": {
            "title": "C.9.2.2 Enough time",
            "page": 118
        },
        "C.9.2.2.1": {
            "title": "C.9.2.2.1 Timing adjustable",
            "page": 118
        },
        "C.9.2.2.2": {
            "title": "C.9.2.2.2 Pause, stop, hide",
            "page": 118
        },
        "C.9.2.3": {
            "title": "C.9.2.3 Seizures and physical reactions",
            "page": 118
        },
        "C.9.2.3.1": {
            "title": "C.9.2.3.1 Three flashes or below threshold",
            "page": 118
        },
        "C.9.2.4": {
            "title": "C.9.2.4 Navigable",
            "page": 118
        },
        "C.9.2.4.1": {
            "title": "C.9.2.4.1 Bypass blocks",
            "page": 118
        },
        "C.9.2.4.2": {
            "title": "C.9.2.4.2 Page titled",
            "page": 118
        },
        "C.9.2.4.3": {
            "title": "C.9.2.4.3 Focus Order",
            "page": 119
        },
        "C.9.2.4.4": {
            "title": "C.9.2.4.4 Link purpose (in context)",
            "page": 119
        },
        "C.9.2.4.5": {
            "title": "C.9.2.4.5 Multiple ways",
            "page": 119
        },
        "C.9.2.4.6": {
            "title": "C.9.2.4.6 Headings and labels",
            "page": 119
        },
        "C.9.2.4.7": {
            "title": "C.9.2.4.7 Focus visible",
            "page": 119
        },
        "C.9.2.5": {
            "title": "C.9.2.5 Input modalities",
            "page": 119
        },
        "C.9.2.5.1": {
            "title": "C.9.2.5.1 Pointer gestures",
            "page": 119
        },
        "C.9.2.5.2": {
            "title": "C.9.2.5.2 Pointer cancellation",
            "page": 119
        },
        "C.9.2.5.3": {
            "title": "C.9.2.5.3 Label in name",
            "page": 120
        },
        "C.9.2.5.4": {
            "title": "C.9.2.5.4 Motion actuation",
            "page": 120
        },
        "C.9.3": {
            "title": "C.9.3 Understandable",
            "page": 120
        },
        "C.9.3.1": {
            "title": "C.9.3.1 Readable",
            "page": 120
        },
        "C.9.3.1.1": {
            "title": "C.9.3.1.1 Language of page",
            "page": 120
        },
        "C.9.3.1.2": {
            "title": "C.9.3.1.2 Language of parts",
            "page": 120
        },
        "C.9.3.2": {
            "title": "C.9.3.2 Predictable",
            "page": 120
        },
        "C.9.3.2.1": {
            "title": "C.9.3.2.1 On focus",
            "page": 120
        },
        "C.9.3.2.2": {
            "title": "C.9.3.2.2 On input",
            "page": 120
        },
        "C.9.3.2.3": {
            "title": "C.9.3.2.3 Consistent navigation",
            "page": 121
        },
        "C.9.3.2.4": {
            "title": "C.9.3.2.4 Consistent identification",
            "page": 121
        },
        "C.9.3.3": {
            "title": "C.9.3.3 Input assistance",
            "page": 121
        },
        "C.9.3.3.1": {
            "title": "C.9.3.3.1 Error identification",
            "page": 121
        },
        "C.9.3.3.2": {
            "title": "C.9.3.3.2 Labels or instructions",
            "page": 121
        },
        "C.9.3.3.3": {
            "title": "C.9.3.3.3 Error suggestion",
            "page": 121
        },
        "C.9.3.3.4": {
            "title": "C.9.3.3.4 Error prevention (legal, financial, data)",
            "page": 121
        },
        "C.9.4": {
            "title": "C.9.4 Robust",
            "page": 122
        },
        "C.9.4.1": {
            "title": "C.9.4.1 Compatible",
            "page": 122
        },
        "C.9.4.1.1": {
            "title": "C.9.4.1.1 Parsing",
            "page": 122
        },
        "C.9.4.1.2": {
            "title": "C.9.4.1.2 Name, role, value",
            "page": 122
        },
        "C.9.4.1.3": {
            "title": "C.9.4.1.3 Status messages",
            "page": 122
        },
        "C.9.5": {
            "title": "C.9.5 WCAG 2.1 conformance requirements",
            "page": 122
        },
        "C.10": {
            "title": "C.10 Non-web documents",
            "page": 122
        },
        "C.10.0": {
            "title": "C.10.0 General (informative)",
            "page": 122
        },
        "C.10.1": {
            "title": "C.10.1 Perceivable",
            "page": 123
        },
        "C.10.1.1": {
            "title": "C.10.1.1 Text alternatives",
            "page": 123
        },
        "C.10.1.1.1": {
            "title": "C.10.1.1.1 Non-text content",
            "page": 123
        },
        "C.10.1.2": {
            "title": "C.10.1.2 Time-based media",
            "page": 123
        },
        "C.10.1.2.1": {
            "title": "C.10.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 123
        },
        "C.10.1.2.2": {
            "title": "C.10.1.2.2 Captions (pre-recorded)",
            "page": 123
        },
        "C.10.1.2.3": {
            "title": "C.10.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 123
        },
        "C.10.1.2.4": {
            "title": "C.10.1.2.4 Captions (live)",
            "page": 123
        },
        "C.10.1.2.5": {
            "title": "C.10.1.2.5 Audio description (pre-recorded)",
            "page": 124
        },
        "C.10.1.3": {
            "title": "C.10.1.3 Adaptable",
            "page": 124
        },
        "C.10.1.3.1": {
            "title": "C.10.1.3.1 Info and relationships",
            "page": 124
        },
        "C.10.1.3.2": {
            "title": "C.10.1.3.2 Meaningful sequence",
            "page": 124
        },
        "C.10.1.3.3": {
            "title": "C.10.1.3.3 Sensory characteristics",
            "page": 124
        },
        "C.10.1.3.4": {
            "title": "C.10.1.3.4 Orientation",
            "page": 124
        },
        "C.10.1.3.5": {
            "title": "C.10.1.3.5 Identify input purpose",
            "page": 124
        },
        "C.10.1.4": {
            "title": "C.10.1.4 Distinguishable",
            "page": 124
        },
        "C.10.1.4.1": {
            "title": "C.10.1.4.1 Use of colour",
            "page": 124
        },
        "C.10.1.4.2": {
            "title": "C.10.1.4.2 Audio control",
            "page": 125
        },
        "C.10.1.4.3": {
            "title": "C.10.1.4.3 Contrast (minimum)",
            "page": 125
        },
        "C.10.1.4.4": {
            "title": "C.10.1.4.4 Resize text",
            "page": 125
        },
        "C.10.1.4.5": {
            "title": "C.10.1.4.5 Images of text",
            "page": 125
        },
        "C.10.1.4.6": {
            "title": "C.10.1.4.6 Void",
            "page": 125
        },
        "C.10.1.4.7": {
            "title": "C.10.1.4.7 Void",
            "page": 125
        },
        "C.10.1.4.8": {
            "title": "C.10.1.4.8 Void",
            "page": 125
        },
        "C.10.1.4.9": {
            "title": "C.10.1.4.9 Void",
            "page": 125
        },
        "C.10.1.4.10": {
            "title": "C.10.1.4.10 Reflow",
            "page": 125
        },
        "C.10.1.4.11": {
            "title": "C.10.1.4.11 Non-text contrast",
            "page": 126
        },
        "C.10.1.4.12": {
            "title": "C.10.1.4.12 Text spacing",
            "page": 126
        },
        "C.10.1.4.13": {
            "title": "C.10.1.4.13 Content on hover or focus",
            "page": 126
        },
        "C.10.2": {
            "title": "C.10.2 Operable",
            "page": 126
        },
        "C.10.2.1": {
            "title": "C.10.2.1 Keyboard accessible",
            "page": 126
        },
        "C.10.2.1.1": {
            "title": "C.10.2.1.1 Keyboard",
            "page": 126
        },
        "C.10.2.1.2": {
            "title": "C.10.2.1.2 No keyboard trap",
            "page": 126
        },
        "C.10.2.1.3": {
            "title": "C.10.2.1.3 Void",
            "page": 126
        },
        "C.10.2.1.4": {
            "title": "C.10.2.1.4 Character key shortcuts",
            "page": 126
        },
        "C.10.2.2": {
            "title": "C.10.2.2 Enough time",
            "page": 127
        },
        "C.10.2.2.1": {
            "title": "C.10.2.2.1 Timing adjustable",
            "page": 127
        },
        "C.10.2.2.2": {
            "title": "C.10.2.2.2 Pause, stop, hide",
            "page": 127
        },
        "C.10.2.3": {
            "title": "C.10.2.3 Seizures and physical reactions",
            "page": 127
        },
        "C.10.2.3.1": {
            "title": "C.10.2.3.1 Three flashes or below threshold",
            "page": 127
        },
        "C.10.2.4": {
            "title": "C.10.2.4 Navigable",
            "page": 127
        },
        "C.10.2.4.1": {
            "title": "C.10.2.4.1 Void",
            "page": 127
        },
        "C.10.2.4.2": {
            "title": "C.10.2.4.2 Document titled",
            "page": 127
        },
        "C.10.2.4.3": {
            "title": "C.10.2.4.3 Focus order",
            "page": 127
        },
        "C.10.2.4.4": {
            "title": "C.10.2.4.4 Link purpose (in context)",
            "page": 127
        },
        "C.10.2.4.5": {
            "title": "C.10.2.4.5 Void",
            "page": 128
        },
        "C.10.2.4.6": {
            "title": "C.10.2.4.6 Headings and labels",
            "page": 128
        },
        "C.10.2.4.7": {
            "title": "C.10.2.4.7 Focus visible",
            "page": 128
        },
        "C.10.2.5": {
            "title": "C.10.2.5 Input modalities",
            "page": 128
        },
        "C.10.2.5.1": {
            "title": "C.10.2.5.1 Pointer gestures",
            "page": 128
        },
        "C.10.2.5.2": {
            "title": "C.10.2.5.2 Pointer cancellation",
            "page": 128
        },
        "C.10.2.5.3": {
            "title": "C.10.2.5.3 Label in name",
            "page": 128
        },
        "C.10.2.5.4": {
            "title": "C.10.2.5.4 Motion actuation",
            "page": 128
        },
        "C.10.3": {
            "title": "C.10.3 Understandable",
            "page": 129
        },
        "C.10.3.1": {
            "title": "C.10.3.1 Readable",
            "page": 129
        },
        "C.10.3.1.1": {
            "title": "C.10.3.1.1 Language of document",
            "page": 129
        },
        "C.10.3.1.2": {
            "title": "C.10.3.1.2 Language of parts",
            "page": 129
        },
        "C.10.3.2": {
            "title": "C.10.3.2 Predictable",
            "page": 129
        },
        "C.10.3.2.1": {
            "title": "C.10.3.2.1 On focus",
            "page": 129
        },
        "C.10.3.2.2": {
            "title": "C.10.3.2.2 On input",
            "page": 129
        },
        "C.10.3.2.3": {
            "title": "C.10.3.2.3 Void",
            "page": 129
        },
        "C.10.3.2.4": {
            "title": "C.10.3.2.4 Void",
            "page": 129
        },
        "C.10.3.3": {
            "title": "C.10.3.3 Input assistance",
            "page": 129
        },
        "C.10.3.3.1": {
            "title": "C.10.3.3.1 Error identification",
            "page": 129
        },
        "C.10.3.3.2": {
            "title": "C.10.3.3.2 Labels or instructions",
            "page": 129
        },
        "C.10.3.3.3": {
            "title": "C.10.3.3.3 Error suggestion",
            "page": 130
        },
        "C.10.3.3.4": {
            "title": "C.10.3.3.4 Error prevention (legal, financial, data)",
            "page": 130
        },
        "C.10.4": {
            "title": "C.10.4 Robust",
            "page": 130
        },
        "C.10.4.1": {
            "title": "C.10.4.1 Compatible",
            "page": 130
        },
        "C.10.4.1.1": {
            "title": "C.10.4.1.1 Parsing",
            "page": 130
        },
        "C.10.4.1.2": {
            "title": "C.10.4.1.2 Name, role, value",
            "page": 130
        },
        "C.10.4.1.3": {
            "title": "C.10.4.1.3 Void",
            "page": 130
        },
        "C.10.5": {
            "title": "C.10.5 Caption positioning",
            "page": 130
        },
        "C.10.6": {
            "title": "C.10.6 Audio description timing",
            "page": 130
        },
        "C.11": {
            "title": "C.11 Software",
            "page": 130
        },
        "C.11.0": {
            "title": "C.11.0 General",
            "page": 130
        },
        "C.11.1": {
            "title": "C.11.1 Perceivable",
            "page": 131
        },
        "C.11.1.1": {
            "title": "C.11.1.1 Text alternatives",
            "page": 131
        },
        "C.11.1.1.1": {
            "title": "C.11.1.1.1 Non-text content",
            "page": 131
        },
        "C.11.1.1.1.1": {
            "title": "C.11.1.1.1.1 Non-text content (screen reading supported open functionality)",
            "page": 131
        },
        "C.11.1.1.1.2": {
            "title": "C.11.1.1.1.2 Non-text content (closed functionality)",
            "page": 131
        },
        "C.11.1.2": {
            "title": "C.11.1.2 Time-based media",
            "page": 131
        },
        "C.11.1.2.1": {
            "title": "C.11.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 131
        },
        "C.11.1.2.1.1": {
            "title": "C.11.1.2.1.1 Audio-only and video-only (pre-recorded - open functionality)",
            "page": 131
        },
        "C.11.1.2.1.2": {
            "title": "C.11.1.2.1.2 Audio-only and video-only (pre-recorded - closed functionality)",
            "page": 132
        },
        "C.11.1.2.1.2.1": {
            "title": "C.11.1.2.1.2.1 Pre-recorded audio-only (closed functionality)",
            "page": 132
        },
        "C.11.1.2.1.2.2": {
            "title": "C.11.1.2.1.2.2 Pre-recorded video-only (closed functionality)",
            "page": 132
        },
        "C.11.1.2.2": {
            "title": "C.11.1.2.2 Captions (pre-recorded)",
            "page": 132
        },
        "C.11.1.2.3": {
            "title": "C.11.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 132
        },
        "C.11.1.2.3.1": {
            "title": "C.11.1.2.3.1 Audio description or media alternative (pre-recorded - open functionality)",
            "page": 132
        },
        "C.11.1.2.3.2": {
            "title": "C.11.1.2.3.2 Audio description or media alternative (pre-recorded - closed functionality)",
            "page": 132
        },
        "C.11.1.2.4": {
            "title": "C.11.1.2.4 Captions (live)",
            "page": 133
        },
        "C.11.1.2.5": {
            "title": "C.11.1.2.5 Audio description (pre-recorded)",
            "page": 133
        },
        "C.11.1.3": {
            "title": "C.11.1.3 Adaptable",
            "page": 133
        },
        "C.11.1.3.1": {
            "title": "C.11.1.3.1 Info and relationships",
            "page": 133
        },
        "C.11.1.3.1.1": {
            "title": "C.11.1.3.1.1 Info and relationships (open functionality)",
            "page": 133
        },
        "C.11.1.3.1.2": {
            "title": "C.11.1.3.1.2 Info and relationships (closed functionality)",
            "page": 133
        },
        "C.11.1.3.2": {
            "title": "C.11.1.3.2 Meaningful sequence",
            "page": 133
        },
        "C.11.1.3.2.1": {
            "title": "C.11.1.3.2.1 Meaningful sequence (open functionality)",
            "page": 133
        },
        "C.11.1.3.2.2": {
            "title": "C.11.1.3.2.2 Meaningful sequence (closed functionality)",
            "page": 133
        },
        "C.11.1.3.3": {
            "title": "C.11.1.3.3 Sensory characteristics",
            "page": 133
        },
        "C.11.1.3.4": {
            "title": "C.11.1.3.4 Orientation",
            "page": 134
        },
        "C.11.1.3.5": {
            "title": "C.11.1.3.5 Identify input purpose",
            "page": 134
        },
        "C.11.1.4": {
            "title": "C.11.1.4 Distinguishable",
            "page": 134
        },
        "C.11.1.4.1": {
            "title": "C.11.1.4.1 Use of colour",
            "page": 134
        },
        "C.11.1.4.2": {
            "title": "C.11.1.4.2 Audio control",
            "page": 134
        },
        "C.11.1.4.3": {
            "title": "C.11.1.4.3 Contrast (minimum)",
            "page": 134
        },
        "C.11.1.4.4": {
            "title": "C.11.1.4.4 Resize text",
            "page": 134
        },
        "C.11.1.4.4.1": {
            "title": "C.11.1.4.4.1 Resize text (open functionality)",
            "page": 134
        },
        "C.11.1.4.4.2": {
            "title": "C.11.1.4.4.2 Resize text (closed functionality)",
            "page": 135
        },
        "C.11.1.4.5": {
            "title": "C.11.1.4.5 Images of text",
            "page": 135
        },
        "C.11.1.4.5.1": {
            "title": "C.11.1.4.5.1 Images of text (open functionality)",
            "page": 135
        },
        "C.11.1.4.5.2": {
            "title": "C.11.1.4.5.2 Images of text (closed functionality)",
            "page": 135
        },
        "C.11.1.4.6": {
            "title": "C.11.1.4.6 Void",
            "page": 135
        },
        "C.11.1.4.7": {
            "title": "C.11.1.4.7 Void",
            "page": 135
        },
        "C.11.1.4.8": {
            "title": "C.11.1.4.8 Void",
            "page": 135
        },
        "C.11.1.4.9": {
            "title": "C.11.1.4.9 Void",
            "page": 135
        },
        "C.11.1.4.10": {
            "title": "C.11.1.4.10 Reflow",
            "page": 135
        },
        "C.11.1.4.10.1": {
            "title": "C.11.1.4.10.1 Reflow (open functionality)",
            "page": 135
        },
        "C.11.1.4.10.2": {
            "title": "C.11.1.4.10.2 Reflow (closed functionality)",
            "page": 135
        },
        "C.11.1.4.11": {
            "title": "C.11.1.4.11 Non-text contrast",
            "page": 136
        },
        "C.11.1.4.12": {
            "title": "C.11.1.4.12 Text spacing",
            "page": 136
        },
        "C.11.1.4.13": {
            "title": "C.11.1.4.13 Content on hover or focus",
            "page": 136
        },
        "C.11.2": {
            "title": "C.11.2 Operable",
            "page": 136
        },
        "C.11.2.1": {
            "title": "C.11.2.1 Keyboard accessible",
            "page": 136
        },
        "C.11.2.1.1": {
            "title": "C.11.2.1.1 Keyboard",
            "page": 136
        },
        "C.11.2.1.1.1": {
            "title": "C.11.2.1.1.1 Keyboard (open functionality)",
            "page": 136
        },
        "C.11.2.1.1.2": {
            "title": "C.11.2.1.1.2 Keyboard (closed functionality)",
            "page": 136
        },
        "C.11.2.1.2": {
            "title": "C.11.2.1.2 No keyboard trap",
            "page": 136
        },
        "C.11.2.1.3": {
            "title": "C.11.2.1.3 Void",
            "page": 137
        },
        "C.11.2.1.4": {
            "title": "C.11.2.1.4 Character key shortcuts",
            "page": 137
        },
        "C.11.2.1.4.1": {
            "title": "C.11.2.1.4.1 Character key shortcuts (open functionality)",
            "page": 137
        },
        "C.11.2.1.4.2": {
            "title": "C.11.2.1.4.2 Character key shortcuts (closed functionality)",
            "page": 137
        },
        "C.11.2.2": {
            "title": "C.11.2.2 Enough time",
            "page": 137
        },
        "C.11.2.2.1": {
            "title": "C.11.2.2.1 Timing adjustable",
            "page": 137
        },
        "C.11.2.2.2": {
            "title": "C.11.2.2.2 Pause, stop, hide",
            "page": 137
        },
        "C.11.2.3": {
            "title": "C.11.2.3 Seizures and physical reactions",
            "page": 137
        },
        "C.11.2.3.1": {
            "title": "C.11.2.3.1 Three flashes or below threshold",
            "page": 137
        },
        "C.11.2.4": {
            "title": "C.11.2.4 Navigable",
            "page": 137
        },
        "C.11.2.4.1": {
            "title": "C.11.2.4.1 Void",
            "page": 137
        },
        "C.11.2.4.2": {
            "title": "C.11.2.4.2 Void",
            "page": 137
        },
        "C.11.2.4.3": {
            "title": "C.11.2.4.3 Focus order",
            "page": 137
        },
        "C.11.2.4.4": {
            "title": "C.11.2.4.4 Link purpose (in context)",
            "page": 138
        },
        "C.11.2.4.5": {
            "title": "C.11.2.4.5 Void",
            "page": 138
        },
        "C.11.2.4.6": {
            "title": "C.11.2.4.6 Headings and labels",
            "page": 138
        },
        "C.11.2.4.7": {
            "title": "C.11.2.4.7 Focus visible",
            "page": 138
        },
        "C.11.2.5": {
            "title": "C.11.2.5 Input modalities",
            "page": 138
        },
        "C.11.2.5.1": {
            "title": "C.11.2.5.1 Pointer gestures",
            "page": 138
        },
        "C.11.2.5.2": {
            "title": "C.11.2.5.2 Pointer cancellation",
            "page": 138
        },
        "C.11.2.5.3": {
            "title": "C.11.2.5.3 Label in name",
            "page": 138
        },
        "C.11.2.5.4": {
            "title": "C.11.2.5.4 Motion actuation",
            "page": 139
        },
        "C.11.3": {
            "title": "C.11.3 Understandable",
            "page": 139
        },
        "C.11.3.1": {
            "title": "C.11.3.1 Readable",
            "page": 139
        },
        "C.11.3.1.1": {
            "title": "C.11.3.1.1 Language of software",
            "page": 139
        },
        "C.11.3.1.1.1": {
            "title": "C.11.3.1.1.1 Language of software (open functionality)",
            "page": 139
        },
        "C.11.3.1.1.2": {
            "title": "C.11.3.1.1.2 Language of software (closed functionality)",
            "page": 139
        },
        "C.11.3.1.2": {
            "title": "C.11.3.1.2 Void",
            "page": 139
        },
        "C.11.3.2": {
            "title": "C.11.3.2 Predictable",
            "page": 139
        },
        "C.11.3.2.1": {
            "title": "C.11.3.2.1 On focus",
            "page": 139
        },
        "C.11.3.2.2": {
            "title": "C.11.3.2.2 On input",
            "page": 139
        },
        "C.11.3.2.3": {
            "title": "C.11.3.2.3 Void",
            "page": 140
        },
        "C.11.3.2.4": {
            "title": "C.11.3.2.4 Void",
            "page": 140
        },
        "C.11.3.3": {
            "title": "C.11.3.3 Input assistance",
            "page": 140
        },
        "C.11.3.3.1": {
            "title": "C.11.3.3.1 Error identification",
            "page": 140
        },
        "C.11.3.3.1.1": {
            "title": "C.11.3.3.1.1 Error identification (open functionality)",
            "page": 140
        },
        "C.11.3.3.1.2": {
            "title": "C.11.3.3.1.2 Error Identification (closed functionality)",
            "page": 140
        },
        "C.11.3.3.2": {
            "title": "C.11.3.3.2 Labels or instructions",
            "page": 140
        },
        "C.11.3.3.3": {
            "title": "C.11.3.3.3 Error suggestion",
            "page": 140
        },
        "C.11.3.3.4": {
            "title": "C.11.3.3.4 Error prevention (legal, financial, data)",
            "page": 140
        },
        "C.11.4": {
            "title": "C.11.4 Robust",
            "page": 141
        },
        "C.11.4.1": {
            "title": "C.11.4.1 Compatible",
            "page": 141
        },
        "C.11.4.1.1": {
            "title": "C.11.4.1.1 Parsing",
            "page": 141
        },
        "C.11.4.1.1.1": {
            "title": "C.11.4.1.1.1 Parsing (open functionality)",
            "page": 141
        },
        "C.11.4.1.1.2": {
            "title": "C.11.4.1.1.2 Parsing (closed functionality)",
            "page": 141
        },
        "C.11.4.1.2": {
            "title": "C.11.4.1.2 Name, role, value",
            "page": 141
        },
        "C.11.4.1.2.1": {
            "title": "C.11.4.1.2.1 Name, role, value (open functionality)",
            "page": 141
        },
        "C.11.4.1.2.2": {
            "title": "C.11.4.1.2.2 Name, role, value (closed functionality)",
            "page": 141
        },
        "C.11.4.1.3": {
            "title": "C.11.4.1.3 Void",
            "page": 141
        },
        "C.11.5": {
            "title": "C.11.5 Interoperability with assistive technology",
            "page": 141
        },
        "C.11.5.1": {
            "title": "C.11.5.1 Closed functionality",
            "page": 141
        },
        "C.11.5.2": {
            "title": "C.11.5.2 Accessibility services",
            "page": 141
        },
        "C.11.5.2.1": {
            "title": "C.11.5.2.1 Platform accessibility service support for software that provides a user interface",
            "page": 141
        },
        "C.11.5.2.2": {
            "title": "C.11.5.2.2 Platform accessibility service support for assistive technologies",
            "page": 142
        },
        "C.11.5.2.3": {
            "title": "C.11.5.2.3 Use of accessibility services",
            "page": 142
        },
        "C.11.5.2.4": {
            "title": "C.11.5.2.4 Assistive technology",
            "page": 142
        },
        "C.11.5.2.5": {
            "title": "C.11.5.2.5 Object information",
            "page": 142
        },
        "C.11.5.2.6": {
            "title": "C.11.5.2.6 Row, column, and headers",
            "page": 142
        },
        "C.11.5.2.7": {
            "title": "C.11.5.2.7 Values",
            "page": 143
        },
        "C.11.5.2.8": {
            "title": "C.11.5.2.8 Label relationships",
            "page": 143
        },
        "C.11.5.2.9": {
            "title": "C.11.5.2.9 Parent-child relationships",
            "page": 143
        },
        "C.11.5.2.10": {
            "title": "C.11.5.2.10 Text",
            "page": 144
        },
        "C.11.5.2.11": {
            "title": "C.11.5.2.11 List of available actions",
            "page": 144
        },
        "C.11.5.2.12": {
            "title": "C.11.5.2.12 Execution of available actions",
            "page": 144
        },
        "C.11.5.2.13": {
            "title": "C.11.5.2.13 Tracking of focus and selection attributes",
            "page": 144
        },
        "C.11.5.2.14": {
            "title": "C.11.5.2.14 Modification of focus and selection attributes",
            "page": 145
        },
        "C.11.5.2.15": {
            "title": "C.11.5.2.15 Change notification",
            "page": 145
        },
        "C.11.5.2.16": {
            "title": "C.11.5.2.16 Modifications of states and properties",
            "page": 145
        },
        "C.11.5.2.17": {
            "title": "C.11.5.2.17 Modifications of values and text",
            "page": 146
        },
        "C.11.6": {
            "title": "C.11.6 Documented accessibility usage",
            "page": 146
        },
        "C.11.6.1": {
            "title": "C.11.6.1 User control of accessibility features",
            "page": 146
        },
        "C.11.6.2": {
            "title": "C.11.6.2 No disruption of accessibility features",
            "page": 146
        },
        "C.11.7": {
            "title": "C.11.7 User preferences",
            "page": 146
        },
        "C.11.8": {
            "title": "C.11.8 Authoring tools",
            "page": 147
        },
        "C.11.8.1": {
            "title": "C.11.8.1 Content technology",
            "page": 147
        },
        "C.11.8.2": {
            "title": "C.11.8.2 Accessible content creation",
            "page": 147
        },
        "C.11.8.3": {
            "title": "C.11.8.3 Preservation of accessibility information in transformations",
            "page": 147
        },
        "C.11.8.4": {
            "title": "C.11.8.4 Repair assistance",
            "page": 147
        },
        "C.11.8.5": {
            "title": "C.11.8.5 Templates",
            "page": 148
        },
        "C.12": {
            "title": "C.12 Documentation and support services",
            "page": 148
        },
        "C.12.1": {
            "title": "C.12.1 Product documentation",
            "page": 148
        },
        "C.12.1.1": {
            "title": "C.12.1.1 Accessibility and compatibility features",
            "page": 148
        },
        "C.12.1.2": {
            "title": "C.12.1.2 Accessible documentation",
            "page": 148
        },
        "C.12.2": {
            "title": "C.12.2 Support services",
            "page": 148
        },
        "C.12.2.1": {
            "title": "C.12.2.1 General",
            "page": 148
        },
        "C.12.2.2": {
            "title": "C.12.2.2 Information on accessibility and compatibility features",
            "page": 148
        },
        "C.12.2.3": {
            "title": "C.12.2.3 Effective communication",
            "page": 149
        },
        "C.12.2.4": {
            "title": "C.12.2.4 Accessible documentation",
            "page": 149
        },
        "C.13": {
            "title": "C.13 ICT providing relay or emergency service access",
            "page": 149
        },
        "C.13.1": {
            "title": "C.13.1 Relay service requirements",
            "page": 149
        },
        "C.13.1.1": {
            "title": "C.13.1.1 General",
            "page": 149
        },
        "C.13.1.2": {
            "title": "C.13.1.2 Text relay services",
            "page": 149
        },
        "C.13.1.3": {
            "title": "C.13.1.3 Sign relay services",
            "page": 149
        },
        "C.13.1.4": {
            "title": "C.13.1.4 Lip-reading relay services",
            "page": 149
        },
        "C.13.1.5": {
            "title": "C.13.1.5 Captioned telephony services",
            "page": 150
        },
        "C.13.1.6": {
            "title": "C.13.1.6 Speech to speech relay services",
            "page": 150
        },
        "C.13.2": {
            "title": "C.13.2 Access to relay services",
            "page": 150
        },
        "C.13.3": {
            "title": "C.13.3 Access to emergency services",
            "page": 150
        },
        "Annex D": {
            "title": "Annex D (informative): WCAG 2.1 AAA Success Criteria",
            "page": 151
        }
    },
    "3.1.1": {
        "1": {
            "title": "1 Scope",
            "page": 11
        },
        "2": {
            "title": "2 References",
            "page": 11
        },
        "2.1": {
            "title": "2.1 Normative references",
            "page": 11
        },
        "2.2": {
            "title": "2.2 Informative references",
            "page": 11
        },
        "3": {
            "title": "3 Definition of terms, symbols and abbreviations",
            "page": 14
        },
        "3.1": {
            "title": "3.1 Terms",
            "page": 14
        },
        "3.2": {
            "title": "3.2 Symbols",
            "page": 18
        },
        "3.3": {
            "title": "3.3 Abbreviations",
            "page": 18
        },
        "4": {
            "title": "4 Functional performance",
            "page": 19
        },
        "4.1": {
            "title": "4.1 Meeting functional performance statements",
            "page": 19
        },
        "4.2": {
            "title": "4.2 Functional performance statements",
            "page": 19
        },
        "4.2.1": {
            "title": "4.2.1 Usage without vision",
            "page": 19
        },
        "4.2.2": {
            "title": "4.2.2 Usage with limited vision",
            "page": 19
        },
        "4.2.3": {
            "title": "4.2.3 Usage without perception of colour",
            "page": 20
        },
        "4.2.4": {
            "title": "4.2.4 Usage without hearing",
            "page": 20
        },
        "4.2.5": {
            "title": "4.2.5 Usage with limited hearing",
            "page": 20
        },
        "4.2.6": {
            "title": "4.2.6 Usage with no or limited vocal capability",
            "page": 20
        },
        "4.2.7": {
            "title": "4.2.7 Usage with limited manipulation or strength",
            "page": 20
        },
        "4.2.8": {
            "title": "4.2.8 Usage with limited reach",
            "page": 21
        },
        "4.2.9": {
            "title": "4.2.9 Minimize photosensitive seizure triggers",
            "page": 21
        },
        "4.2.10": {
            "title": "4.2.10 Usage with limited cognition, language or learning",
            "page": 21
        },
        "4.2.11": {
            "title": "4.2.11 Privacy",
            "page": 21
        },
        "5": {
            "title": "5 Generic requirements",
            "page": 22
        },
        "5.1": {
            "title": "5.1 Closed functionality",
            "page": 22
        },
        "5.1.1": {
            "title": "5.1.1 Introduction (informative)",
            "page": 22
        },
        "5.1.2": {
            "title": "5.1.2 General",
            "page": 22
        },
        "5.1.2.1": {
            "title": "5.1.2.1 Closed functionality",
            "page": 22
        },
        "5.1.2.2": {
            "title": "5.1.2.2 Assistive technology",
            "page": 22
        },
        "5.1.3": {
            "title": "5.1.3 Non-visual access",
            "page": 22
        },
        "5.1.3.1": {
            "title": "5.1.3.1 Audio output of visual information",
            "page": 22
        },
        "5.1.3.2": {
            "title": "5.1.3.2 Auditory output delivery including speech",
            "page": 22
        },
        "5.1.3.3": {
            "title": "5.1.3.3 Auditory output correlation",
            "page": 23
        },
        "5.1.3.4": {
            "title": "5.1.3.4 Speech output user control",
            "page": 23
        },
        "5.1.3.5": {
            "title": "5.1.3.5 Speech output automatic interruption",
            "page": 23
        },
        "5.1.3.6": {
            "title": "5.1.3.6 Speech output for non-text content",
            "page": 23
        },
        "5.1.3.7": {
            "title": "5.1.3.7 Speech output for video information",
            "page": 23
        },
        "5.1.3.8": {
            "title": "5.1.3.8 Masked entry",
            "page": 24
        },
        "5.1.3.9": {
            "title": "5.1.3.9 Private access to personal data",
            "page": 24
        },
        "5.1.3.10": {
            "title": "5.1.3.10 Non-interfering audio output",
            "page": 24
        },
        "5.1.3.11": {
            "title": "5.1.3.11 Private listening volume",
            "page": 24
        },
        "5.1.3.12": {
            "title": "5.1.3.12 Speaker volume",
            "page": 24
        },
        "5.1.3.13": {
            "title": "5.1.3.13 Volume reset",
            "page": 24
        },
        "5.1.3.14": {
            "title": "5.1.3.14 Spoken languages",
            "page": 25
        },
        "5.1.3.15": {
            "title": "5.1.3.15 Non-visual error identification",
            "page": 25
        },
        "5.1.3.16": {
            "title": "5.1.3.16 Receipts, tickets, and transactional outputs",
            "page": 25
        },
        "5.1.4": {
            "title": "5.1.4 Functionality closed to text enlargement",
            "page": 25
        },
        "5.1.5": {
            "title": "5.1.5 Visual output for auditory information",
            "page": 26
        },
        "5.1.6": {
            "title": "5.1.6 Operation without keyboard interface",
            "page": 26
        },
        "5.1.6.1": {
            "title": "5.1.6.1 Closed functionality",
            "page": 26
        },
        "5.1.6.2": {
            "title": "5.1.6.2 Input focus",
            "page": 27
        },
        "5.1.7": {
            "title": "5.1.7 Access without speech",
            "page": 27
        },
        "5.2": {
            "title": "5.2 Activation of accessibility features",
            "page": 27
        },
        "5.3": {
            "title": "5.3 Biometrics",
            "page": 27
        },
        "5.4": {
            "title": "5.4 Preservation of accessibility information during conversion",
            "page": 27
        },
        "5.5": {
            "title": "5.5 Operable parts",
            "page": 27
        },
        "5.5.1": {
            "title": "5.5.1 Means of operation",
            "page": 27
        },
        "5.5.2": {
            "title": "5.5.2 Operable parts discernibility",
            "page": 27
        },
        "5.6": {
            "title": "5.6 Locking or toggle controls",
            "page": 28
        },
        "5.6.1": {
            "title": "5.6.1 Tactile or auditory status",
            "page": 28
        },
        "5.6.2": {
            "title": "5.6.2 Visual status",
            "page": 28
        },
        "5.7": {
            "title": "5.7 Key repeat",
            "page": 28
        },
        "5.8": {
            "title": "5.8 Double-strike key acceptance",
            "page": 28
        },
        "5.9": {
            "title": "5.9 Simultaneous user actions",
            "page": 28
        },
        "6": {
            "title": "6 ICT with two-way voice communication",
            "page": 29
        },
        "6.1": {
            "title": "6.1 Audio bandwidth for speech",
            "page": 29
        },
        "6.2": {
            "title": "6.2 Real-Time Text (RTT) functionality",
            "page": 29
        },
        "6.2.1": {
            "title": "6.2.1 RTT provision",
            "page": 29
        },
        "6.2.1.1": {
            "title": "6.2.1.1 RTT communication",
            "page": 29
        },
        "6.2.1.2": {
            "title": "6.2.1.2 Concurrent voice and text",
            "page": 29
        },
        "6.2.2": {
            "title": "6.2.2 Display of RTT",
            "page": 30
        },
        "6.2.2.1": {
            "title": "6.2.2.1 Visually distinguishable display",
            "page": 30
        },
        "6.2.2.2": {
            "title": "6.2.2.2 Programmatically determinable send and receive direction",
            "page": 30
        },
        "6.2.2.3": {
            "title": "6.2.2.3 Speaker identification",
            "page": 30
        },
        "6.2.2.4": {
            "title": "6.2.2.4 Visual indicator of Audio with RTT",
            "page": 30
        },
        "6.2.3": {
            "title": "6.2.3 Interoperability",
            "page": 30
        },
        "6.2.4": {
            "title": "6.2.4 RTT responsiveness",
            "page": 31
        },
        "6.3": {
            "title": "6.3 Caller ID",
            "page": 31
        },
        "6.4": {
            "title": "6.4 Alternatives to voice-based services",
            "page": 31
        },
        "6.5": {
            "title": "6.5 Video communication",
            "page": 32
        },
        "6.5.1": {
            "title": "6.5.1 General (informative)",
            "page": 32
        },
        "6.5.2": {
            "title": "6.5.2 Resolution",
            "page": 32
        },
        "6.5.3": {
            "title": "6.5.3 Frame rate",
            "page": 32
        },
        "6.5.4": {
            "title": "6.5.4 Synchronization between audio and video",
            "page": 32
        },
        "6.5.5": {
            "title": "6.5.5 Visual indicator of audio with video",
            "page": 32
        },
        "6.5.6": {
            "title": "6.5.6 Speaker identification with video (sign language) communication",
            "page": 33
        },
        "6.6": {
            "title": "6.6 Alternatives to video-based services",
            "page": 33
        },
        "7": {
            "title": "7 ICT with video capabilities",
            "page": 34
        },
        "7.1": {
            "title": "7.1 Caption processing technology",
            "page": 34
        },
        "7.1.1": {
            "title": "7.1.1 Captioning playback",
            "page": 34
        },
        "7.1.2": {
            "title": "7.1.2 Captioning synchronization",
            "page": 34
        },
        "7.1.3": {
            "title": "7.1.3 Preservation of captioning",
            "page": 34
        },
        "7.1.4": {
            "title": "7.1.4 Captions characteristics",
            "page": 34
        },
        "7.1.5": {
            "title": "7.1.5 Spoken subtitles",
            "page": 34
        },
        "7.2": {
            "title": "7.2 Audio description technology",
            "page": 35
        },
        "7.2.1": {
            "title": "7.2.1 Audio description playback",
            "page": 35
        },
        "7.2.2": {
            "title": "7.2.2 Audio description synchronization",
            "page": 35
        },
        "7.2.3": {
            "title": "7.2.3 Preservation of audio description",
            "page": 35
        },
        "7.3": {
            "title": "7.3 User controls for captions and audio description",
            "page": 35
        },
        "8": {
            "title": "8 Hardware",
            "page": 36
        },
        "8.1": {
            "title": "8.1 General",
            "page": 36
        },
        "8.1.1": {
            "title": "8.1.1 Generic requirements",
            "page": 36
        },
        "8.1.2": {
            "title": "8.1.2 Standard connections",
            "page": 36
        },
        "8.1.3": {
            "title": "8.1.3 Colour",
            "page": 36
        },
        "8.2": {
            "title": "8.2 Hardware products with speech output",
            "page": 36
        },
        "8.2.1": {
            "title": "8.2.1 Speech volume gain",
            "page": 36
        },
        "8.2.1.1": {
            "title": "8.2.1.1 Speech volume range",
            "page": 36
        },
        "8.2.1.2": {
            "title": "8.2.1.2 Incremental volume control",
            "page": 36
        },
        "8.2.2": {
            "title": "8.2.2 Magnetic coupling",
            "page": 36
        },
        "8.2.2.1": {
            "title": "8.2.2.1 Fixed-line devices",
            "page": 36
        },
        "8.2.2.2": {
            "title": "8.2.2.2 Wireless communication devices",
            "page": 37
        },
        "8.3": {
            "title": "8.3 Stationary ICT",
            "page": 37
        },
        "8.3.0": {
            "title": "8.3.0 General",
            "page": 37
        },
        "8.3.1": {
            "title": "8.3.1 Forward or side reach",
            "page": 37
        },
        "8.3.2": {
            "title": "8.3.2 Forward reach",
            "page": 37
        },
        "8.3.2.1": {
            "title": "8.3.2.1 Unobstructed high forward reach",
            "page": 37
        },
        "8.3.2.2": {
            "title": "8.3.2.2 Unobstructed low forward reach",
            "page": 37
        },
        "8.3.2.3": {
            "title": "8.3.2.3 Obstructed forward reach",
            "page": 38
        },
        "8.3.2.3.1": {
            "title": "8.3.2.3.1 Clear space",
            "page": 38
        },
        "8.3.2.3.2": {
            "title": "8.3.2.3.2 Obstructed (< 510 mm) forward reach",
            "page": 38
        },
        "8.3.2.3.3": {
            "title": "8.3.2.3.3 Obstructed (< 635 mm) forward reach",
            "page": 38
        },
        "8.3.2.4": {
            "title": "8.3.2.4 Knee and toe clearance width",
            "page": 38
        },
        "8.3.2.5": {
            "title": "8.3.2.5 Toe clearance",
            "page": 39
        },
        "8.3.2.6": {
            "title": "8.3.2.6 Knee clearance",
            "page": 39
        },
        "8.3.3": {
            "title": "8.3.3 Side reach",
            "page": 40
        },
        "8.3.3.1": {
            "title": "8.3.3.1 Unobstructed high side reach",
            "page": 40
        },
        "8.3.3.2": {
            "title": "8.3.3.2 Unobstructed low side reach",
            "page": 40
        },
        "8.3.3.3": {
            "title": "8.3.3.3 Obstructed side reach",
            "page": 40
        },
        "8.3.3.3.1": {
            "title": "8.3.3.3.1 Obstructed (\u2264 255 mm) side reach",
            "page": 40
        },
        "8.3.3.3.2": {
            "title": "8.3.3.3.2 Obstructed (\u2264 610 mm) side reach",
            "page": 40
        },
        "8.3.4": {
            "title": "8.3.4 Clear floor or ground space",
            "page": 41
        },
        "8.3.4.1": {
            "title": "8.3.4.1 Change in level",
            "page": 41
        },
        "8.3.4.2": {
            "title": "8.3.4.2 Clear floor or ground space",
            "page": 41
        },
        "8.3.4.3": {
            "title": "8.3.4.3 Approach",
            "page": 41
        },
        "8.3.4.3.1": {
            "title": "8.3.4.3.1 General",
            "page": 41
        },
        "8.3.4.3.2": {
            "title": "8.3.4.3.2 Forward approach",
            "page": 42
        },
        "8.3.4.3.3": {
            "title": "8.3.4.3.3 Parallel approach",
            "page": 42
        },
        "8.3.5": {
            "title": "8.3.5 Visibility",
            "page": 42
        },
        "8.3.6": {
            "title": "8.3.6 Installation instructions",
            "page": 42
        },
        "8.4": {
            "title": "8.4 Mechanically operable parts",
            "page": 43
        },
        "8.4.1": {
            "title": "8.4.1 Numeric keys",
            "page": 43
        },
        "8.4.2": {
            "title": "8.4.2 Operation of mechanical parts",
            "page": 43
        },
        "8.4.2.1": {
            "title": "8.4.2.1 Means of operation of mechanical parts",
            "page": 43
        },
        "8.4.2.2": {
            "title": "8.4.2.2 Force of operation of mechanical parts",
            "page": 43
        },
        "8.4.3": {
            "title": "8.4.3 Keys, tickets and fare cards",
            "page": 43
        },
        "8.5": {
            "title": "8.5 Tactile indication of speech mode",
            "page": 43
        },
        "9": {
            "title": "9 Web",
            "page": 44
        },
        "9.0": {
            "title": "9.0 General (informative)",
            "page": 44
        },
        "9.1": {
            "title": "9.1 Perceivable",
            "page": 44
        },
        "9.1.1": {
            "title": "9.1.1 Text alternatives",
            "page": 44
        },
        "9.1.1.1": {
            "title": "9.1.1.1 Non-text content",
            "page": 44
        },
        "9.1.2": {
            "title": "9.1.2 Time-based media",
            "page": 44
        },
        "9.1.2.1": {
            "title": "9.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 44
        },
        "9.1.2.2": {
            "title": "9.1.2.2 Captions (pre-recorded)",
            "page": 45
        },
        "9.1.2.3": {
            "title": "9.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 45
        },
        "9.1.2.4": {
            "title": "9.1.2.4 Captions (live)",
            "page": 45
        },
        "9.1.2.5": {
            "title": "9.1.2.5 Audio description (pre-recorded)",
            "page": 45
        },
        "9.1.3": {
            "title": "9.1.3 Adaptable",
            "page": 45
        },
        "9.1.3.1": {
            "title": "9.1.3.1 Info and relationships",
            "page": 45
        },
        "9.1.3.2": {
            "title": "9.1.3.2 Meaningful sequence",
            "page": 45
        },
        "9.1.3.3": {
            "title": "9.1.3.3 Sensory characteristics",
            "page": 45
        },
        "9.1.3.4": {
            "title": "9.1.3.4 Orientation",
            "page": 45
        },
        "9.1.3.5": {
            "title": "9.1.3.5 Identify input purpose",
            "page": 45
        },
        "9.1.4": {
            "title": "9.1.4 Distinguishable",
            "page": 45
        },
        "9.1.4.1": {
            "title": "9.1.4.1 Use of colour",
            "page": 45
        },
        "9.1.4.2": {
            "title": "9.1.4.2 Audio control",
            "page": 45
        },
        "9.1.4.3": {
            "title": "9.1.4.3 Contrast (minimum)",
            "page": 45
        },
        "9.1.4.4": {
            "title": "9.1.4.4 Resize text",
            "page": 46
        },
        "9.1.4.5": {
            "title": "9.1.4.5 Images of text",
            "page": 46
        },
        "9.1.4.6": {
            "title": "9.1.4.6 Void",
            "page": 46
        },
        "9.1.4.7": {
            "title": "9.1.4.7 Void",
            "page": 46
        },
        "9.1.4.8": {
            "title": "9.1.4.8 Void",
            "page": 46
        },
        "9.1.4.9": {
            "title": "9.1.4.9 Void",
            "page": 46
        },
        "9.1.4.10": {
            "title": "9.1.4.10 Reflow",
            "page": 46
        },
        "9.1.4.11": {
            "title": "9.1.4.11 Non-text contrast",
            "page": 46
        },
        "9.1.4.12": {
            "title": "9.1.4.12 Text spacing",
            "page": 46
        },
        "9.1.4.13": {
            "title": "9.1.4.13 Content on hover or focus",
            "page": 46
        },
        "9.2": {
            "title": "9.2 Operable",
            "page": 46
        },
        "9.2.1": {
            "title": "9.2.1 Keyboard accessible",
            "page": 46
        },
        "9.2.1.1": {
            "title": "9.2.1.1 Keyboard",
            "page": 46
        },
        "9.2.1.2": {
            "title": "9.2.1.2 No keyboard trap",
            "page": 46
        },
        "9.2.1.3": {
            "title": "9.2.1.3 Void",
            "page": 46
        },
        "9.2.1.4": {
            "title": "9.2.1.4 Character key shortcuts",
            "page": 46
        },
        "9.2.2": {
            "title": "9.2.2 Enough time",
            "page": 47
        },
        "9.2.2.1": {
            "title": "9.2.2.1 Timing adjustable",
            "page": 47
        },
        "9.2.2.2": {
            "title": "9.2.2.2 Pause, stop, hide",
            "page": 47
        },
        "9.2.3": {
            "title": "9.2.3 Seizures and physical reactions",
            "page": 47
        },
        "9.2.3.1": {
            "title": "9.2.3.1 Three flashes or below threshold",
            "page": 47
        },
        "9.2.4": {
            "title": "9.2.4 Navigable",
            "page": 47
        },
        "9.2.4.1": {
            "title": "9.2.4.1 Bypass blocks",
            "page": 47
        },
        "9.2.4.2": {
            "title": "9.2.4.2 Page titled",
            "page": 47
        },
        "9.2.4.3": {
            "title": "9.2.4.3 Focus Order",
            "page": 47
        },
        "9.2.4.4": {
            "title": "9.2.4.4 Link purpose (in context)",
            "page": 47
        },
        "9.2.4.5": {
            "title": "9.2.4.5 Multiple ways",
            "page": 47
        },
        "9.2.4.6": {
            "title": "9.2.4.6 Headings and labels",
            "page": 47
        },
        "9.2.4.7": {
            "title": "9.2.4.7 Focus visible",
            "page": 47
        },
        "9.2.5": {
            "title": "9.2.5 Input modalities",
            "page": 48
        },
        "9.2.5.1": {
            "title": "9.2.5.1 Pointer gestures",
            "page": 48
        },
        "9.2.5.2": {
            "title": "9.2.5.2 Pointer cancellation",
            "page": 48
        },
        "9.2.5.3": {
            "title": "9.2.5.3 Label in name",
            "page": 48
        },
        "9.2.5.4": {
            "title": "9.2.5.4 Motion actuation",
            "page": 48
        },
        "9.3": {
            "title": "9.3 Understandable",
            "page": 48
        },
        "9.3.1": {
            "title": "9.3.1 Readable",
            "page": 48
        },
        "9.3.1.1": {
            "title": "9.3.1.1 Language of page",
            "page": 48
        },
        "9.3.1.2": {
            "title": "9.3.1.2 Language of parts",
            "page": 48
        },
        "9.3.2": {
            "title": "9.3.2 Predictable",
            "page": 48
        },
        "9.3.2.1": {
            "title": "9.3.2.1 On focus",
            "page": 48
        },
        "9.3.2.2": {
            "title": "9.3.2.2 On input",
            "page": 48
        },
        "9.3.2.3": {
            "title": "9.3.2.3 Consistent navigation",
            "page": 48
        },
        "9.3.2.4": {
            "title": "9.3.2.4 Consistent identification",
            "page": 48
        },
        "9.3.3": {
            "title": "9.3.3 Input assistance",
            "page": 48
        },
        "9.3.3.1": {
            "title": "9.3.3.1 Error identification",
            "page": 48
        },
        "9.3.3.2": {
            "title": "9.3.3.2 Labels or instructions",
            "page": 49
        },
        "9.3.3.3": {
            "title": "9.3.3.3 Error suggestion",
            "page": 49
        },
        "9.3.3.4": {
            "title": "9.3.3.4 Error prevention (legal, financial, data)",
            "page": 49
        },
        "9.4": {
            "title": "9.4 Robust",
            "page": 49
        },
        "9.4.1": {
            "title": "9.4.1 Compatible",
            "page": 49
        },
        "9.4.1.1": {
            "title": "9.4.1.1 Parsing",
            "page": 49
        },
        "9.4.1.2": {
            "title": "9.4.1.2 Name, role, value",
            "page": 49
        },
        "9.4.1.3": {
            "title": "9.4.1.3 Status messages",
            "page": 49
        },
        "9.5": {
            "title": "9.5 WCAG 2.1 AAA Success Criteria",
            "page": 49
        },
        "9.6": {
            "title": "9.6 WCAG conformance requirements",
            "page": 50
        },
        "10": {
            "title": "10 Non-web documents",
            "page": 51
        },
        "10.0": {
            "title": "10.0 General (informative)",
            "page": 51
        },
        "10.1": {
            "title": "10.1 Perceivable",
            "page": 51
        },
        "10.1.1": {
            "title": "10.1.1 Text alternatives",
            "page": 51
        },
        "10.1.1.1": {
            "title": "10.1.1.1 Non-text content",
            "page": 51
        },
        "10.1.2": {
            "title": "10.1.2 Time-based media",
            "page": 51
        },
        "10.1.2.1": {
            "title": "10.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 51
        },
        "10.1.2.2": {
            "title": "10.1.2.2 Captions (pre-recorded)",
            "page": 52
        },
        "10.1.2.3": {
            "title": "10.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 52
        },
        "10.1.2.4": {
            "title": "10.1.2.4 Captions (live)",
            "page": 52
        },
        "10.1.2.5": {
            "title": "10.1.2.5 Audio description (pre-recorded)",
            "page": 52
        },
        "10.1.3": {
            "title": "10.1.3 Adaptable",
            "page": 52
        },
        "10.1.3.1": {
            "title": "10.1.3.1 Info and relationships",
            "page": 52
        },
        "10.1.3.2": {
            "title": "10.1.3.2 Meaningful sequence",
            "page": 53
        },
        "10.1.3.3": {
            "title": "10.1.3.3 Sensory characteristics",
            "page": 53
        },
        "10.1.3.4": {
            "title": "10.1.3.4 Orientation",
            "page": 53
        },
        "10.1.3.5": {
            "title": "10.1.3.5 Identify input purpose",
            "page": 53
        },
        "10.1.4": {
            "title": "10.1.4 Distinguishable",
            "page": 53
        },
        "10.1.4.1": {
            "title": "10.1.4.1 Use of colour",
            "page": 53
        },
        "10.1.4.2": {
            "title": "10.1.4.2 Audio control",
            "page": 53
        },
        "10.1.4.3": {
            "title": "10.1.4.3 Contrast (minimum)",
            "page": 53
        },
        "10.1.4.4": {
            "title": "10.1.4.4 Resize text",
            "page": 53
        },
        "10.1.4.5": {
            "title": "10.1.4.5 Images of text",
            "page": 54
        },
        "10.1.4.6": {
            "title": "10.1.4.6 Void",
            "page": 54
        },
        "10.1.4.7": {
            "title": "10.1.4.7 Void",
            "page": 54
        },
        "10.1.4.8": {
            "title": "10.1.4.8 Void",
            "page": 54
        },
        "10.1.4.9": {
            "title": "10.1.4.9 Void",
            "page": 54
        },
        "10.1.4.10": {
            "title": "10.1.4.10 Reflow",
            "page": 54
        },
        "10.1.4.11": {
            "title": "10.1.4.11 Non-text contrast",
            "page": 54
        },
        "10.1.4.12": {
            "title": "10.1.4.12 Text spacing",
            "page": 54
        },
        "10.1.4.13": {
            "title": "10.1.4.13 Content on hover or focus",
            "page": 54
        },
        "10.2": {
            "title": "10.2 Operable",
            "page": 54
        },
        "10.2.1": {
            "title": "10.2.1 Keyboard accessible",
            "page": 54
        },
        "10.2.1.1": {
            "title": "10.2.1.1 Keyboard",
            "page": 54
        },
        "10.2.1.2": {
            "title": "10.2.1.2 No keyboard trap",
            "page": 55
        },
        "10.2.1.3": {
            "title": "10.2.1.3 Void",
            "page": 55
        },
        "10.2.1.4": {
            "title": "10.2.1.4 Character key shortcuts",
            "page": 55
        },
        "10.2.2": {
            "title": "10.2.2 Enough time",
            "page": 55
        },
        "10.2.2.1": {
            "title": "10.2.2.1 Timing adjustable",
            "page": 55
        },
        "10.2.2.2": {
            "title": "10.2.2.2 Pause, stop, hide",
            "page": 56
        },
        "10.2.3": {
            "title": "10.2.3 Seizures and physical reactions",
            "page": 56
        },
        "10.2.3.1": {
            "title": "10.2.3.1 Three flashes or below threshold",
            "page": 56
        },
        "10.2.4": {
            "title": "10.2.4 Navigable",
            "page": 56
        },
        "10.2.4.1": {
            "title": "10.2.4.1 Void",
            "page": 56
        },
        "10.2.4.2": {
            "title": "10.2.4.2 Document titled",
            "page": 57
        },
        "10.2.4.3": {
            "title": "10.2.4.3 Focus Order",
            "page": 57
        },
        "10.2.4.4": {
            "title": "10.2.4.4 Link purpose (in context)",
            "page": 57
        },
        "10.2.4.5": {
            "title": "10.2.4.5 Void",
            "page": 57
        },
        "10.2.4.6": {
            "title": "10.2.4.6 Headings and labels",
            "page": 57
        },
        "10.2.4.7": {
            "title": "10.2.4.7 Focus visible",
            "page": 57
        },
        "10.2.5": {
            "title": "10.2.5 Input modalities",
            "page": 57
        },
        "10.2.5.1": {
            "title": "10.2.5.1 Pointer gestures",
            "page": 57
        },
        "10.2.5.2": {
            "title": "10.2.5.2 Pointer cancellation",
            "page": 58
        },
        "10.2.5.3": {
            "title": "10.2.5.3 Label in name",
            "page": 58
        },
        "10.2.5.4": {
            "title": "10.2.5.4 Motion actuation",
            "page": 58
        },
        "10.3": {
            "title": "10.3 Understandable",
            "page": 58
        },
        "10.3.1": {
            "title": "10.3.1 Readable",
            "page": 58
        },
        "10.3.1.1": {
            "title": "10.3.1.1 Language of page",
            "page": 58
        },
        "10.3.1.2": {
            "title": "10.3.1.2 Language of parts",
            "page": 58
        },
        "10.3.2": {
            "title": "10.3.2 Predictable",
            "page": 59
        },
        "10.3.2.1": {
            "title": "10.3.2.1 On focus",
            "page": 59
        },
        "10.3.2.2": {
            "title": "10.3.2.2 On input",
            "page": 59
        },
        "10.3.2.3": {
            "title": "10.3.2.3 Void",
            "page": 59
        },
        "10.3.2.4": {
            "title": "10.3.2.4 Void",
            "page": 59
        },
        "10.3.3": {
            "title": "10.3.3 Input assistance",
            "page": 59
        },
        "10.3.3.1": {
            "title": "10.3.3.1 Error identification",
            "page": 59
        },
        "10.3.3.2": {
            "title": "10.3.3.2 Labels or instructions",
            "page": 59
        },
        "10.3.3.3": {
            "title": "10.3.3.3 Error suggestion",
            "page": 59
        },
        "10.3.3.4": {
            "title": "10.3.3.4 Error prevention (legal, financial, data)",
            "page": 59
        },
        "10.4": {
            "title": "10.4 Robust",
            "page": 60
        },
        "10.4.1": {
            "title": "10.4.1 Compatible",
            "page": 60
        },
        "10.4.1.1": {
            "title": "10.4.1.1 Parsing",
            "page": 60
        },
        "10.4.1.2": {
            "title": "10.4.1.2 Name, role, value",
            "page": 60
        },
        "10.4.1.3": {
            "title": "10.4.1.3 Status messages",
            "page": 61
        },
        "10.5": {
            "title": "10.5 Caption positioning",
            "page": 61
        },
        "10.6": {
            "title": "10.6 Audio description timing",
            "page": 61
        },
        "11": {
            "title": "11 Software",
            "page": 62
        },
        "11.0": {
            "title": "11.0 General (informative)",
            "page": 62
        },
        "11.1": {
            "title": "11.1 Perceivable",
            "page": 63
        },
        "11.1.1": {
            "title": "11.1.1 Text alternatives",
            "page": 63
        },
        "11.1.1.1": {
            "title": "11.1.1.1 Non-text content",
            "page": 63
        },
        "11.1.1.1.1": {
            "title": "11.1.1.1.1 Non-text content (open functionality)",
            "page": 63
        },
        "11.1.1.1.2": {
            "title": "11.1.1.1.2 Non-text content (closed functionality)",
            "page": 63
        },
        "11.1.2": {
            "title": "11.1.2 Time-based media",
            "page": 63
        },
        "11.1.2.1": {
            "title": "11.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 63
        },
        "11.1.2.1.1": {
            "title": "11.1.2.1.1 Audio-only and video-only (pre-recorded - open functionality)",
            "page": 63
        },
        "11.1.2.1.2": {
            "title": "11.1.2.1.2 Audio-only and video-only (pre-recorded - closed functionality)",
            "page": 63
        },
        "11.1.2.1.2.1": {
            "title": "11.1.2.1.2.1 Pre-recorded audio-only (closed functionality)",
            "page": 63
        },
        "11.1.2.1.2.2": {
            "title": "11.1.2.1.2.2 Pre-recorded video-only (closed functionality)",
            "page": 63
        },
        "11.1.2.2": {
            "title": "11.1.2.2 Captions (pre-recorded)",
            "page": 63
        },
        "11.1.2.3": {
            "title": "11.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 64
        },
        "11.1.2.3.1": {
            "title": "11.1.2.3.1 Audio description or media alternative (pre-recorded - open functionality)",
            "page": 64
        },
        "11.1.2.3.2": {
            "title": "11.1.2.3.2 Audio description or media alternative (pre-recorded - closed functionality)",
            "page": 64
        },
        "11.1.2.4": {
            "title": "11.1.2.4 Captions (live)",
            "page": 64
        },
        "11.1.2.5": {
            "title": "11.1.2.5 Audio description (pre-recorded)",
            "page": 64
        },
        "11.1.3": {
            "title": "11.1.3 Adaptable",
            "page": 64
        },
        "11.1.3.1": {
            "title": "11.1.3.1 Info and relationships",
            "page": 64
        },
        "11.1.3.1.1": {
            "title": "11.1.3.1.1 Info and relationships (open functionality)",
            "page": 64
        },
        "11.1.3.1.2": {
            "title": "11.1.3.1.2 Info and relationships (closed functionality)",
            "page": 65
        },
        "11.1.3.2": {
            "title": "11.1.3.2 Meaningful sequence",
            "page": 65
        },
        "11.1.3.2.1": {
            "title": "11.1.3.2.1 Meaningful sequence (open functionality)",
            "page": 65
        },
        "11.1.3.2.2": {
            "title": "11.1.3.2.2 Meaningful sequence (closed functionality)",
            "page": 65
        },
        "11.1.3.3": {
            "title": "11.1.3.3 Sensory characteristics",
            "page": 65
        },
        "11.1.3.4": {
            "title": "11.1.3.4 Orientation",
            "page": 65
        },
        "11.1.3.5": {
            "title": "11.1.3.5 Identify input purpose",
            "page": 65
        },
        "11.1.3.5.1": {
            "title": "11.1.3.5.1 Identify input purpose (open functionality)",
            "page": 65
        },
        "11.1.3.5.2": {
            "title": "11.1.3.5.2 Identify input purpose (closed functionality)",
            "page": 66
        },
        "11.1.4": {
            "title": "11.1.4 Distinguishable",
            "page": 66
        },
        "11.1.4.1": {
            "title": "11.1.4.1 Use of colour",
            "page": 66
        },
        "11.1.4.2": {
            "title": "11.1.4.2 Audio control",
            "page": 66
        },
        "11.1.4.3": {
            "title": "11.1.4.3 Contrast (minimum)",
            "page": 66
        },
        "11.1.4.4": {
            "title": "11.1.4.4 Resize text",
            "page": 66
        },
        "11.1.4.4.1": {
            "title": "11.1.4.4.1 Resize text (open functionality)",
            "page": 66
        },
        "11.1.4.4.2": {
            "title": "11.1.4.4.2 Resize text (closed functionality)",
            "page": 66
        },
        "11.1.4.5": {
            "title": "11.1.4.5 Images of text",
            "page": 67
        },
        "11.1.4.5.1": {
            "title": "11.1.4.5.1 Images of text (open functionality)",
            "page": 67
        },
        "11.1.4.5.2": {
            "title": "11.1.4.5.2 Images of text (closed functionality)",
            "page": 67
        },
        "11.1.4.6": {
            "title": "11.1.4.6 Void",
            "page": 67
        },
        "11.1.4.7": {
            "title": "11.1.4.7 Void",
            "page": 67
        },
        "11.1.4.8": {
            "title": "11.1.4.8 Void",
            "page": 67
        },
        "11.1.4.9": {
            "title": "11.1.4.9 Void",
            "page": 67
        },
        "11.1.4.10": {
            "title": "11.1.4.10 Reflow",
            "page": 67
        },
        "11.1.4.11": {
            "title": "11.1.4.11 Non-text contrast",
            "page": 67
        },
        "11.1.4.12": {
            "title": "11.1.4.12 Text spacing",
            "page": 67
        },
        "11.1.4.13": {
            "title": "11.1.4.13 Content on hover or focus",
            "page": 67
        },
        "11.2": {
            "title": "11.2 Operable",
            "page": 68
        },
        "11.2.1": {
            "title": "11.2.1 Keyboard accessible",
            "page": 68
        },
        "11.2.1.1": {
            "title": "11.2.1.1 Keyboard",
            "page": 68
        },
        "11.2.1.1.1": {
            "title": "11.2.1.1.1 Keyboard (open functionality)",
            "page": 68
        },
        "11.2.1.1.2": {
            "title": "11.2.1.1.2 Keyboard (closed functionality)",
            "page": 68
        },
        "11.2.1.2": {
            "title": "11.2.1.2 No keyboard trap",
            "page": 68
        },
        "11.2.1.3": {
            "title": "11.2.1.3 Void",
            "page": 68
        },
        "11.2.1.4": {
            "title": "11.2.1.4 Character key shortcuts",
            "page": 68
        },
        "11.2.1.4.1": {
            "title": "11.2.1.4.1 Character key shortcuts (open functionality)",
            "page": 68
        },
        "11.2.1.4.2": {
            "title": "11.2.1.4.2 Character key shortcuts (closed functionality)",
            "page": 68
        },
        "11.2.2": {
            "title": "11.2.2 Enough time",
            "page": 69
        },
        "11.2.2.1": {
            "title": "11.2.2.1 Timing adjustable",
            "page": 69
        },
        "11.2.2.2": {
            "title": "11.2.2.2 Pause, stop, hide",
            "page": 69
        },
        "11.2.3": {
            "title": "11.2.3 Seizures and physical reactions",
            "page": 70
        },
        "11.2.3.1": {
            "title": "11.2.3.1 Three flashes or below threshold",
            "page": 70
        },
        "11.2.4": {
            "title": "11.2.4 Navigable",
            "page": 70
        },
        "11.2.4.1": {
            "title": "11.2.4.1 Void",
            "page": 70
        },
        "11.2.4.2": {
            "title": "11.2.4.2 Void",
            "page": 70
        },
        "11.2.4.3": {
            "title": "11.2.4.3 Focus order",
            "page": 70
        },
        "11.2.4.4": {
            "title": "11.2.4.4 Link purpose (in context)",
            "page": 70
        },
        "11.2.4.5": {
            "title": "11.2.4.5 Void",
            "page": 70
        },
        "11.2.4.6": {
            "title": "11.2.4.6 Headings and labels",
            "page": 71
        },
        "11.2.4.7": {
            "title": "11.2.4.7 Focus visible",
            "page": 71
        },
        "11.2.5": {
            "title": "11.2.5 Input modalities",
            "page": 71
        },
        "11.2.5.1": {
            "title": "11.2.5.1 Pointer gestures",
            "page": 71
        },
        "11.2.5.2": {
            "title": "11.2.5.2 Pointer cancellation",
            "page": 71
        },
        "11.2.5.3": {
            "title": "11.2.5.3 Label in name",
            "page": 71
        },
        "11.2.5.3.1": {
            "title": "11.2.5.3.1 Label in name (open functionality)",
            "page": 71
        },
        "11.2.5.3.2": {
            "title": "11.2.5.3.2 Label in name (closed functionality)",
            "page": 71
        },
        "11.2.5.4": {
            "title": "11.2.5.4 Motion actuation",
            "page": 72
        },
        "11.3": {
            "title": "11.3 Understandable",
            "page": 72
        },
        "11.3.1": {
            "title": "11.3.1 Readable",
            "page": 72
        },
        "11.3.1.1": {
            "title": "11.3.1.1 Language of software",
            "page": 72
        },
        "11.3.1.1.1": {
            "title": "11.3.1.1.1 Language of software (open functionality)",
            "page": 72
        },
        "11.3.1.1.2": {
            "title": "11.3.1.1.2 Language of software (closed functionality)",
            "page": 72
        },
        "11.3.1.2": {
            "title": "11.3.1.2 Void",
            "page": 72
        },
        "11.3.2": {
            "title": "11.3.2 Predictable",
            "page": 72
        },
        "11.3.2.1": {
            "title": "11.3.2.1 On focus",
            "page": 72
        },
        "11.3.2.2": {
            "title": "11.3.2.2 On input",
            "page": 73
        },
        "11.3.2.3": {
            "title": "11.3.2.3 Void",
            "page": 73
        },
        "11.3.2.4": {
            "title": "11.3.2.4 Void",
            "page": 73
        },
        "11.3.3": {
            "title": "11.3.3 Input assistance",
            "page": 73
        },
        "11.3.3.1": {
            "title": "11.3.3.1 Error identification",
            "page": 73
        },
        "11.3.3.1.1": {
            "title": "11.3.3.1.1 Error identification (open functionality)",
            "page": 73
        },
        "11.3.3.1.2": {
            "title": "11.3.3.1.2 Error Identification (closed functionality)",
            "page": 73
        },
        "11.3.3.2": {
            "title": "11.3.3.2 Labels or instructions",
            "page": 73
        },
        "11.3.3.3": {
            "title": "11.3.3.3 Error suggestion",
            "page": 73
        },
        "11.3.3.4": {
            "title": "11.3.3.4 Error prevention (legal, financial, data)",
            "page": 73
        },
        "11.4": {
            "title": "11.4 Robust",
            "page": 74
        },
        "11.4.1": {
            "title": "11.4.1 Compatible",
            "page": 74
        },
        "11.4.1.1": {
            "title": "11.4.1.1 Parsing",
            "page": 74
        },
        "11.4.1.1.1": {
            "title": "11.4.1.1.1 Parsing (open functionality)",
            "page": 74
        },
        "11.4.1.1.2": {
            "title": "11.4.1.1.2 Parsing (closed functionality)",
            "page": 74
        },
        "11.4.1.2": {
            "title": "11.4.1.2 Name, role, value",
            "page": 74
        },
        "11.4.1.2.1": {
            "title": "11.4.1.2.1 Name, role, value (open functionality)",
            "page": 74
        },
        "11.4.1.2.2": {
            "title": "11.4.1.2.2 Name, role, value (closed functionality)",
            "page": 75
        },
        "11.4.1.3": {
            "title": "11.4.1.3 Status messages",
            "page": 75
        },
        "11.4.1.3.1": {
            "title": "11.4.1.3.1 Status messages (open functionality)",
            "page": 75
        },
        "11.4.1.3.2": {
            "title": "11.4.1.3.2 Status messages (closed functionality)",
            "page": 75
        },
        "11.5": {
            "title": "11.5 Interoperability with assistive technology",
            "page": 75
        },
        "11.5.1": {
            "title": "11.5.1 Closed functionality",
            "page": 75
        },
        "11.5.2": {
            "title": "11.5.2 Accessibility services",
            "page": 75
        },
        "11.5.2.1": {
            "title": "11.5.2.1 Platform accessibility service support for software that provides a user interface",
            "page": 75
        },
        "11.5.2.2": {
            "title": "11.5.2.2 Platform accessibility service support for assistive technologies",
            "page": 76
        },
        "11.5.2.3": {
            "title": "11.5.2.3 Use of accessibility services",
            "page": 76
        },
        "11.5.2.4": {
            "title": "11.5.2.4 Assistive technology",
            "page": 76
        },
        "11.5.2.5": {
            "title": "11.5.2.5 Object information",
            "page": 77
        },
        "11.5.2.6": {
            "title": "11.5.2.6 Row, column, and headers",
            "page": 77
        },
        "11.5.2.7": {
            "title": "11.5.2.7 Values",
            "page": 77
        },
        "11.5.2.8": {
            "title": "11.5.2.8 Label relationships",
            "page": 77
        },
        "11.5.2.9": {
            "title": "11.5.2.9 Parent-child relationships",
            "page": 77
        },
        "11.5.2.10": {
            "title": "11.5.2.10 Text",
            "page": 77
        },
        "11.5.2.11": {
            "title": "11.5.2.11 List of available actions",
            "page": 77
        },
        "11.5.2.12": {
            "title": "11.5.2.12 Execution of available actions",
            "page": 77
        },
        "11.5.2.13": {
            "title": "11.5.2.13 Tracking of focus and selection attributes",
            "page": 78
        },
        "11.5.2.14": {
            "title": "11.5.2.14 Modification of focus and selection attributes",
            "page": 78
        },
        "11.5.2.15": {
            "title": "11.5.2.15 Change notification",
            "page": 78
        },
        "11.5.2.16": {
            "title": "11.5.2.16 Modifications of states and properties",
            "page": 78
        },
        "11.5.2.17": {
            "title": "11.5.2.17 Modifications of values and text",
            "page": 78
        },
        "11.6": {
            "title": "11.6 Documented accessibility usage",
            "page": 79
        },
        "11.6.1": {
            "title": "11.6.1 User control of accessibility features",
            "page": 79
        },
        "11.6.2": {
            "title": "11.6.2 No disruption of accessibility features",
            "page": 79
        },
        "11.7": {
            "title": "11.7 User preferences",
            "page": 79
        },
        "11.8": {
            "title": "11.8 Authoring tools",
            "page": 79
        },
        "11.8.0": {
            "title": "11.8.0 General (Informative)",
            "page": 79
        },
        "11.8.1": {
            "title": "11.8.1 Content technology",
            "page": 79
        },
        "11.8.2": {
            "title": "11.8.2 Accessible content creation",
            "page": 79
        },
        "11.8.3": {
            "title": "11.8.3 Preservation of accessibility information in transformations",
            "page": 79
        },
        "11.8.4": {
            "title": "11.8.4 Repair assistance",
            "page": 80
        },
        "11.8.5": {
            "title": "11.8.5 Templates",
            "page": 80
        },
        "12": {
            "title": "12 Documentation and support services",
            "page": 81
        },
        "12.1": {
            "title": "12.1 Product documentation",
            "page": 81
        },
        "12.1.1": {
            "title": "12.1.1 Accessibility and compatibility features",
            "page": 81
        },
        "12.1.2": {
            "title": "12.1.2 Accessible documentation",
            "page": 81
        },
        "12.2": {
            "title": "12.2 Support services",
            "page": 81
        },
        "12.2.1": {
            "title": "12.2.1 General (informative)",
            "page": 81
        },
        "12.2.2": {
            "title": "12.2.2 Information on accessibility and compatibility features",
            "page": 81
        },
        "12.2.3": {
            "title": "12.2.3 Effective communication",
            "page": 82
        },
        "12.2.4": {
            "title": "12.2.4 Accessible documentation",
            "page": 82
        },
        "13": {
            "title": "13 ICT providing relay or emergency service access",
            "page": 83
        },
        "13.1": {
            "title": "13.1 Relay services requirements",
            "page": 83
        },
        "13.1.1": {
            "title": "13.1.1 General (informative)",
            "page": 83
        },
        "13.1.2": {
            "title": "13.1.2 Text relay services",
            "page": 83
        },
        "13.1.3": {
            "title": "13.1.3 Sign relay services",
            "page": 83
        },
        "13.1.4": {
            "title": "13.1.4 Lip-reading relay services",
            "page": 83
        },
        "13.1.5": {
            "title": "13.1.5 Captioned telephony services",
            "page": 83
        },
        "13.1.6": {
            "title": "13.1.6 Speech to speech relay services",
            "page": 83
        },
        "13.2": {
            "title": "13.2 Access to relay services",
            "page": 83
        },
        "13.3": {
            "title": "13.3 Access to emergency services",
            "page": 84
        },
        "14": {
            "title": "14 Conformance",
            "page": 85
        },
        "Annex A": {
            "title": "Annex A (informative): Relationship between the present document and the essential requirements of Directive 2016/2102",
            "page": 86
        },
        "Annex B": {
            "title": "Annex B (informative): Relationship between requirements and functional performance statements",
            "page": 99
        },
        "B.1": {
            "title": "B.1 Relationships between clauses 5 to 13 and the functional performance statements",
            "page": 99
        },
        "B.2": {
            "title": "B.2 Interpretation of Table B.2",
            "page": 107
        },
        "B.2.0": {
            "title": "B.2.0 General",
            "page": 107
        },
        "B.2.1": {
            "title": "B.2.1 Example",
            "page": 107
        },
        "B.2.1.1": {
            "title": "B.2.1.1 Step 1",
            "page": 107
        },
        "B.2.1.2": {
            "title": "B.2.1.2 Step 2",
            "page": 107
        },
        "B.2.1.3": {
            "title": "B.2.1.3 Step 3",
            "page": 108
        },
        "B.2.1.4": {
            "title": "B.2.1.4 Step 4",
            "page": 108
        },
        "Annex C": {
            "title": "Annex C (normative): Determination of conformance",
            "page": 109
        },
        "C.1": {
            "title": "C.1 Introduction",
            "page": 109
        },
        "C.2": {
            "title": "C.2 Empty clause",
            "page": 109
        },
        "C.3": {
            "title": "C.3 Empty clause",
            "page": 109
        },
        "C.4": {
            "title": "C.4 Functional performance",
            "page": 109
        },
        "C.5": {
            "title": "C.5 Generic requirements",
            "page": 109
        },
        "C.5.1": {
            "title": "C.5.1 Closed functionality",
            "page": 109
        },
        "C.5.1.1": {
            "title": "C.5.1.1 Introduction",
            "page": 109
        },
        "C.5.1.2": {
            "title": "C.5.1.2 General",
            "page": 109
        },
        "C.5.1.2.1": {
            "title": "C.5.1.2.1 Closed functionality",
            "page": 109
        },
        "C.5.1.2.2": {
            "title": "C.5.1.2.2 Assistive technology",
            "page": 109
        },
        "C.5.1.3": {
            "title": "C.5.1.3 Non-visual access",
            "page": 110
        },
        "C.5.1.3.1": {
            "title": "C.5.1.3.1 Audio output of visual information",
            "page": 110
        },
        "C.5.1.3.2": {
            "title": "C.5.1.3.2 Auditory output delivery including speech",
            "page": 110
        },
        "C.5.1.3.3": {
            "title": "C.5.1.3.3 Auditory output correlation",
            "page": 110
        },
        "C.5.1.3.4": {
            "title": "C.5.1.3.4 Speech output user control",
            "page": 110
        },
        "C.5.1.3.5": {
            "title": "C.5.1.3.5 Speech output automatic interruption",
            "page": 110
        },
        "C.5.1.3.6": {
            "title": "C.5.1.3.6 Speech output for non-text content",
            "page": 111
        },
        "C.5.1.3.7": {
            "title": "C.5.1.3.7 Speech output for video information",
            "page": 111
        },
        "C.5.1.3.8": {
            "title": "C.5.1.3.8 Masked entry",
            "page": 111
        },
        "C.5.1.3.9": {
            "title": "C.5.1.3.9 Private access to personal data",
            "page": 111
        },
        "C.5.1.3.10": {
            "title": "C.5.1.3.10 Non-interfering audio output",
            "page": 111
        },
        "C.5.1.3.11": {
            "title": "C.5.1.3.11 Private listening volume",
            "page": 112
        },
        "C.5.1.3.12": {
            "title": "C.5.1.3.12 Speaker volume",
            "page": 112
        },
        "C.5.1.3.13": {
            "title": "C.5.1.3.13 Volume reset",
            "page": 112
        },
        "C.5.1.3.14": {
            "title": "C.5.1.3.14 Spoken languages",
            "page": 112
        },
        "C.5.1.3.15": {
            "title": "C.5.1.3.15 Non-visual error identification",
            "page": 112
        },
        "C.5.1.3.16": {
            "title": "C.5.1.3.16 Receipts, tickets and transactional outputs",
            "page": 113
        },
        "C.5.1.4": {
            "title": "C.5.1.4 Functionality closed to text enlargement",
            "page": 113
        },
        "C.5.1.5": {
            "title": "C.5.1.5 Visual output for auditory information",
            "page": 113
        },
        "C.5.1.6": {
            "title": "C.5.1.6 Operation without keyboard interface",
            "page": 113
        },
        "C.5.1.6.1": {
            "title": "C.5.1.6.1 Closed functionality",
            "page": 113
        },
        "C.5.1.6.2": {
            "title": "C.5.1.6.2 Input focus",
            "page": 113
        },
        "C.5.1.7": {
            "title": "C.5.1.7 Access without speech",
            "page": 114
        },
        "C.5.2": {
            "title": "C.5.2 Activation of accessibility features",
            "page": 114
        },
        "C.5.3": {
            "title": "C.5.3 Biometrics",
            "page": 114
        },
        "C.5.4": {
            "title": "C.5.4 Preservation of accessibility information during conversion",
            "page": 114
        },
        "C.5.5": {
            "title": "C.5.5 Operable parts",
            "page": 114
        },
        "C.5.5.1": {
            "title": "C.5.5.1 Means of operation",
            "page": 114
        },
        "C.5.5.2": {
            "title": "C.5.5.2 Operable part discernibility",
            "page": 115
        },
        "C.5.6": {
            "title": "C.5.6 Locking or toggle controls",
            "page": 115
        },
        "C.5.6.1": {
            "title": "C.5.6.1 Tactile or auditory status",
            "page": 115
        },
        "C.5.6.2": {
            "title": "C.5.6.2 Visual status",
            "page": 115
        },
        "C.5.7": {
            "title": "C.5.7 Key repeat",
            "page": 115
        },
        "C.5.8": {
            "title": "C.5.8 Double-strike key acceptance",
            "page": 115
        },
        "C.5.9": {
            "title": "C.5.9 Simultaneous user actions",
            "page": 116
        },
        "C.6": {
            "title": "C.6 ICT with two-way voice communication",
            "page": 116
        },
        "C.6.1": {
            "title": "C.6.1 Audio bandwidth for speech",
            "page": 116
        },
        "C.6.2": {
            "title": "C.6.2 Real-Time Text (RTT) functionality",
            "page": 116
        },
        "C.6.2.1": {
            "title": "C.6.2.1 RTT provision",
            "page": 116
        },
        "C.6.2.1.1": {
            "title": "C.6.2.1.1 RTT communication",
            "page": 116
        },
        "C.6.2.1.2": {
            "title": "C.6.2.1.2 Concurrent voice and text",
            "page": 116
        },
        "C.6.2.2": {
            "title": "C.6.2.2 Display of RTT",
            "page": 117
        },
        "C.6.2.2.1": {
            "title": "C.6.2.2.1 Visually distinguishable display",
            "page": 117
        },
        "C.6.2.2.2": {
            "title": "C.6.2.2.2 Programmatically determinable send and receive direction",
            "page": 117
        },
        "C.6.2.2.3": {
            "title": "C.6.2.2.3 Speaker Identification",
            "page": 118
        },
        "C.6.2.2.4": {
            "title": "C.6.2.2.4 Visual indicator of audio with RTT",
            "page": 118
        },
        "C.6.2.4": {
            "title": "C.6.2.4 RTT responsiveness",
            "page": 120
        },
        "C.6.3": {
            "title": "C.6.3 Caller ID",
            "page": 120
        },
        "C.6.4": {
            "title": "C.6.4 Alternatives to voice-based services",
            "page": 120
        },
        "C.6.5": {
            "title": "C.6.5 Video communication",
            "page": 120
        },
        "C.6.5.1": {
            "title": "C.6.5.1 General",
            "page": 120
        },
        "C.6.5.2": {
            "title": "C.6.5.2 Resolution",
            "page": 120
        },
        "C.6.5.3": {
            "title": "C.6.5.3 Frame rate",
            "page": 121
        },
        "C.6.5.4": {
            "title": "C.6.5.4 Synchronization between audio and video",
            "page": 121
        },
        "C.6.5.5": {
            "title": "C.6.5.5 Visual indicator of audio with video",
            "page": 121
        },
        "C.6.5.6": {
            "title": "C.6.5.6 Speaker identification with video (sign language) communication",
            "page": 121
        },
        "C.6.6": {
            "title": "C.6.6 Alternatives to video-based services",
            "page": 121
        },
        "C.7": {
            "title": "C.7 ICT with video capabilities",
            "page": 122
        },
        "C.7.1": {
            "title": "C.7.1 Caption processing technology",
            "page": 122
        },
        "C.7.1.1": {
            "title": "C.7.1.1 Captioning playback",
            "page": 122
        },
        "C.7.1.2": {
            "title": "C.7.1.2 Captioning synchronization",
            "page": 122
        },
        "C.7.1.3": {
            "title": "C.7.1.3 Preservation of captioning",
            "page": 122
        },
        "C.7.1.4": {
            "title": "C.7.1.4 Captions characteristics",
            "page": 122
        },
        "C.7.1.5": {
            "title": "C.7.1.5 Spoken subtitles",
            "page": 123
        },
        "C.7.2": {
            "title": "C.7.2 Audio description technology",
            "page": 123
        },
        "C.7.2.1": {
            "title": "C.7.2.1 Audio description playback",
            "page": 123
        },
        "C.7.2.2": {
            "title": "C.7.2.2 Audio description synchronization",
            "page": 123
        },
        "C.7.2.3": {
            "title": "C.7.2.3 Preservation of audio description",
            "page": 123
        },
        "C.7.3": {
            "title": "C.7.3 User controls for captions and audio description",
            "page": 123
        },
        "C.8": {
            "title": "C.8 Hardware",
            "page": 123
        },
        "C.8.1": {
            "title": "C.8.1 General",
            "page": 123
        },
        "C.8.1.1": {
            "title": "C.8.1.1 Generic requirements",
            "page": 123
        },
        "C.8.1.2": {
            "title": "C.8.1.2 Standard connections",
            "page": 124
        },
        "C.8.1.3": {
            "title": "C.8.1.3 Colour",
            "page": 124
        },
        "C.8.2": {
            "title": "C.8.2 Hardware products with speech output",
            "page": 124
        },
        "C.8.2.1": {
            "title": "C.8.2.1 Speech volume gain",
            "page": 124
        },
        "C.8.2.1.1": {
            "title": "C.8.2.1.1 Speech volume range",
            "page": 124
        },
        "C.8.2.1.2": {
            "title": "C.8.2.1.2 Incremental volume control",
            "page": 124
        },
        "C.8.2.2": {
            "title": "C.8.2.2 Magnetic coupling",
            "page": 125
        },
        "C.8.2.2.1": {
            "title": "C.8.2.2.1 Fixed-line devices",
            "page": 125
        },
        "C.8.2.2.2": {
            "title": "C.8.2.2.2 Wireless communication devices",
            "page": 125
        },
        "C.8.3": {
            "title": "C.8.3 Stationary ICT",
            "page": 125
        },
        "C.8.3.0": {
            "title": "C.8.3.0 General",
            "page": 125
        },
        "C.8.3.1": {
            "title": "C.8.3.1 Forward or side reach",
            "page": 125
        },
        "C.8.3.2": {
            "title": "C.8.3.2 Forward reach",
            "page": 125
        },
        "C.8.3.2.1": {
            "title": "C.8.3.2.1 Unobstructed high forward reach",
            "page": 125
        },
        "C.8.3.2.2": {
            "title": "C.8.3.2.2 Unobstructed low forward reach",
            "page": 126
        },
        "C.8.3.2.3": {
            "title": "C.8.3.2.3 Obstructed forward reach",
            "page": 126
        },
        "C.8.3.2.3.1": {
            "title": "C.8.3.2.3.1 Clear space",
            "page": 126
        },
        "C.8.3.2.3.2": {
            "title": "C.8.3.2.3.2 Obstructed (< 510 mm) forward reach",
            "page": 126
        },
        "C.8.3.2.3.3": {
            "title": "C.8.3.2.3.3 Obstructed (< 635 mm) forward reach",
            "page": 126
        },
        "C.8.3.2.4": {
            "title": "C.8.3.2.4 Knee and toe clearance width",
            "page": 126
        },
        "C.8.3.2.5": {
            "title": "C.8.3.2.5 Toe clearance",
            "page": 127
        },
        "C.8.3.2.6": {
            "title": "C.8.3.2.6 Knee clearance",
            "page": 127
        },
        "C.8.3.3": {
            "title": "C.8.3.3 Side reach",
            "page": 128
        },
        "C.8.3.3.1": {
            "title": "C.8.3.3.1 Unobstructed high side reach",
            "page": 128
        },
        "C.8.3.3.2": {
            "title": "C.8.3.3.2 Unobstructed low side reach",
            "page": 129
        },
        "C.8.3.3.3": {
            "title": "C.8.3.3.3 Obstructed side reach",
            "page": 129
        },
        "C.8.3.3.3.1": {
            "title": "C.8.3.3.3.1 Obstructed (< 255 mm) side reach",
            "page": 129
        },
        "C.8.3.3.3.2": {
            "title": "C.8.3.3.3.2 Obstructed (< 610 mm) side reach",
            "page": 129
        },
        "C.8.3.4": {
            "title": "C.8.3.4 Clear floor or ground space",
            "page": 129
        },
        "C.8.3.4.1": {
            "title": "C.8.3.4.1 Change in level",
            "page": 129
        },
        "C.8.3.4.2": {
            "title": "C.8.3.4.2 Clear floor or ground space",
            "page": 129
        },
        "C.8.3.4.3": {
            "title": "C.8.3.4.3 Approach",
            "page": 130
        },
        "C.8.3.4.3.1": {
            "title": "C.8.3.4.3.1 General",
            "page": 130
        },
        "C.8.3.4.3.2": {
            "title": "C.8.3.4.3.2 Forward Approach",
            "page": 130
        },
        "C.8.3.4.3.3": {
            "title": "C.8.3.4.3.3 Parallel Approach",
            "page": 130
        },
        "C.8.3.5": {
            "title": "C.8.3.5 Visibility",
            "page": 130
        },
        "C.8.3.6": {
            "title": "C.8.3.6 Installation instructions",
            "page": 130
        },
        "C.8.4": {
            "title": "C.8.4 Mechanically operable parts",
            "page": 131
        },
        "C.8.4.1": {
            "title": "C.8.4.1 Numeric keys",
            "page": 131
        },
        "C.8.4.2": {
            "title": "C.8.4.2 Operation of mechanical parts",
            "page": 131
        },
        "C.8.4.2.1": {
            "title": "C.8.4.2.1 Means of operation of mechanical parts",
            "page": 131
        },
        "C.8.4.2.2": {
            "title": "C.8.4.2.2 Force of operation of mechanical parts",
            "page": 131
        },
        "C.8.4.3": {
            "title": "C.8.4.3 Keys, tickets and fare cards",
            "page": 131
        },
        "C.8.5": {
            "title": "C.8.5 Tactile indication of speech mode",
            "page": 131
        },
        "C.9": {
            "title": "C.9 Web",
            "page": 132
        },
        "C.9.0": {
            "title": "C.9.0 General (informative)",
            "page": 132
        },
        "C.9.1": {
            "title": "C.9.1 Perceivable",
            "page": 132
        },
        "C.9.1.1": {
            "title": "C.9.1.1 Text alternatives",
            "page": 132
        },
        "C.9.1.1.1": {
            "title": "C.9.1.1.1 Non-text content",
            "page": 132
        },
        "C.9.1.2": {
            "title": "C.9.1.2 Time-based media",
            "page": 132
        },
        "C.9.1.2.1": {
            "title": "C.9.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 132
        },
        "C.9.1.2.2": {
            "title": "C.9.1.2.2 Captions (pre-recorded)",
            "page": 132
        },
        "C.9.1.2.3": {
            "title": "C.9.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 132
        },
        "C.9.1.2.4": {
            "title": "C.9.1.2.4 Captions (live)",
            "page": 133
        },
        "C.9.1.2.5": {
            "title": "C.9.1.2.5 Audio description (pre-recorded)",
            "page": 133
        },
        "C.9.1.3": {
            "title": "C.9.1.3 Adaptable",
            "page": 133
        },
        "C.9.1.3.1": {
            "title": "C.9.1.3.1 Info and relationships",
            "page": 133
        },
        "C.9.1.3.2": {
            "title": "C.9.1.3.2 Meaningful sequence",
            "page": 133
        },
        "C.9.1.3.3": {
            "title": "C.9.1.3.3 Sensory characteristics",
            "page": 133
        },
        "C.9.1.3.4": {
            "title": "C.9.1.3.4 Orientation",
            "page": 134
        },
        "C.9.1.3.5": {
            "title": "C.9.1.3.5 Identify input purpose",
            "page": 134
        },
        "C.9.1.4": {
            "title": "C.9.1.4 Distinguishable",
            "page": 134
        },
        "C.9.1.4.1": {
            "title": "C.9.1.4.1 Use of colour",
            "page": 134
        },
        "C.9.1.4.2": {
            "title": "C.9.1.4.2 Audio control",
            "page": 134
        },
        "C.9.1.4.3": {
            "title": "C.9.1.4.3 Contrast (minimum)",
            "page": 134
        },
        "C.9.1.4.4": {
            "title": "C.9.1.4.4 Resize text",
            "page": 134
        },
        "C.9.1.4.5": {
            "title": "C.9.1.4.5 Images of text",
            "page": 135
        },
        "C.9.1.4.6": {
            "title": "C.9.1.4.6 Void",
            "page": 135
        },
        "C.9.1.4.7": {
            "title": "C.9.1.4.7 Void",
            "page": 135
        },
        "C.9.1.4.8": {
            "title": "C.9.1.4.8 Void",
            "page": 135
        },
        "C.9.1.4.9": {
            "title": "C.9.1.4.9 Void",
            "page": 135
        },
        "C.9.1.4.10": {
            "title": "C.9.1.4.10 Reflow",
            "page": 135
        },
        "C.9.1.4.11": {
            "title": "C.9.1.4.11 Non-text contrast",
            "page": 135
        },
        "C.9.1.4.12": {
            "title": "C.9.1.4.12 Text spacing",
            "page": 135
        },
        "C.9.1.4.13": {
            "title": "C.9.1.4.13 Content on hover or focus",
            "page": 135
        },
        "C.9.2": {
            "title": "C.9.2 Operable",
            "page": 136
        },
        "C.9.2.1": {
            "title": "C.9.2.1 Keyboard accessible",
            "page": 136
        },
        "C.9.2.1.1": {
            "title": "C.9.2.1.1 Keyboard",
            "page": 136
        },
        "C.9.2.1.2": {
            "title": "C.9.2.1.2 No keyboard trap",
            "page": 136
        },
        "C.9.2.1.3": {
            "title": "C.9.2.1.3 Void",
            "page": 136
        },
        "C.9.2.1.4": {
            "title": "C.9.2.1.4 Character key shortcuts",
            "page": 136
        },
        "C.9.2.2": {
            "title": "C.9.2.2 Enough time",
            "page": 136
        },
        "C.9.2.2.1": {
            "title": "C.9.2.2.1 Timing adjustable",
            "page": 136
        },
        "C.9.2.2.2": {
            "title": "C.9.2.2.2 Pause, stop, hide",
            "page": 136
        },
        "C.9.2.3": {
            "title": "C.9.2.3 Seizures and physical reactions",
            "page": 137
        },
        "C.9.2.3.1": {
            "title": "C.9.2.3.1 Three flashes or below threshold",
            "page": 137
        },
        "C.9.2.4": {
            "title": "C.9.2.4 Navigable",
            "page": 137
        },
        "C.9.2.4.1": {
            "title": "C.9.2.4.1 Bypass blocks",
            "page": 137
        },
        "C.9.2.4.2": {
            "title": "C.9.2.4.2 Page titled",
            "page": 137
        },
        "C.9.2.4.3": {
            "title": "C.9.2.4.3 Focus Order",
            "page": 137
        },
        "C.9.2.4.4": {
            "title": "C.9.2.4.4 Link purpose (in context)",
            "page": 137
        },
        "C.9.2.4.5": {
            "title": "C.9.2.4.5 Multiple ways",
            "page": 138
        },
        "C.9.2.4.6": {
            "title": "C.9.2.4.6 Headings and labels",
            "page": 138
        },
        "C.9.2.4.7": {
            "title": "C.9.2.4.7 Focus visible",
            "page": 138
        },
        "C.9.2.5": {
            "title": "C.9.2.5 Input modalities",
            "page": 138
        },
        "C.9.2.5.1": {
            "title": "C.9.2.5.1 Pointer gestures",
            "page": 138
        },
        "C.9.2.5.2": {
            "title": "C.9.2.5.2 Pointer cancellation",
            "page": 138
        },
        "C.9.2.5.3": {
            "title": "C.9.2.5.3 Label in name",
            "page": 139
        },
        "C.9.2.5.4": {
            "title": "C.9.2.5.4 Motion actuation",
            "page": 139
        },
        "C.9.3": {
            "title": "C.9.3 Understandable",
            "page": 139
        },
        "C.9.3.1": {
            "title": "C.9.3.1 Readable",
            "page": 139
        },
        "C.9.3.1.1": {
            "title": "C.9.3.1.1 Language of page",
            "page": 139
        },
        "C.9.3.1.2": {
            "title": "C.9.3.1.2 Language of parts",
            "page": 139
        },
        "C.9.3.2": {
            "title": "C.9.3.2 Predictable",
            "page": 139
        },
        "C.9.3.2.1": {
            "title": "C.9.3.2.1 On focus",
            "page": 139
        },
        "C.9.3.2.2": {
            "title": "C.9.3.2.2 On input",
            "page": 140
        },
        "C.9.3.2.3": {
            "title": "C.9.3.2.3 Consistent navigation",
            "page": 140
        },
        "C.9.3.2.4": {
            "title": "C.9.3.2.4 Consistent identification",
            "page": 140
        },
        "C.9.3.3": {
            "title": "C.9.3.3 Input assistance",
            "page": 140
        },
        "C.9.3.3.1": {
            "title": "C.9.3.3.1 Error identification",
            "page": 140
        },
        "C.9.3.3.2": {
            "title": "C.9.3.3.2 Labels or instructions",
            "page": 140
        },
        "C.9.3.3.3": {
            "title": "C.9.3.3.3 Error suggestion",
            "page": 140
        },
        "C.9.3.3.4": {
            "title": "C.9.3.3.4 Error prevention (legal, financial, data)",
            "page": 141
        },
        "C.9.4": {
            "title": "C.9.4 Robust",
            "page": 141
        },
        "C.9.4.1": {
            "title": "C.9.4.1 Compatible",
            "page": 141
        },
        "C.9.4.1.1": {
            "title": "C.9.4.1.1 Parsing",
            "page": 141
        },
        "C.9.4.1.2": {
            "title": "C.9.4.1.2 Name, role, value",
            "page": 141
        },
        "C.9.4.1.3": {
            "title": "C.9.4.1.3 Status messages",
            "page": 141
        },
        "C.9.5": {
            "title": "C.9.5 WCAG 2.1 AAA Success Criteria (Informative)",
            "page": 141
        },
        "C.9.6": {
            "title": "C.9.6 WCAG 2.1 conformance requirements",
            "page": 142
        },
        "C.10": {
            "title": "C.10 Non-web documents",
            "page": 142
        },
        "C.10.0": {
            "title": "C.10.0 General (informative)",
            "page": 142
        },
        "C.10.1": {
            "title": "C.10.1 Perceivable",
            "page": 142
        },
        "C.10.1.1": {
            "title": "C.10.1.1 Text alternatives",
            "page": 142
        },
        "C.10.1.1.1": {
            "title": "C.10.1.1.1 Non-text content",
            "page": 142
        },
        "C.10.1.2": {
            "title": "C.10.1.2 Time-based media",
            "page": 142
        },
        "C.10.1.2.1": {
            "title": "C.10.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 142
        },
        "C.10.1.2.2": {
            "title": "C.10.1.2.2 Captions (pre-recorded)",
            "page": 143
        },
        "C.10.1.2.3": {
            "title": "C.10.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 143
        },
        "C.10.1.2.4": {
            "title": "C.10.1.2.4 Captions (live)",
            "page": 143
        },
        "C.10.1.2.5": {
            "title": "C.10.1.2.5 Audio description (pre-recorded)",
            "page": 143
        },
        "C.10.1.3": {
            "title": "C.10.1.3 Adaptable",
            "page": 143
        },
        "C.10.1.3.1": {
            "title": "C.10.1.3.1 Info and relationships",
            "page": 143
        },
        "C.10.1.3.2": {
            "title": "C.10.1.3.2 Meaningful sequence",
            "page": 144
        },
        "C.10.1.3.3": {
            "title": "C.10.1.3.3 Sensory characteristics",
            "page": 144
        },
        "C.10.1.3.4": {
            "title": "C.10.1.3.4 Orientation",
            "page": 144
        },
        "C.10.1.3.5": {
            "title": "C.10.1.3.5 Identify input purpose",
            "page": 144
        },
        "C.10.1.4": {
            "title": "C.10.1.4 Distinguishable",
            "page": 144
        },
        "C.10.1.4.1": {
            "title": "C.10.1.4.1 Use of colour",
            "page": 144
        },
        "C.10.1.4.2": {
            "title": "C.10.1.4.2 Audio control",
            "page": 145
        },
        "C.10.1.4.3": {
            "title": "C.10.1.4.3 Contrast (minimum)",
            "page": 145
        },
        "C.10.1.4.4": {
            "title": "C.10.1.4.4 Resize text",
            "page": 145
        },
        "C.10.1.4.5": {
            "title": "C.10.1.4.5 Images of text",
            "page": 145
        },
        "C.10.1.4.6": {
            "title": "C.10.1.4.6 Void",
            "page": 145
        },
        "C.10.1.4.7": {
            "title": "C.10.1.4.7 Void",
            "page": 145
        },
        "C.10.1.4.8": {
            "title": "C.10.1.4.8 Void",
            "page": 145
        },
        "C.10.1.4.9": {
            "title": "C.10.1.4.9 Void",
            "page": 145
        },
        "C.10.1.4.10": {
            "title": "C.10.1.4.10 Reflow",
            "page": 145
        },
        "C.10.1.4.11": {
            "title": "C.10.1.4.11 Non-text contrast",
            "page": 146
        },
        "C.10.1.4.12": {
            "title": "C.10.1.4.12 Text spacing",
            "page": 146
        },
        "C.10.1.4.13": {
            "title": "C.10.1.4.13 Content on hover or focus",
            "page": 146
        },
        "C.10.2": {
            "title": "C.10.2 Operable",
            "page": 146
        },
        "C.10.2.1": {
            "title": "C.10.2.1 Keyboard accessible",
            "page": 146
        },
        "C.10.2.1.1": {
            "title": "C.10.2.1.1 Keyboard",
            "page": 146
        },
        "C.10.2.1.2": {
            "title": "C.10.2.1.2 No keyboard trap",
            "page": 146
        },
        "C.10.2.1.3": {
            "title": "C.10.2.1.3 Void",
            "page": 146
        },
        "C.10.2.1.4": {
            "title": "C.10.2.1.4 Character key shortcuts",
            "page": 147
        },
        "C.10.2.2": {
            "title": "C.10.2.2 Enough time",
            "page": 147
        },
        "C.10.2.2.1": {
            "title": "C.10.2.2.1 Timing adjustable",
            "page": 147
        },
        "C.10.2.2.2": {
            "title": "C.10.2.2.2 Pause, stop, hide",
            "page": 147
        },
        "C.10.2.3": {
            "title": "C.10.2.3 Seizures and physical reactions",
            "page": 147
        },
        "C.10.2.3.1": {
            "title": "C.10.2.3.1 Three flashes or below threshold",
            "page": 147
        },
        "C.10.2.4": {
            "title": "C.10.2.4 Navigable",
            "page": 147
        },
        "C.10.2.4.1": {
            "title": "C.10.2.4.1 Void",
            "page": 147
        },
        "C.10.2.4.2": {
            "title": "C.10.2.4.2 Document titled",
            "page": 147
        },
        "C.10.2.4.3": {
            "title": "C.10.2.4.3 Focus order",
            "page": 148
        },
        "C.10.2.4.4": {
            "title": "C.10.2.4.4 Link purpose (in context)",
            "page": 148
        },
        "C.10.2.4.5": {
            "title": "C.10.2.4.5 Void",
            "page": 148
        },
        "C.10.2.4.6": {
            "title": "C.10.2.4.6 Headings and labels",
            "page": 148
        },
        "C.10.2.4.7": {
            "title": "C.10.2.4.7 Focus visible",
            "page": 148
        },
        "C.10.2.5": {
            "title": "C.10.2.5 Input modalities",
            "page": 148
        },
        "C.10.2.5.1": {
            "title": "C.10.2.5.1 Pointer gestures",
            "page": 148
        },
        "C.10.2.5.2": {
            "title": "C.10.2.5.2 Pointer cancellation",
            "page": 149
        },
        "C.10.2.5.3": {
            "title": "C.10.2.5.3 Label in name",
            "page": 149
        },
        "C.10.2.5.4": {
            "title": "C.10.2.5.4 Motion actuation",
            "page": 149
        },
        "C.10.3": {
            "title": "C.10.3 Understandable",
            "page": 149
        },
        "C.10.3.1": {
            "title": "C.10.3.1 Readable",
            "page": 149
        },
        "C.10.3.1.1": {
            "title": "C.10.3.1.1 Language of document",
            "page": 149
        },
        "C.10.3.1.2": {
            "title": "C.10.3.1.2 Language of parts",
            "page": 149
        },
        "C.10.3.2": {
            "title": "C.10.3.2 Predictable",
            "page": 150
        },
        "C.10.3.2.1": {
            "title": "C.10.3.2.1 On focus",
            "page": 150
        },
        "C.10.3.2.2": {
            "title": "C.10.3.2.2 On input",
            "page": 150
        },
        "C.10.3.2.3": {
            "title": "C.10.3.2.3 Void",
            "page": 150
        },
        "C.10.3.2.4": {
            "title": "C.10.3.2.4 Void",
            "page": 150
        },
        "C.10.3.3": {
            "title": "C.10.3.3 Input assistance",
            "page": 150
        },
        "C.10.3.3.1": {
            "title": "C.10.3.3.1 Error identification",
            "page": 150
        },
        "C.10.3.3.2": {
            "title": "C.10.3.3.2 Labels or instructions",
            "page": 150
        },
        "C.10.3.3.3": {
            "title": "C.10.3.3.3 Error suggestion",
            "page": 150
        },
        "C.10.3.3.4": {
            "title": "C.10.3.3.4 Error prevention (legal, financial, data)",
            "page": 151
        },
        "C.10.4": {
            "title": "C.10.4 Robust",
            "page": 151
        },
        "C.10.4.1": {
            "title": "C.10.4.1 Compatible",
            "page": 151
        },
        "C.10.4.1.1": {
            "title": "C.10.4.1.1 Parsing",
            "page": 151
        },
        "C.10.4.1.2": {
            "title": "C.10.4.1.2 Name, role, value",
            "page": 151
        },
        "C.10.4.1.3": {
            "title": "C.10.4.1.3 Status messages",
            "page": 151
        },
        "C.10.5": {
            "title": "C.10.5 Caption positioning",
            "page": 151
        },
        "C.10.6": {
            "title": "C.10.6 Audio description timing",
            "page": 151
        },
        "C.11": {
            "title": "C.11 Software",
            "page": 152
        },
        "C.11.0": {
            "title": "C.11.0 General",
            "page": 152
        },
        "C.11.1": {
            "title": "C.11.1 Perceivable",
            "page": 152
        },
        "C.11.1.1": {
            "title": "C.11.1.1 Text alternatives",
            "page": 152
        },
        "C.11.1.1.1": {
            "title": "C.11.1.1.1 Non-text content",
            "page": 152
        },
        "C.11.1.1.1.1": {
            "title": "C.11.1.1.1.1 Non-text content (screen reading supported open functionality)",
            "page": 152
        },
        "C.11.1.1.1.2": {
            "title": "C.11.1.1.1.2 Non-text content (closed functionality)",
            "page": 152
        },
        "C.11.1.2": {
            "title": "C.11.1.2 Time-based media",
            "page": 152
        },
        "C.11.1.2.1": {
            "title": "C.11.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 152
        },
        "C.11.1.2.1.1": {
            "title": "C.11.1.2.1.1 Audio-only and video-only (pre-recorded - open functionality)",
            "page": 152
        },
        "C.11.1.2.1.2": {
            "title": "C.11.1.2.1.2 Audio-only and video-only (pre-recorded - closed functionality)",
            "page": 153
        },
        "C.11.1.2.1.2.1": {
            "title": "C.11.1.2.1.2.1 Pre-recorded audio-only (closed functionality)",
            "page": 153
        },
        "C.11.1.2.1.2.2": {
            "title": "C.11.1.2.1.2.2 Pre-recorded video-only (closed functionality)",
            "page": 153
        },
        "C.11.1.2.2": {
            "title": "C.11.1.2.2 Captions (pre-recorded)",
            "page": 153
        },
        "C.11.1.2.3": {
            "title": "C.11.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 153
        },
        "C.11.1.2.3.1": {
            "title": "C.11.1.2.3.1 Audio description or media alternative (pre-recorded - open functionality)",
            "page": 153
        },
        "C.11.1.2.3.2": {
            "title": "C.11.1.2.3.2 Audio description or media alternative (pre-recorded - closed functionality)",
            "page": 154
        },
        "C.11.1.2.4": {
            "title": "C.11.1.2.4 Captions (live)",
            "page": 154
        },
        "C.11.1.2.5": {
            "title": "C.11.1.2.5 Audio description (pre-recorded)",
            "page": 154
        },
        "C.11.1.3": {
            "title": "C.11.1.3 Adaptable",
            "page": 154
        },
        "C.11.1.3.1": {
            "title": "C.11.1.3.1 Info and relationships",
            "page": 154
        },
        "C.11.1.3.1.1": {
            "title": "C.11.1.3.1.1 Info and relationships (open functionality)",
            "page": 154
        },
        "C.11.1.3.1.2": {
            "title": "C.11.1.3.1.2 Info and relationships (closed functionality)",
            "page": 154
        },
        "C.11.1.3.2": {
            "title": "C.11.1.3.2 Meaningful sequence",
            "page": 155
        },
        "C.11.1.3.2.1": {
            "title": "C.11.1.3.2.1 Meaningful sequence (open functionality)",
            "page": 155
        },
        "C.11.1.3.2.2": {
            "title": "C.11.1.3.2.2 Meaningful sequence (closed functionality)",
            "page": 155
        },
        "C.11.1.3.3": {
            "title": "C.11.1.3.3 Sensory characteristics",
            "page": 155
        },
        "C.11.1.3.4": {
            "title": "C.11.1.3.4 Orientation",
            "page": 155
        },
        "C.11.1.3.5": {
            "title": "C.11.1.3.5 Identify input purpose",
            "page": 155
        },
        "C.11.1.3.5.1": {
            "title": "C.11.1.3.5.1 Identify input purpose (open functionality)",
            "page": 155
        },
        "C.11.1.3.5.2": {
            "title": "C.11.1.3.5.2 Identify input purpose (closed functionality)",
            "page": 156
        },
        "C.11.1.4": {
            "title": "C.11.1.4 Distinguishable",
            "page": 156
        },
        "C.11.1.4.1": {
            "title": "C.11.1.4.1 Use of colour",
            "page": 156
        },
        "C.11.1.4.2": {
            "title": "C.11.1.4.2 Audio control",
            "page": 156
        },
        "C.11.1.4.3": {
            "title": "C.11.1.4.3 Contrast (minimum)",
            "page": 156
        },
        "C.11.1.4.4": {
            "title": "C.11.1.4.4 Resize text",
            "page": 156
        },
        "C.11.1.4.4.1": {
            "title": "C.11.1.4.4.1 Resize text (open functionality)",
            "page": 156
        },
        "C.11.1.4.4.2": {
            "title": "C.11.1.4.4.2 Resize text (closed functionality)",
            "page": 157
        },
        "C.11.1.4.5": {
            "title": "C.11.1.4.5 Images of text",
            "page": 157
        },
        "C.11.1.4.5.1": {
            "title": "C.11.1.4.5.1 Images of text (open functionality)",
            "page": 157
        },
        "C.11.1.4.5.2": {
            "title": "C.11.1.4.5.2 Images of text (closed functionality)",
            "page": 157
        },
        "C.11.1.4.6": {
            "title": "C.11.1.4.6 Void",
            "page": 157
        },
        "C.11.1.4.7": {
            "title": "C.11.1.4.7 Void",
            "page": 157
        },
        "C.11.1.4.8": {
            "title": "C.11.1.4.8 Void",
            "page": 157
        },
        "C.11.1.4.9": {
            "title": "C.11.1.4.9 Void",
            "page": 157
        },
        "C.11.1.4.10": {
            "title": "C.11.1.4.10 Reflow",
            "page": 158
        },
        "C.11.1.4.11": {
            "title": "C.11.1.4.11 Non-text contrast",
            "page": 158
        },
        "C.11.1.4.12": {
            "title": "C.11.1.4.12 Text spacing",
            "page": 158
        },
        "C.11.1.4.13": {
            "title": "C.11.1.4.13 Content on hover or focus",
            "page": 158
        },
        "C.11.2": {
            "title": "C.11.2 Operable",
            "page": 158
        },
        "C.11.2.1": {
            "title": "C.11.2.1 Keyboard accessible",
            "page": 158
        },
        "C.11.2.1.1": {
            "title": "C.11.2.1.1 Keyboard",
            "page": 158
        },
        "C.11.2.1.1.1": {
            "title": "C.11.2.1.1.1 Keyboard (open functionality)",
            "page": 158
        },
        "C.11.2.1.1.2": {
            "title": "C.11.2.1.1.2 Keyboard (closed functionality)",
            "page": 159
        },
        "C.11.2.1.2": {
            "title": "C.11.2.1.2 No keyboard trap",
            "page": 159
        },
        "C.11.2.1.3": {
            "title": "C.11.2.1.3 Void",
            "page": 159
        },
        "C.11.2.1.4": {
            "title": "C.11.2.1.4 Character key shortcuts",
            "page": 159
        },
        "C.11.2.1.4.1": {
            "title": "C.11.2.1.4.1 Character key shortcuts (open functionality)",
            "page": 159
        },
        "C.11.2.1.4.2": {
            "title": "C.11.2.1.4.2 Character key shortcuts (closed functionality)",
            "page": 159
        },
        "C.11.2.2": {
            "title": "C.11.2.2 Enough time",
            "page": 159
        },
        "C.11.2.2.1": {
            "title": "C.11.2.2.1 Timing adjustable",
            "page": 159
        },
        "C.11.2.2.2": {
            "title": "C.11.2.2.2 Pause, stop, hide",
            "page": 159
        },
        "C.11.2.3": {
            "title": "C.11.2.3 Seizures and physical reactions",
            "page": 160
        },
        "C.11.2.3.1": {
            "title": "C.11.2.3.1 Three flashes or below threshold",
            "page": 160
        },
        "C.11.2.4": {
            "title": "C.11.2.4 Navigable",
            "page": 160
        },
        "C.11.2.4.1": {
            "title": "C.11.2.4.1 Void",
            "page": 160
        },
        "C.11.2.4.2": {
            "title": "C.11.2.4.2 Void",
            "page": 160
        },
        "C.11.2.4.3": {
            "title": "C.11.2.4.3 Focus order",
            "page": 160
        },
        "C.11.2.4.4": {
            "title": "C.11.2.4.4 Link purpose (in context)",
            "page": 160
        },
        "C.11.2.4.5": {
            "title": "C.11.2.4.5 Void",
            "page": 160
        },
        "C.11.2.4.6": {
            "title": "C.11.2.4.6 Headings and labels",
            "page": 160
        },
        "C.11.2.4.7": {
            "title": "C.11.2.4.7 Focus visible",
            "page": 160
        },
        "C.11.2.5": {
            "title": "C.11.2.5 Input modalities",
            "page": 161
        },
        "C.11.2.5.1": {
            "title": "C.11.2.5.1 Pointer gestures",
            "page": 161
        },
        "C.11.2.5.2": {
            "title": "C.11.2.5.2 Pointer cancellation",
            "page": 161
        },
        "C.11.2.5.3": {
            "title": "C.11.2.5.3 Label in name",
            "page": 161
        },
        "C.11.2.5.3.1": {
            "title": "C.11.2.5.3.1 Label in name (open functionality)",
            "page": 161
        },
        "C.11.2.5.3.2": {
            "title": "C.11.2.5.3.2 Label in name (closed functionality)",
            "page": 161
        },
        "C.11.2.5.4": {
            "title": "C.11.2.5.4 Motion actuation",
            "page": 161
        },
        "C.11.3": {
            "title": "C.11.3 Understandable",
            "page": 162
        },
        "C.11.3.1": {
            "title": "C.11.3.1 Readable",
            "page": 162
        },
        "C.11.3.1.1": {
            "title": "C.11.3.1.1 Language of software",
            "page": 162
        },
        "C.11.3.1.1.1": {
            "title": "C.11.3.1.1.1 Language of software (open functionality)",
            "page": 162
        },
        "C.11.3.1.1.2": {
            "title": "C.11.3.1.1.2 Language of software (closed functionality)",
            "page": 162
        },
        "C.11.3.1.2": {
            "title": "C.11.3.1.2 Void",
            "page": 162
        },
        "C.11.3.2": {
            "title": "C.11.3.2 Predictable",
            "page": 162
        },
        "C.11.3.2.1": {
            "title": "C.11.3.2.1 On focus",
            "page": 162
        },
        "C.11.3.2.2": {
            "title": "C.11.3.2.2 On input",
            "page": 162
        },
        "C.11.3.2.3": {
            "title": "C.11.3.2.3 Void",
            "page": 162
        },
        "C.11.3.2.4": {
            "title": "C.11.3.2.4 Void",
            "page": 162
        },
        "C.11.3.3": {
            "title": "C.11.3.3 Input assistance",
            "page": 163
        },
        "C.11.3.3.1": {
            "title": "C.11.3.3.1 Error identification",
            "page": 163
        },
        "C.11.3.3.1.1": {
            "title": "C.11.3.3.1.1 Error identification (open functionality)",
            "page": 163
        },
        "C.11.3.3.1.2": {
            "title": "C.11.3.3.1.2 Error Identification (closed functionality)",
            "page": 163
        },
        "C.11.3.3.2": {
            "title": "C.11.3.3.2 Labels or instructions",
            "page": 163
        },
        "C.11.3.3.3": {
            "title": "C.11.3.3.3 Error suggestion",
            "page": 163
        },
        "C.11.3.3.4": {
            "title": "C.11.3.3.4 Error prevention (legal, financial, data)",
            "page": 163
        },
        "C.11.4": {
            "title": "C.11.4 Robust",
            "page": 164
        },
        "C.11.4.1": {
            "title": "C.11.4.1 Compatible",
            "page": 164
        },
        "C.11.4.1.1": {
            "title": "C.11.4.1.1 Parsing",
            "page": 164
        },
        "C.11.4.1.1.1": {
            "title": "C.11.4.1.1.1 Parsing (open functionality)",
            "page": 164
        },
        "C.11.4.1.1.2": {
            "title": "C.11.4.1.1.2 Parsing (closed functionality)",
            "page": 164
        },
        "C.11.4.1.2": {
            "title": "C.11.4.1.2 Name, role, value",
            "page": 164
        },
        "C.11.4.1.2.1": {
            "title": "C.11.4.1.2.1 Name, role, value (open functionality)",
            "page": 164
        },
        "C.11.4.1.2.2": {
            "title": "C.11.4.1.2.2 Name, role, value (closed functionality)",
            "page": 164
        },
        "C.11.4.1.3": {
            "title": "C.11.4.1.3 Status messages",
            "page": 164
        },
        "C.11.4.1.3.1": {
            "title": "C.11.4.1.3.1 Status messages (open functionality)",
            "page": 164
        },
        "C.11.4.1.3.2": {
            "title": "C.11.4.1.3.2 Status messages (closed functionality)",
            "page": 164
        },
        "C.11.5": {
            "title": "C.11.5 Interoperability with assistive technology",
            "page": 165
        },
        "C.11.5.1": {
            "title": "C.11.5.1 Closed functionality",
            "page": 165
        },
        "C.11.5.2": {
            "title": "C.11.5.2 Accessibility services",
            "page": 165
        },
        "C.11.5.2.1": {
            "title": "C.11.5.2.1 Platform accessibility service support for software that provides a user interface",
            "page": 165
        },
        "C.11.5.2.2": {
            "title": "C.11.5.2.2 Platform accessibility service support for assistive technologies",
            "page": 165
        },
        "C.11.5.2.3": {
            "title": "C.11.5.2.3 Use of accessibility services",
            "page": 165
        },
        "C.11.5.2.4": {
            "title": "C.11.5.2.4 Assistive technology",
            "page": 165
        },
        "C.11.5.2.5": {
            "title": "C.11.5.2.5 Object information",
            "page": 166
        },
        "C.11.5.2.6": {
            "title": "C.11.5.2.6 Row, column, and headers",
            "page": 166
        },
        "C.11.5.2.7": {
            "title": "C.11.5.2.7 Values",
            "page": 166
        },
        "C.11.5.2.8": {
            "title": "C.11.5.2.8 Label relationships",
            "page": 167
        },
        "C.11.5.2.9": {
            "title": "C.11.5.2.9 Parent-child relationships",
            "page": 167
        },
        "C.11.5.2.10": {
            "title": "C.11.5.2.10 Text",
            "page": 167
        },
        "C.11.5.2.11": {
            "title": "C.11.5.2.11 List of available actions",
            "page": 168
        },
        "C.11.5.2.12": {
            "title": "C.11.5.2.12 Execution of available actions",
            "page": 168
        },
        "C.11.5.2.13": {
            "title": "C.11.5.2.13 Tracking of focus and selection attributes",
            "page": 168
        },
        "C.11.5.2.14": {
            "title": "C.11.5.2.14 Modification of focus and selection attributes",
            "page": 168
        },
        "C.11.5.2.15": {
            "title": "C.11.5.2.15 Change notification",
            "page": 169
        },
        "C.11.5.2.16": {
            "title": "C.11.5.2.16 Modifications of states and properties",
            "page": 169
        },
        "C.11.5.2.17": {
            "title": "C.11.5.2.17 Modifications of values and text",
            "page": 169
        },
        "C.11.6": {
            "title": "C.11.6 Documented accessibility usage",
            "page": 170
        },
        "C.11.6.1": {
            "title": "C.11.6.1 User control of accessibility features",
            "page": 170
        },
        "C.11.6.2": {
            "title": "C.11.6.2 No disruption of accessibility features",
            "page": 170
        },
        "C.11.7": {
            "title": "C.11.7 User preferences",
            "page": 170
        },
        "C.11.8": {
            "title": "C.11.8 Authoring tools",
            "page": 170
        },
        "C.11.8.1": {
            "title": "C.11.8.1 Content technology",
            "page": 170
        },
        "C.11.8.2": {
            "title": "C.11.8.2 Accessible content creation",
            "page": 171
        },
        "C.11.8.3": {
            "title": "C.11.8.3 Preservation of accessibility information in transformations",
            "page": 171
        },
        "C.11.8.4": {
            "title": "C.11.8.4 Repair assistance",
            "page": 171
        },
        "C.11.8.5": {
            "title": "C.11.8.5 Templates",
            "page": 171
        },
        "C.12": {
            "title": "C.12 Documentation and support services",
            "page": 172
        },
        "C.12.1": {
            "title": "C.12.1 Product documentation",
            "page": 172
        },
        "C.12.1.1": {
            "title": "C.12.1.1 Accessibility and compatibility features",
            "page": 172
        },
        "C.12.1.2": {
            "title": "C.12.1.2 Accessible documentation",
            "page": 172
        },
        "C.12.2": {
            "title": "C.12.2 Support services",
            "page": 172
        },
        "C.12.2.1": {
            "title": "C.12.2.1 General",
            "page": 172
        },
        "C.12.2.2": {
            "title": "C.12.2.2 Information on accessibility and compatibility features",
            "page": 172
        },
        "C.12.2.3": {
            "title": "C.12.2.3 Effective communication",
            "page": 172
        },
        "C.12.2.4": {
            "title": "C.12.2.4 Accessible documentation",
            "page": 173
        },
        "C.13": {
            "title": "C.13 ICT providing relay or emergency service access",
            "page": 173
        },
        "C.13.1": {
            "title": "C.13.1 Relay service requirements",
            "page": 173
        },
        "C.13.1.1": {
            "title": "C.13.1.1 General",
            "page": 173
        },
        "C.13.1.2": {
            "title": "C.13.1.2 Text relay services",
            "page": 173
        },
        "C.13.1.3": {
            "title": "C.13.1.3 Sign relay services",
            "page": 173
        },
        "C.13.1.4": {
            "title": "C.13.1.4 Lip-reading relay services",
            "page": 173
        },
        "C.13.1.5": {
            "title": "C.13.1.5 Captioned telephony services",
            "page": 173
        },
        "C.13.1.6": {
            "title": "C.13.1.6 Speech to speech relay services",
            "page": 174
        },
        "C.13.2": {
            "title": "C.13.2 Access to relay services",
            "page": 174
        },
        "C.13.3": {
            "title": "C.13.3 Access to emergency services",
            "page": 174
        },
        "Annex D": {
            "title": "Annex D (informative): Further resources for cognitive accessibility",
            "page": 175
        },
        "Annex E": {
            "title": "Annex E (informative): Guidance for users of the present document",
            "page": 176
        },
        "E.1": {
            "title": "E.1 Introduction",
            "page": 176
        },
        "E.2": {
            "title": "E.2 Overview",
            "page": 176
        },
        "E.3": {
            "title": "E.3 Clause 4",
            "page": 177
        },
        "E.4": {
            "title": "E.4 How to use the standard",
            "page": 177
        },
        "E.4.1": {
            "title": "E.4.1 Self scoping requirements",
            "page": 177
        },
        "E.4.2": {
            "title": "E.4.2 Connection between requirements and functional performance statements",
            "page": 177
        },
        "E.5": {
            "title": "E.5 The European Web Accessibility Directive [i.28]",
            "page": 178
        },
        "E.6": {
            "title": "E.6 Annex D: Further resources for cognitive accessibility",
            "page": 178
        }
    },
    "3.2.1": {
        "1": {
            "title": "1 Scope",
            "page": 11
        },
        "2": {
            "title": "2 References",
            "page": 11
        },
        "2.1": {
            "title": "2.1 Normative references",
            "page": 11
        },
        "2.2": {
            "title": "2.2 Informative references",
            "page": 12
        },
        "3": {
            "title": "3 Definition of terms, symbols and abbreviations",
            "page": 15
        },
        "3.1": {
            "title": "3.1 Terms",
            "page": 15
        },
        "3.2": {
            "title": "3.2 Symbols",
            "page": 19
        },
        "3.3": {
            "title": "3.3 Abbreviations",
            "page": 19
        },
        "4": {
            "title": "4 Functional performance",
            "page": 20
        },
        "4.1": {
            "title": "4.1 Meeting functional performance statements",
            "page": 20
        },
        "4.2": {
            "title": "4.2 Functional performance statements",
            "page": 20
        },
        "4.2.1": {
            "title": "4.2.1 Usage without vision",
            "page": 20
        },
        "4.2.2": {
            "title": "4.2.2 Usage with limited vision",
            "page": 20
        },
        "4.2.3": {
            "title": "4.2.3 Usage without perception of colour",
            "page": 21
        },
        "4.2.4": {
            "title": "4.2.4 Usage without hearing",
            "page": 21
        },
        "4.2.5": {
            "title": "4.2.5 Usage with limited hearing",
            "page": 21
        },
        "4.2.6": {
            "title": "4.2.6 Usage with no or limited vocal capability",
            "page": 21
        },
        "4.2.7": {
            "title": "4.2.7 Usage with limited manipulation or strength",
            "page": 21
        },
        "4.2.8": {
            "title": "4.2.8 Usage with limited reach",
            "page": 22
        },
        "4.2.9": {
            "title": "4.2.9 Minimize photosensitive seizure triggers",
            "page": 22
        },
        "4.2.10": {
            "title": "4.2.10 Usage with limited cognition, language or learning",
            "page": 22
        },
        "4.2.11": {
            "title": "4.2.11 Privacy",
            "page": 22
        },
        "5": {
            "title": "5 Generic requirements",
            "page": 23
        },
        "5.1": {
            "title": "5.1 Closed functionality",
            "page": 23
        },
        "5.1.1": {
            "title": "5.1.1 Introduction (informative)",
            "page": 23
        },
        "5.1.2": {
            "title": "5.1.2 General",
            "page": 23
        },
        "5.1.2.1": {
            "title": "5.1.2.1 Closed functionality",
            "page": 23
        },
        "5.1.2.2": {
            "title": "5.1.2.2 Assistive technology",
            "page": 23
        },
        "5.1.3": {
            "title": "5.1.3 Non-visual access",
            "page": 23
        },
        "5.1.3.1": {
            "title": "5.1.3.1 Audio output of visual information",
            "page": 23
        },
        "5.1.3.2": {
            "title": "5.1.3.2 Auditory output delivery including speech",
            "page": 23
        },
        "5.1.3.3": {
            "title": "5.1.3.3 Auditory output correlation",
            "page": 24
        },
        "5.1.3.4": {
            "title": "5.1.3.4 Speech output user control",
            "page": 24
        },
        "5.1.3.5": {
            "title": "5.1.3.5 Speech output automatic interruption",
            "page": 24
        },
        "5.1.3.6": {
            "title": "5.1.3.6 Speech output for non-text content",
            "page": 24
        },
        "5.1.3.7": {
            "title": "5.1.3.7 Speech output for video information",
            "page": 24
        },
        "5.1.3.8": {
            "title": "5.1.3.8 Masked entry",
            "page": 25
        },
        "5.1.3.9": {
            "title": "5.1.3.9 Private access to personal data",
            "page": 25
        },
        "5.1.3.10": {
            "title": "5.1.3.10 Non-interfering audio output",
            "page": 25
        },
        "5.1.3.11": {
            "title": "5.1.3.11 Private listening volume",
            "page": 25
        },
        "5.1.3.12": {
            "title": "5.1.3.12 Speaker volume",
            "page": 25
        },
        "5.1.3.13": {
            "title": "5.1.3.13 Volume reset",
            "page": 25
        },
        "5.1.3.14": {
            "title": "5.1.3.14 Spoken languages",
            "page": 26
        },
        "5.1.3.15": {
            "title": "5.1.3.15 Non-visual error identification",
            "page": 26
        },
        "5.1.3.16": {
            "title": "5.1.3.16 Receipts, tickets, and transactional outputs",
            "page": 26
        },
        "5.1.4": {
            "title": "5.1.4 Functionality closed to text enlargement",
            "page": 26
        },
        "5.1.5": {
            "title": "5.1.5 Visual output for auditory information",
            "page": 27
        },
        "5.1.6": {
            "title": "5.1.6 Operation without keyboard interface",
            "page": 27
        },
        "5.1.6.1": {
            "title": "5.1.6.1 Closed functionality",
            "page": 27
        },
        "5.1.6.2": {
            "title": "5.1.6.2 Input focus",
            "page": 28
        },
        "5.1.7": {
            "title": "5.1.7 Access without speech",
            "page": 28
        },
        "5.2": {
            "title": "5.2 Activation of accessibility features",
            "page": 28
        },
        "5.3": {
            "title": "5.3 Biometrics",
            "page": 28
        },
        "5.4": {
            "title": "5.4 Preservation of accessibility information during conversion",
            "page": 28
        },
        "5.5": {
            "title": "5.5 Operable parts",
            "page": 28
        },
        "5.5.1": {
            "title": "5.5.1 Means of operation",
            "page": 28
        },
        "5.5.2": {
            "title": "5.5.2 Operable parts discernibility",
            "page": 28
        },
        "5.6": {
            "title": "5.6 Locking or toggle controls",
            "page": 29
        },
        "5.6.1": {
            "title": "5.6.1 Tactile or auditory status",
            "page": 29
        },
        "5.6.2": {
            "title": "5.6.2 Visual status",
            "page": 29
        },
        "5.7": {
            "title": "5.7 Key repeat",
            "page": 29
        },
        "5.8": {
            "title": "5.8 Double-strike key acceptance",
            "page": 29
        },
        "5.9": {
            "title": "5.9 Simultaneous user actions",
            "page": 29
        },
        "6": {
            "title": "6 ICT with two-way voice communication",
            "page": 30
        },
        "6.1": {
            "title": "6.1 Audio bandwidth for speech",
            "page": 30
        },
        "6.2": {
            "title": "6.2 Real-Time Text (RTT) functionality",
            "page": 30
        },
        "6.2.1": {
            "title": "6.2.1 RTT provision",
            "page": 30
        },
        "6.2.1.1": {
            "title": "6.2.1.1 RTT communication",
            "page": 30
        },
        "6.2.1.2": {
            "title": "6.2.1.2 Concurrent voice and text",
            "page": 30
        },
        "6.2.2": {
            "title": "6.2.2 Display of RTT",
            "page": 31
        },
        "6.2.2.1": {
            "title": "6.2.2.1 Visually distinguishable display",
            "page": 31
        },
        "6.2.2.2": {
            "title": "6.2.2.2 Programmatically determinable send and receive direction",
            "page": 31
        },
        "6.2.2.3": {
            "title": "6.2.2.3 Speaker identification",
            "page": 31
        },
        "6.2.2.4": {
            "title": "6.2.2.4 Visual indicator of Audio with RTT",
            "page": 31
        },
        "6.2.3": {
            "title": "6.2.3 Interoperability",
            "page": 31
        },
        "6.2.4": {
            "title": "6.2.4 RTT responsiveness",
            "page": 32
        },
        "6.3": {
            "title": "6.3 Caller ID",
            "page": 32
        },
        "6.4": {
            "title": "6.4 Alternatives to voice-based services",
            "page": 32
        },
        "6.5": {
            "title": "6.5 Video communication",
            "page": 33
        },
        "6.5.1": {
            "title": "6.5.1 General (informative)",
            "page": 33
        },
        "6.5.2": {
            "title": "6.5.2 Resolution",
            "page": 33
        },
        "6.5.3": {
            "title": "6.5.3 Frame rate",
            "page": 33
        },
        "6.5.4": {
            "title": "6.5.4 Synchronization between audio and video",
            "page": 33
        },
        "6.5.5": {
            "title": "6.5.5 Visual indicator of audio with video",
            "page": 33
        },
        "6.5.6": {
            "title": "6.5.6 Speaker identification with video (sign language) communication",
            "page": 34
        },
        "6.6": {
            "title": "6.6 Alternatives to video-based services",
            "page": 34
        },
        "7": {
            "title": "7 ICT with video capabilities",
            "page": 35
        },
        "7.1": {
            "title": "7.1 Caption processing technology",
            "page": 35
        },
        "7.1.1": {
            "title": "7.1.1 Captioning playback",
            "page": 35
        },
        "7.1.2": {
            "title": "7.1.2 Captioning synchronization",
            "page": 35
        },
        "7.1.3": {
            "title": "7.1.3 Preservation of captioning",
            "page": 35
        },
        "7.1.4": {
            "title": "7.1.4 Captions characteristics",
            "page": 35
        },
        "7.1.5": {
            "title": "7.1.5 Spoken subtitles",
            "page": 35
        },
        "7.2": {
            "title": "7.2 Audio description technology",
            "page": 36
        },
        "7.2.1": {
            "title": "7.2.1 Audio description playback",
            "page": 36
        },
        "7.2.2": {
            "title": "7.2.2 Audio description synchronization",
            "page": 36
        },
        "7.2.3": {
            "title": "7.2.3 Preservation of audio description",
            "page": 36
        },
        "7.3": {
            "title": "7.3 User controls for captions and audio description",
            "page": 36
        },
        "8": {
            "title": "8 Hardware",
            "page": 37
        },
        "8.1": {
            "title": "8.1 General",
            "page": 37
        },
        "8.1.1": {
            "title": "8.1.1 Generic requirements",
            "page": 37
        },
        "8.1.2": {
            "title": "8.1.2 Standard connections",
            "page": 37
        },
        "8.1.3": {
            "title": "8.1.3 Colour",
            "page": 37
        },
        "8.2": {
            "title": "8.2 Hardware products with speech output",
            "page": 37
        },
        "8.2.1": {
            "title": "8.2.1 Speech volume gain",
            "page": 37
        },
        "8.2.1.1": {
            "title": "8.2.1.1 Speech volume range",
            "page": 37
        },
        "8.2.1.2": {
            "title": "8.2.1.2 Incremental volume control",
            "page": 37
        },
        "8.2.2": {
            "title": "8.2.2 Magnetic coupling",
            "page": 37
        },
        "8.2.2.1": {
            "title": "8.2.2.1 Fixed-line devices",
            "page": 37
        },
        "8.2.2.2": {
            "title": "8.2.2.2 Wireless communication devices",
            "page": 38
        },
        "8.3": {
            "title": "8.3 Stationary ICT",
            "page": 38
        },
        "8.3.0": {
            "title": "8.3.0 General",
            "page": 38
        },
        "8.3.1": {
            "title": "8.3.1 Forward or side reach",
            "page": 38
        },
        "8.3.2": {
            "title": "8.3.2 Forward reach",
            "page": 38
        },
        "8.3.2.1": {
            "title": "8.3.2.1 Unobstructed high forward reach",
            "page": 38
        },
        "8.3.2.2": {
            "title": "8.3.2.2 Unobstructed low forward reach",
            "page": 38
        },
        "8.3.2.3": {
            "title": "8.3.2.3 Obstructed forward reach",
            "page": 39
        },
        "8.3.2.3.1": {
            "title": "8.3.2.3.1 Clear space",
            "page": 39
        },
        "8.3.2.3.2": {
            "title": "8.3.2.3.2 Obstructed (< 510 mm) forward reach",
            "page": 39
        },
        "8.3.2.3.3": {
            "title": "8.3.2.3.3 Obstructed (< 635 mm) forward reach",
            "page": 39
        },
        "8.3.2.4": {
            "title": "8.3.2.4 Knee and toe clearance width",
            "page": 39
        },
        "8.3.2.5": {
            "title": "8.3.2.5 Toe clearance",
            "page": 40
        },
        "8.3.2.6": {
            "title": "8.3.2.6 Knee clearance",
            "page": 40
        },
        "8.3.3": {
            "title": "8.3.3 Side reach",
            "page": 41
        },
        "8.3.3.1": {
            "title": "8.3.3.1 Unobstructed high side reach",
            "page": 41
        },
        "8.3.3.2": {
            "title": "8.3.3.2 Unobstructed low side reach",
            "page": 41
        },
        "8.3.3.3": {
            "title": "8.3.3.3 Obstructed side reach",
            "page": 41
        },
        "8.3.3.3.1": {
            "title": "8.3.3.3.1 Obstructed (\u2264 255 mm) side reach",
            "page": 41
        },
        "8.3.3.3.2": {
            "title": "8.3.3.3.2 Obstructed (\u2264 610 mm) side reach",
            "page": 41
        },
        "8.3.4": {
            "title": "8.3.4 Clear floor or ground space",
            "page": 42
        },
        "8.3.4.1": {
            "title": "8.3.4.1 Change in level",
            "page": 42
        },
        "8.3.4.2": {
            "title": "8.3.4.2 Clear floor or ground space",
            "page": 42
        },
        "8.3.4.3": {
            "title": "8.3.4.3 Approach",
            "page": 42
        },
        "8.3.4.3.1": {
            "title": "8.3.4.3.1 General",
            "page": 42
        },
        "8.3.4.3.2": {
            "title": "8.3.4.3.2 Forward approach",
            "page": 43
        },
        "8.3.4.3.3": {
            "title": "8.3.4.3.3 Parallel approach",
            "page": 43
        },
        "8.3.5": {
            "title": "8.3.5 Visibility",
            "page": 43
        },
        "8.3.6": {
            "title": "8.3.6 Installation instructions",
            "page": 43
        },
        "8.4": {
            "title": "8.4 Mechanically operable parts",
            "page": 44
        },
        "8.4.1": {
            "title": "8.4.1 Numeric keys",
            "page": 44
        },
        "8.4.2": {
            "title": "8.4.2 Operation of mechanical parts",
            "page": 44
        },
        "8.4.2.1": {
            "title": "8.4.2.1 Means of operation of mechanical parts",
            "page": 44
        },
        "8.4.2.2": {
            "title": "8.4.2.2 Force of operation of mechanical parts",
            "page": 44
        },
        "8.4.3": {
            "title": "8.4.3 Keys, tickets and fare cards",
            "page": 44
        },
        "8.5": {
            "title": "8.5 Tactile indication of speech mode",
            "page": 44
        },
        "9": {
            "title": "9 Web",
            "page": 45
        },
        "9.0": {
            "title": "9.0 General (informative)",
            "page": 45
        },
        "9.1": {
            "title": "9.1 Perceivable",
            "page": 45
        },
        "9.1.1": {
            "title": "9.1.1 Text alternatives",
            "page": 45
        },
        "9.1.1.1": {
            "title": "9.1.1.1 Non-text content",
            "page": 45
        },
        "9.1.2": {
            "title": "9.1.2 Time-based media",
            "page": 45
        },
        "9.1.2.1": {
            "title": "9.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 45
        },
        "9.1.2.2": {
            "title": "9.1.2.2 Captions (pre-recorded)",
            "page": 46
        },
        "9.1.2.3": {
            "title": "9.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 46
        },
        "9.1.2.4": {
            "title": "9.1.2.4 Captions (live)",
            "page": 46
        },
        "9.1.2.5": {
            "title": "9.1.2.5 Audio description (pre-recorded)",
            "page": 46
        },
        "9.1.3": {
            "title": "9.1.3 Adaptable",
            "page": 46
        },
        "9.1.3.1": {
            "title": "9.1.3.1 Info and relationships",
            "page": 46
        },
        "9.1.3.2": {
            "title": "9.1.3.2 Meaningful sequence",
            "page": 46
        },
        "9.1.3.3": {
            "title": "9.1.3.3 Sensory characteristics",
            "page": 46
        },
        "9.1.3.4": {
            "title": "9.1.3.4 Orientation",
            "page": 46
        },
        "9.1.3.5": {
            "title": "9.1.3.5 Identify input purpose",
            "page": 46
        },
        "9.1.4": {
            "title": "9.1.4 Distinguishable",
            "page": 46
        },
        "9.1.4.1": {
            "title": "9.1.4.1 Use of colour",
            "page": 46
        },
        "9.1.4.2": {
            "title": "9.1.4.2 Audio control",
            "page": 46
        },
        "9.1.4.3": {
            "title": "9.1.4.3 Contrast (minimum)",
            "page": 46
        },
        "9.1.4.4": {
            "title": "9.1.4.4 Resize text",
            "page": 47
        },
        "9.1.4.5": {
            "title": "9.1.4.5 Images of text",
            "page": 47
        },
        "9.1.4.6": {
            "title": "9.1.4.6 Void",
            "page": 47
        },
        "9.1.4.7": {
            "title": "9.1.4.7 Void",
            "page": 47
        },
        "9.1.4.8": {
            "title": "9.1.4.8 Void",
            "page": 47
        },
        "9.1.4.9": {
            "title": "9.1.4.9 Void",
            "page": 47
        },
        "9.1.4.10": {
            "title": "9.1.4.10 Reflow",
            "page": 47
        },
        "9.1.4.11": {
            "title": "9.1.4.11 Non-text contrast",
            "page": 47
        },
        "9.1.4.12": {
            "title": "9.1.4.12 Text spacing",
            "page": 47
        },
        "9.1.4.13": {
            "title": "9.1.4.13 Content on hover or focus",
            "page": 47
        },
        "9.2": {
            "title": "9.2 Operable",
            "page": 47
        },
        "9.2.1": {
            "title": "9.2.1 Keyboard accessible",
            "page": 47
        },
        "9.2.1.1": {
            "title": "9.2.1.1 Keyboard",
            "page": 47
        },
        "9.2.1.2": {
            "title": "9.2.1.2 No keyboard trap",
            "page": 47
        },
        "9.2.1.3": {
            "title": "9.2.1.3 Void",
            "page": 47
        },
        "9.2.1.4": {
            "title": "9.2.1.4 Character key shortcuts",
            "page": 47
        },
        "9.2.2": {
            "title": "9.2.2 Enough time",
            "page": 48
        },
        "9.2.2.1": {
            "title": "9.2.2.1 Timing adjustable",
            "page": 48
        },
        "9.2.2.2": {
            "title": "9.2.2.2 Pause, stop, hide",
            "page": 48
        },
        "9.2.3": {
            "title": "9.2.3 Seizures and physical reactions",
            "page": 48
        },
        "9.2.3.1": {
            "title": "9.2.3.1 Three flashes or below threshold",
            "page": 48
        },
        "9.2.4": {
            "title": "9.2.4 Navigable",
            "page": 48
        },
        "9.2.4.1": {
            "title": "9.2.4.1 Bypass blocks",
            "page": 48
        },
        "9.2.4.2": {
            "title": "9.2.4.2 Page titled",
            "page": 48
        },
        "9.2.4.3": {
            "title": "9.2.4.3 Focus Order",
            "page": 48
        },
        "9.2.4.4": {
            "title": "9.2.4.4 Link purpose (in context)",
            "page": 48
        },
        "9.2.4.5": {
            "title": "9.2.4.5 Multiple ways",
            "page": 48
        },
        "9.2.4.6": {
            "title": "9.2.4.6 Headings and labels",
            "page": 48
        },
        "9.2.4.7": {
            "title": "9.2.4.7 Focus visible",
            "page": 48
        },
        "9.2.5": {
            "title": "9.2.5 Input modalities",
            "page": 49
        },
        "9.2.5.1": {
            "title": "9.2.5.1 Pointer gestures",
            "page": 49
        },
        "9.2.5.2": {
            "title": "9.2.5.2 Pointer cancellation",
            "page": 49
        },
        "9.2.5.3": {
            "title": "9.2.5.3 Label in name",
            "page": 49
        },
        "9.2.5.4": {
            "title": "9.2.5.4 Motion actuation",
            "page": 49
        },
        "9.3": {
            "title": "9.3 Understandable",
            "page": 49
        },
        "9.3.1": {
            "title": "9.3.1 Readable",
            "page": 49
        },
        "9.3.1.1": {
            "title": "9.3.1.1 Language of page",
            "page": 49
        },
        "9.3.1.2": {
            "title": "9.3.1.2 Language of parts",
            "page": 49
        },
        "9.3.2": {
            "title": "9.3.2 Predictable",
            "page": 49
        },
        "9.3.2.1": {
            "title": "9.3.2.1 On focus",
            "page": 49
        },
        "9.3.2.2": {
            "title": "9.3.2.2 On input",
            "page": 49
        },
        "9.3.2.3": {
            "title": "9.3.2.3 Consistent navigation",
            "page": 49
        },
        "9.3.2.4": {
            "title": "9.3.2.4 Consistent identification",
            "page": 49
        },
        "9.3.3": {
            "title": "9.3.3 Input assistance",
            "page": 49
        },
        "9.3.3.1": {
            "title": "9.3.3.1 Error identification",
            "page": 49
        },
        "9.3.3.2": {
            "title": "9.3.3.2 Labels or instructions",
            "page": 50
        },
        "9.3.3.3": {
            "title": "9.3.3.3 Error suggestion",
            "page": 50
        },
        "9.3.3.4": {
            "title": "9.3.3.4 Error prevention (legal, financial, data)",
            "page": 50
        },
        "9.4": {
            "title": "9.4 Robust",
            "page": 50
        },
        "9.4.1": {
            "title": "9.4.1 Compatible",
            "page": 50
        },
        "9.4.1.1": {
            "title": "9.4.1.1 Parsing",
            "page": 50
        },
        "9.4.1.2": {
            "title": "9.4.1.2 Name, role, value",
            "page": 50
        },
        "9.4.1.3": {
            "title": "9.4.1.3 Status messages",
            "page": 50
        },
        "9.5": {
            "title": "9.5 WCAG 2.1 AAA Success Criteria",
            "page": 50
        },
        "9.6": {
            "title": "9.6 WCAG conformance requirements",
            "page": 51
        },
        "10": {
            "title": "10 Non-web documents",
            "page": 52
        },
        "10.0": {
            "title": "10.0 General (informative)",
            "page": 52
        },
        "10.1": {
            "title": "10.1 Perceivable",
            "page": 52
        },
        "10.1.1": {
            "title": "10.1.1 Text alternatives",
            "page": 52
        },
        "10.1.1.1": {
            "title": "10.1.1.1 Non-text content",
            "page": 52
        },
        "10.1.2": {
            "title": "10.1.2 Time-based media",
            "page": 53
        },
        "10.1.2.1": {
            "title": "10.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 53
        },
        "10.1.2.2": {
            "title": "10.1.2.2 Captions (pre-recorded)",
            "page": 53
        },
        "10.1.2.3": {
            "title": "10.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 53
        },
        "10.1.2.4": {
            "title": "10.1.2.4 Captions (live)",
            "page": 53
        },
        "10.1.2.5": {
            "title": "10.1.2.5 Audio description (pre-recorded)",
            "page": 53
        },
        "10.1.3": {
            "title": "10.1.3 Adaptable",
            "page": 54
        },
        "10.1.3.1": {
            "title": "10.1.3.1 Info and relationships",
            "page": 54
        },
        "10.1.3.2": {
            "title": "10.1.3.2 Meaningful sequence",
            "page": 54
        },
        "10.1.3.3": {
            "title": "10.1.3.3 Sensory characteristics",
            "page": 54
        },
        "10.1.3.4": {
            "title": "10.1.3.4 Orientation",
            "page": 54
        },
        "10.1.3.5": {
            "title": "10.1.3.5 Identify input purpose",
            "page": 54
        },
        "10.1.4": {
            "title": "10.1.4 Distinguishable",
            "page": 54
        },
        "10.1.4.1": {
            "title": "10.1.4.1 Use of colour",
            "page": 54
        },
        "10.1.4.2": {
            "title": "10.1.4.2 Audio control",
            "page": 54
        },
        "10.1.4.3": {
            "title": "10.1.4.3 Contrast (minimum)",
            "page": 54
        },
        "10.1.4.4": {
            "title": "10.1.4.4 Resize text",
            "page": 54
        },
        "10.1.4.5": {
            "title": "10.1.4.5 Images of text",
            "page": 55
        },
        "10.1.4.6": {
            "title": "10.1.4.6 Void",
            "page": 55
        },
        "10.1.4.7": {
            "title": "10.1.4.7 Void",
            "page": 55
        },
        "10.1.4.8": {
            "title": "10.1.4.8 Void",
            "page": 55
        },
        "10.1.4.9": {
            "title": "10.1.4.9 Void",
            "page": 55
        },
        "10.1.4.10": {
            "title": "10.1.4.10 Reflow",
            "page": 55
        },
        "10.1.4.11": {
            "title": "10.1.4.11 Non-text contrast",
            "page": 55
        },
        "10.1.4.12": {
            "title": "10.1.4.12 Text spacing",
            "page": 56
        },
        "10.1.4.13": {
            "title": "10.1.4.13 Content on hover or focus",
            "page": 56
        },
        "10.2": {
            "title": "10.2 Operable",
            "page": 56
        },
        "10.2.1": {
            "title": "10.2.1 Keyboard accessible",
            "page": 56
        },
        "10.2.1.1": {
            "title": "10.2.1.1 Keyboard",
            "page": 56
        },
        "10.2.1.2": {
            "title": "10.2.1.2 No keyboard trap",
            "page": 56
        },
        "10.2.1.3": {
            "title": "10.2.1.3 Void",
            "page": 57
        },
        "10.2.1.4": {
            "title": "10.2.1.4 Character key shortcuts",
            "page": 57
        },
        "10.2.2": {
            "title": "10.2.2 Enough time",
            "page": 57
        },
        "10.2.2.1": {
            "title": "10.2.2.1 Timing adjustable",
            "page": 57
        },
        "10.2.2.2": {
            "title": "10.2.2.2 Pause, stop, hide",
            "page": 57
        },
        "10.2.3": {
            "title": "10.2.3 Seizures and physical reactions",
            "page": 58
        },
        "10.2.3.1": {
            "title": "10.2.3.1 Three flashes or below threshold",
            "page": 58
        },
        "10.2.4": {
            "title": "10.2.4 Navigable",
            "page": 58
        },
        "10.2.4.1": {
            "title": "10.2.4.1 Void",
            "page": 58
        },
        "10.2.4.2": {
            "title": "10.2.4.2 Document titled",
            "page": 58
        },
        "10.2.4.3": {
            "title": "10.2.4.3 Focus Order",
            "page": 58
        },
        "10.2.4.4": {
            "title": "10.2.4.4 Link purpose (in context)",
            "page": 58
        },
        "10.2.4.5": {
            "title": "10.2.4.5 Void",
            "page": 58
        },
        "10.2.4.6": {
            "title": "10.2.4.6 Headings and labels",
            "page": 59
        },
        "10.2.4.7": {
            "title": "10.2.4.7 Focus visible",
            "page": 59
        },
        "10.2.5": {
            "title": "10.2.5 Input modalities",
            "page": 59
        },
        "10.2.5.1": {
            "title": "10.2.5.1 Pointer gestures",
            "page": 59
        },
        "10.2.5.2": {
            "title": "10.2.5.2 Pointer cancellation",
            "page": 59
        },
        "10.2.5.3": {
            "title": "10.2.5.3 Label in name",
            "page": 59
        },
        "10.2.5.4": {
            "title": "10.2.5.4 Motion actuation",
            "page": 59
        },
        "10.3": {
            "title": "10.3 Understandable",
            "page": 60
        },
        "10.3.1": {
            "title": "10.3.1 Readable",
            "page": 60
        },
        "10.3.1.1": {
            "title": "10.3.1.1 Language of document",
            "page": 60
        },
        "10.3.1.2": {
            "title": "10.3.1.2 Language of parts",
            "page": 60
        },
        "10.3.2": {
            "title": "10.3.2 Predictable",
            "page": 60
        },
        "10.3.2.1": {
            "title": "10.3.2.1 On focus",
            "page": 60
        },
        "10.3.2.2": {
            "title": "10.3.2.2 On input",
            "page": 60
        },
        "10.3.2.3": {
            "title": "10.3.2.3 Void",
            "page": 60
        },
        "10.3.2.4": {
            "title": "10.3.2.4 Void",
            "page": 61
        },
        "10.3.3": {
            "title": "10.3.3 Input assistance",
            "page": 61
        },
        "10.3.3.1": {
            "title": "10.3.3.1 Error identification",
            "page": 61
        },
        "10.3.3.2": {
            "title": "10.3.3.2 Labels or instructions",
            "page": 61
        },
        "10.3.3.3": {
            "title": "10.3.3.3 Error suggestion",
            "page": 61
        },
        "10.3.3.4": {
            "title": "10.3.3.4 Error prevention (legal, financial, data)",
            "page": 61
        },
        "10.4": {
            "title": "10.4 Robust",
            "page": 62
        },
        "10.4.1": {
            "title": "10.4.1 Compatible",
            "page": 62
        },
        "10.4.1.1": {
            "title": "10.4.1.1 Parsing",
            "page": 62
        },
        "10.4.1.2": {
            "title": "10.4.1.2 Name, role, value",
            "page": 62
        },
        "10.4.1.3": {
            "title": "10.4.1.3 Status messages",
            "page": 62
        },
        "10.5": {
            "title": "10.5 Caption positioning",
            "page": 62
        },
        "10.6": {
            "title": "10.6 Audio description timing",
            "page": 63
        },
        "11": {
            "title": "11 Software",
            "page": 64
        },
        "11.0": {
            "title": "11.0 General (informative)",
            "page": 64
        },
        "11.1": {
            "title": "11.1 Perceivable",
            "page": 65
        },
        "11.1.1": {
            "title": "11.1.1 Text alternatives",
            "page": 65
        },
        "11.1.1.1": {
            "title": "11.1.1.1 Non-text content",
            "page": 65
        },
        "11.1.1.1.1": {
            "title": "11.1.1.1.1 Non-text content (open functionality)",
            "page": 65
        },
        "11.1.1.1.2": {
            "title": "11.1.1.1.2 Non-text content (closed functionality)",
            "page": 65
        },
        "11.1.2": {
            "title": "11.1.2 Time-based media",
            "page": 65
        },
        "11.1.2.1": {
            "title": "11.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 65
        },
        "11.1.2.1.1": {
            "title": "11.1.2.1.1 Audio-only and video-only (pre-recorded - open functionality)",
            "page": 65
        },
        "11.1.2.1.2": {
            "title": "11.1.2.1.2 Audio-only and video-only (pre-recorded - closed functionality)",
            "page": 65
        },
        "11.1.2.1.2.1": {
            "title": "11.1.2.1.2.1 Pre-recorded audio-only (closed functionality)",
            "page": 65
        },
        "11.1.2.1.2.2": {
            "title": "11.1.2.1.2.2 Pre-recorded video-only (closed functionality)",
            "page": 65
        },
        "11.1.2.2": {
            "title": "11.1.2.2 Captions (pre-recorded)",
            "page": 66
        },
        "11.1.2.3": {
            "title": "11.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 66
        },
        "11.1.2.3.1": {
            "title": "11.1.2.3.1 Audio description or media alternative (pre-recorded - open functionality)",
            "page": 66
        },
        "11.1.2.3.2": {
            "title": "11.1.2.3.2 Audio description or media alternative (pre-recorded - closed functionality)",
            "page": 66
        },
        "11.1.2.4": {
            "title": "11.1.2.4 Captions (live)",
            "page": 66
        },
        "11.1.2.5": {
            "title": "11.1.2.5 Audio description (pre-recorded)",
            "page": 66
        },
        "11.1.3": {
            "title": "11.1.3 Adaptable",
            "page": 67
        },
        "11.1.3.1": {
            "title": "11.1.3.1 Info and relationships",
            "page": 67
        },
        "11.1.3.1.1": {
            "title": "11.1.3.1.1 Info and relationships (open functionality)",
            "page": 67
        },
        "11.1.3.1.2": {
            "title": "11.1.3.1.2 Info and relationships (closed functionality)",
            "page": 67
        },
        "11.1.3.2": {
            "title": "11.1.3.2 Meaningful sequence",
            "page": 67
        },
        "11.1.3.2.1": {
            "title": "11.1.3.2.1 Meaningful sequence (open functionality)",
            "page": 67
        },
        "11.1.3.2.2": {
            "title": "11.1.3.2.2 Meaningful sequence (closed functionality)",
            "page": 67
        },
        "11.1.3.3": {
            "title": "11.1.3.3 Sensory characteristics",
            "page": 67
        },
        "11.1.3.4": {
            "title": "11.1.3.4 Orientation",
            "page": 67
        },
        "11.1.3.5": {
            "title": "11.1.3.5 Identify input purpose",
            "page": 68
        },
        "11.1.3.5.1": {
            "title": "11.1.3.5.1 Identify input purpose (open functionality)",
            "page": 68
        },
        "11.1.3.5.2": {
            "title": "11.1.3.5.2 Identify input purpose (closed functionality)",
            "page": 68
        },
        "11.1.4": {
            "title": "11.1.4 Distinguishable",
            "page": 68
        },
        "11.1.4.1": {
            "title": "11.1.4.1 Use of colour",
            "page": 68
        },
        "11.1.4.2": {
            "title": "11.1.4.2 Audio control",
            "page": 68
        },
        "11.1.4.3": {
            "title": "11.1.4.3 Contrast (minimum)",
            "page": 68
        },
        "11.1.4.4": {
            "title": "11.1.4.4 Resize text",
            "page": 68
        },
        "11.1.4.4.1": {
            "title": "11.1.4.4.1 Resize text (open functionality)",
            "page": 68
        },
        "11.1.4.4.2": {
            "title": "11.1.4.4.2 Resize text (closed functionality)",
            "page": 69
        },
        "11.1.4.5": {
            "title": "11.1.4.5 Images of text",
            "page": 69
        },
        "11.1.4.5.1": {
            "title": "11.1.4.5.1 Images of text (open functionality)",
            "page": 69
        },
        "11.1.4.5.2": {
            "title": "11.1.4.5.2 Images of text (closed functionality)",
            "page": 69
        },
        "11.1.4.6": {
            "title": "11.1.4.6 Void",
            "page": 69
        },
        "11.1.4.7": {
            "title": "11.1.4.7 Void",
            "page": 69
        },
        "11.1.4.8": {
            "title": "11.1.4.8 Void",
            "page": 69
        },
        "11.1.4.9": {
            "title": "11.1.4.9 Void",
            "page": 69
        },
        "11.1.4.10": {
            "title": "11.1.4.10 Reflow",
            "page": 69
        },
        "11.1.4.11": {
            "title": "11.1.4.11 Non-text contrast",
            "page": 69
        },
        "11.1.4.12": {
            "title": "11.1.4.12 Text spacing",
            "page": 69
        },
        "11.1.4.13": {
            "title": "11.1.4.13 Content on hover or focus",
            "page": 70
        },
        "11.2": {
            "title": "11.2 Operable",
            "page": 70
        },
        "11.2.1": {
            "title": "11.2.1 Keyboard accessible",
            "page": 70
        },
        "11.2.1.1": {
            "title": "11.2.1.1 Keyboard",
            "page": 70
        },
        "11.2.1.1.1": {
            "title": "11.2.1.1.1 Keyboard (open functionality)",
            "page": 70
        },
        "11.2.1.1.2": {
            "title": "11.2.1.1.2 Keyboard (closed functionality)",
            "page": 70
        },
        "11.2.1.2": {
            "title": "11.2.1.2 No keyboard trap",
            "page": 70
        },
        "11.2.1.3": {
            "title": "11.2.1.3 Void",
            "page": 70
        },
        "11.2.1.4": {
            "title": "11.2.1.4 Character key shortcuts",
            "page": 70
        },
        "11.2.1.4.1": {
            "title": "11.2.1.4.1 Character key shortcuts (open functionality)",
            "page": 70
        },
        "11.2.1.4.2": {
            "title": "11.2.1.4.2 Character key shortcuts (closed functionality)",
            "page": 71
        },
        "11.2.2": {
            "title": "11.2.2 Enough time",
            "page": 71
        },
        "11.2.2.1": {
            "title": "11.2.2.1 Timing adjustable",
            "page": 71
        },
        "11.2.2.2": {
            "title": "11.2.2.2 Pause, stop, hide",
            "page": 72
        },
        "11.2.3": {
            "title": "11.2.3 Seizures and physical reactions",
            "page": 72
        },
        "11.2.3.1": {
            "title": "11.2.3.1 Three flashes or below threshold",
            "page": 72
        },
        "11.2.4": {
            "title": "11.2.4 Navigable",
            "page": 72
        },
        "11.2.4.1": {
            "title": "11.2.4.1 Void",
            "page": 72
        },
        "11.2.4.2": {
            "title": "11.2.4.2 Void",
            "page": 73
        },
        "11.2.4.3": {
            "title": "11.2.4.3 Focus order",
            "page": 73
        },
        "11.2.4.4": {
            "title": "11.2.4.4 Link purpose (in context)",
            "page": 73
        },
        "11.2.4.5": {
            "title": "11.2.4.5 Void",
            "page": 73
        },
        "11.2.4.6": {
            "title": "11.2.4.6 Headings and labels",
            "page": 73
        },
        "11.2.4.7": {
            "title": "11.2.4.7 Focus visible",
            "page": 73
        },
        "11.2.5": {
            "title": "11.2.5 Input modalities",
            "page": 73
        },
        "11.2.5.1": {
            "title": "11.2.5.1 Pointer gestures",
            "page": 73
        },
        "11.2.5.2": {
            "title": "11.2.5.2 Pointer cancellation",
            "page": 74
        },
        "11.2.5.3": {
            "title": "11.2.5.3 Label in name",
            "page": 74
        },
        "11.2.5.3.1": {
            "title": "11.2.5.3.1 Label in name (open functionality)",
            "page": 74
        },
        "11.2.5.3.2": {
            "title": "11.2.5.3.2 Label in name (closed functionality)",
            "page": 74
        },
        "11.2.5.4": {
            "title": "11.2.5.4 Motion actuation",
            "page": 74
        },
        "11.3": {
            "title": "11.3 Understandable",
            "page": 74
        },
        "11.3.1": {
            "title": "11.3.1 Readable",
            "page": 74
        },
        "11.3.1.1": {
            "title": "11.3.1.1 Language of software",
            "page": 74
        },
        "11.3.1.1.1": {
            "title": "11.3.1.1.1 Language of software (open functionality)",
            "page": 74
        },
        "11.3.1.1.2": {
            "title": "11.3.1.1.2 Language of software (closed functionality)",
            "page": 75
        },
        "11.3.1.2": {
            "title": "11.3.1.2 Void",
            "page": 75
        },
        "11.3.2": {
            "title": "11.3.2 Predictable",
            "page": 75
        },
        "11.3.2.1": {
            "title": "11.3.2.1 On focus",
            "page": 75
        },
        "11.3.2.2": {
            "title": "11.3.2.2 On input",
            "page": 75
        },
        "11.3.2.3": {
            "title": "11.3.2.3 Void",
            "page": 75
        },
        "11.3.2.4": {
            "title": "11.3.2.4 Void",
            "page": 75
        },
        "11.3.3": {
            "title": "11.3.3 Input assistance",
            "page": 76
        },
        "11.3.3.1": {
            "title": "11.3.3.1 Error identification",
            "page": 76
        },
        "11.3.3.1.1": {
            "title": "11.3.3.1.1 Error identification (open functionality)",
            "page": 76
        },
        "11.3.3.1.2": {
            "title": "11.3.3.1.2 Error Identification (closed functionality)",
            "page": 76
        },
        "11.3.3.2": {
            "title": "11.3.3.2 Labels or instructions",
            "page": 76
        },
        "11.3.3.3": {
            "title": "11.3.3.3 Error suggestion",
            "page": 76
        },
        "11.3.3.4": {
            "title": "11.3.3.4 Error prevention (legal, financial, data)",
            "page": 76
        },
        "11.4": {
            "title": "11.4 Robust",
            "page": 76
        },
        "11.4.1": {
            "title": "11.4.1 Compatible",
            "page": 76
        },
        "11.4.1.1": {
            "title": "11.4.1.1 Parsing",
            "page": 76
        },
        "11.4.1.1.1": {
            "title": "11.4.1.1.1 Parsing (open functionality)",
            "page": 76
        },
        "11.4.1.1.2": {
            "title": "11.4.1.1.2 Parsing (closed functionality)",
            "page": 77
        },
        "11.4.1.2": {
            "title": "11.4.1.2 Name, role, value",
            "page": 77
        },
        "11.4.1.2.1": {
            "title": "11.4.1.2.1 Name, role, value (open functionality)",
            "page": 77
        },
        "11.4.1.2.2": {
            "title": "11.4.1.2.2 Name, role, value (closed functionality)",
            "page": 78
        },
        "11.4.1.3": {
            "title": "11.4.1.3 Status messages",
            "page": 78
        },
        "11.4.1.3.1": {
            "title": "11.4.1.3.1 Status messages (open functionality)",
            "page": 78
        },
        "11.4.1.3.2": {
            "title": "11.4.1.3.2 Status messages (closed functionality)",
            "page": 78
        },
        "11.5": {
            "title": "11.5 Interoperability with assistive technology",
            "page": 78
        },
        "11.5.1": {
            "title": "11.5.1 Closed functionality",
            "page": 78
        },
        "11.5.2": {
            "title": "11.5.2 Accessibility services",
            "page": 78
        },
        "11.5.2.1": {
            "title": "11.5.2.1 Platform accessibility service support for software that provides a user interface",
            "page": 78
        },
        "11.5.2.2": {
            "title": "11.5.2.2 Platform accessibility service support for assistive technologies",
            "page": 79
        },
        "11.5.2.3": {
            "title": "11.5.2.3 Use of accessibility services",
            "page": 79
        },
        "11.5.2.4": {
            "title": "11.5.2.4 Assistive technology",
            "page": 79
        },
        "11.5.2.5": {
            "title": "11.5.2.5 Object information",
            "page": 79
        },
        "11.5.2.6": {
            "title": "11.5.2.6 Row, column, and headers",
            "page": 79
        },
        "11.5.2.7": {
            "title": "11.5.2.7 Values",
            "page": 80
        },
        "11.5.2.8": {
            "title": "11.5.2.8 Label relationships",
            "page": 80
        },
        "11.5.2.9": {
            "title": "11.5.2.9 Parent-child relationships",
            "page": 80
        },
        "11.5.2.10": {
            "title": "11.5.2.10 Text",
            "page": 80
        },
        "11.5.2.11": {
            "title": "11.5.2.11 List of available actions",
            "page": 80
        },
        "11.5.2.12": {
            "title": "11.5.2.12 Execution of available actions",
            "page": 80
        },
        "11.5.2.13": {
            "title": "11.5.2.13 Tracking of focus and selection attributes",
            "page": 80
        },
        "11.5.2.14": {
            "title": "11.5.2.14 Modification of focus and selection attributes",
            "page": 81
        },
        "11.5.2.15": {
            "title": "11.5.2.15 Change notification",
            "page": 81
        },
        "11.5.2.16": {
            "title": "11.5.2.16 Modifications of states and properties",
            "page": 81
        },
        "11.5.2.17": {
            "title": "11.5.2.17 Modifications of values and text",
            "page": 81
        },
        "11.6": {
            "title": "11.6 Documented accessibility usage",
            "page": 81
        },
        "11.6.1": {
            "title": "11.6.1 User control of accessibility features",
            "page": 81
        },
        "11.6.2": {
            "title": "11.6.2 No disruption of accessibility features",
            "page": 82
        },
        "11.7": {
            "title": "11.7 User preferences",
            "page": 82
        },
        "11.8": {
            "title": "11.8 Authoring tools",
            "page": 82
        },
        "11.8.0": {
            "title": "11.8.0 General (informative)",
            "page": 82
        },
        "11.8.1": {
            "title": "11.8.1 Content technology",
            "page": 82
        },
        "11.8.2": {
            "title": "11.8.2 Accessible content creation",
            "page": 82
        },
        "11.8.3": {
            "title": "11.8.3 Preservation of accessibility information in transformations",
            "page": 82
        },
        "11.8.4": {
            "title": "11.8.4 Repair assistance",
            "page": 83
        },
        "11.8.5": {
            "title": "11.8.5 Templates",
            "page": 83
        },
        "12": {
            "title": "12 Documentation and support services",
            "page": 84
        },
        "12.1": {
            "title": "12.1 Product documentation",
            "page": 84
        },
        "12.1.1": {
            "title": "12.1.1 Accessibility and compatibility features",
            "page": 84
        },
        "12.1.2": {
            "title": "12.1.2 Accessible documentation",
            "page": 84
        },
        "12.2": {
            "title": "12.2 Support services",
            "page": 84
        },
        "12.2.1": {
            "title": "12.2.1 General (informative)",
            "page": 84
        },
        "12.2.2": {
            "title": "12.2.2 Information on accessibility and compatibility features",
            "page": 84
        },
        "12.2.3": {
            "title": "12.2.3 Effective communication",
            "page": 85
        },
        "12.2.4": {
            "title": "12.2.4 Accessible documentation",
            "page": 85
        },
        "13": {
            "title": "13 ICT providing relay or emergency service access",
            "page": 86
        },
        "13.1": {
            "title": "13.1 Relay services requirements",
            "page": 86
        },
        "13.1.1": {
            "title": "13.1.1 General (informative)",
            "page": 86
        },
        "13.1.2": {
            "title": "13.1.2 Text relay services",
            "page": 86
        },
        "13.1.3": {
            "title": "13.1.3 Sign relay services",
            "page": 86
        },
        "13.1.4": {
            "title": "13.1.4 Lip-reading relay services",
            "page": 86
        },
        "13.1.5": {
            "title": "13.1.5 Captioned telephony services",
            "page": 86
        },
        "13.1.6": {
            "title": "13.1.6 Speech to speech relay services",
            "page": 86
        },
        "13.2": {
            "title": "13.2 Access to relay services",
            "page": 86
        },
        "13.3": {
            "title": "13.3 Access to emergency services",
            "page": 87
        },
        "14": {
            "title": "14 Conformance",
            "page": 88
        },
        "Annex A": {
            "title": "Annex A (informative): Relationship between the present document and the essential requirements of Directive 2016/2102",
            "page": 89
        },
        "Annex B": {
            "title": "Annex B (informative): Relationship between requirements and functional performance statements",
            "page": 105
        },
        "B.1": {
            "title": "B.1 Relationships between clauses 5 to 13 and the functional performance statements",
            "page": 105
        },
        "B.2": {
            "title": "B.2 Interpretation of Table B.2",
            "page": 113
        },
        "B.2.0": {
            "title": "B.2.0 General",
            "page": 113
        },
        "B.2.1": {
            "title": "B.2.1 Example",
            "page": 113
        },
        "B.2.1.1": {
            "title": "B.2.1.1 Step 1",
            "page": 113
        },
        "B.2.1.2": {
            "title": "B.2.1.2 Step 2",
            "page": 113
        },
        "B.2.1.3": {
            "title": "B.2.1.3 Step 3",
            "page": 114
        },
        "B.2.1.4": {
            "title": "B.2.1.4 Step 4",
            "page": 114
        },
        "Annex C": {
            "title": "Annex C (normative): Determination of conformance",
            "page": 115
        },
        "C.1": {
            "title": "C.1 Introduction",
            "page": 115
        },
        "C.2": {
            "title": "C.2 Empty clause",
            "page": 115
        },
        "C.3": {
            "title": "C.3 Empty clause",
            "page": 115
        },
        "C.4": {
            "title": "C.4 Functional performance",
            "page": 115
        },
        "C.5": {
            "title": "C.5 Generic requirements",
            "page": 115
        },
        "C.5.1": {
            "title": "C.5.1 Closed functionality",
            "page": 115
        },
        "C.5.1.1": {
            "title": "C.5.1.1 Introduction",
            "page": 115
        },
        "C.5.1.2": {
            "title": "C.5.1.2 General",
            "page": 115
        },
        "C.5.1.2.1": {
            "title": "C.5.1.2.1 Closed functionality",
            "page": 115
        },
        "C.5.1.2.2": {
            "title": "C.5.1.2.2 Assistive technology",
            "page": 115
        },
        "C.5.1.3": {
            "title": "C.5.1.3 Non-visual access",
            "page": 116
        },
        "C.5.1.3.1": {
            "title": "C.5.1.3.1 Audio output of visual information",
            "page": 116
        },
        "C.5.1.3.2": {
            "title": "C.5.1.3.2 Auditory output delivery including speech",
            "page": 116
        },
        "C.5.1.3.3": {
            "title": "C.5.1.3.3 Auditory output correlation",
            "page": 116
        },
        "C.5.1.3.4": {
            "title": "C.5.1.3.4 Speech output user control",
            "page": 116
        },
        "C.5.1.3.5": {
            "title": "C.5.1.3.5 Speech output automatic interruption",
            "page": 116
        },
        "C.5.1.3.6": {
            "title": "C.5.1.3.6 Speech output for non-text content",
            "page": 117
        },
        "C.5.1.3.7": {
            "title": "C.5.1.3.7 Speech output for video information",
            "page": 117
        },
        "C.5.1.3.8": {
            "title": "C.5.1.3.8 Masked entry",
            "page": 117
        },
        "C.5.1.3.9": {
            "title": "C.5.1.3.9 Private access to personal data",
            "page": 117
        },
        "C.5.1.3.10": {
            "title": "C.5.1.3.10 Non-interfering audio output",
            "page": 117
        },
        "C.5.1.3.11": {
            "title": "C.5.1.3.11 Private listening volume",
            "page": 118
        },
        "C.5.1.3.12": {
            "title": "C.5.1.3.12 Speaker volume",
            "page": 118
        },
        "C.5.1.3.13": {
            "title": "C.5.1.3.13 Volume reset",
            "page": 118
        },
        "C.5.1.3.14": {
            "title": "C.5.1.3.14 Spoken languages",
            "page": 118
        },
        "C.5.1.3.15": {
            "title": "C.5.1.3.15 Non-visual error identification",
            "page": 118
        },
        "C.5.1.3.16": {
            "title": "C.5.1.3.16 Receipts, tickets and transactional outputs",
            "page": 119
        },
        "C.5.1.4": {
            "title": "C.5.1.4 Functionality closed to text enlargement",
            "page": 119
        },
        "C.5.1.5": {
            "title": "C.5.1.5 Visual output for auditory information",
            "page": 119
        },
        "C.5.1.6": {
            "title": "C.5.1.6 Operation without keyboard interface",
            "page": 119
        },
        "C.5.1.6.1": {
            "title": "C.5.1.6.1 Closed functionality",
            "page": 119
        },
        "C.5.1.6.2": {
            "title": "C.5.1.6.2 Input focus",
            "page": 119
        },
        "C.5.1.7": {
            "title": "C.5.1.7 Access without speech",
            "page": 120
        },
        "C.5.2": {
            "title": "C.5.2 Activation of accessibility features",
            "page": 120
        },
        "C.5.3": {
            "title": "C.5.3 Biometrics",
            "page": 120
        },
        "C.5.4": {
            "title": "C.5.4 Preservation of accessibility information during conversion",
            "page": 120
        },
        "C.5.5": {
            "title": "C.5.5 Operable parts",
            "page": 120
        },
        "C.5.5.1": {
            "title": "C.5.5.1 Means of operation",
            "page": 120
        },
        "C.5.5.2": {
            "title": "C.5.5.2 Operable part discernibility",
            "page": 121
        },
        "C.5.6": {
            "title": "C.5.6 Locking or toggle controls",
            "page": 121
        },
        "C.5.6.1": {
            "title": "C.5.6.1 Tactile or auditory status",
            "page": 121
        },
        "C.5.6.2": {
            "title": "C.5.6.2 Visual status",
            "page": 121
        },
        "C.5.7": {
            "title": "C.5.7 Key repeat",
            "page": 121
        },
        "C.5.8": {
            "title": "C.5.8 Double-strike key acceptance",
            "page": 121
        },
        "C.5.9": {
            "title": "C.5.9 Simultaneous user actions",
            "page": 122
        },
        "C.6": {
            "title": "C.6 ICT with two-way voice communication",
            "page": 122
        },
        "C.6.1": {
            "title": "C.6.1 Audio bandwidth for speech",
            "page": 122
        },
        "C.6.2": {
            "title": "C.6.2 Real-Time Text (RTT) functionality",
            "page": 122
        },
        "C.6.2.1": {
            "title": "C.6.2.1 RTT provision",
            "page": 122
        },
        "C.6.2.1.1": {
            "title": "C.6.2.1.1 RTT communication",
            "page": 122
        },
        "C.6.2.1.2": {
            "title": "C.6.2.1.2 Concurrent voice and text",
            "page": 122
        },
        "C.6.2.2": {
            "title": "C.6.2.2 Display of RTT",
            "page": 123
        },
        "C.6.2.2.1": {
            "title": "C.6.2.2.1 Visually distinguishable display",
            "page": 123
        },
        "C.6.2.2.2": {
            "title": "C.6.2.2.2 Programmatically determinable send and receive direction",
            "page": 123
        },
        "C.6.2.2.3": {
            "title": "C.6.2.2.3 Speaker Identification",
            "page": 124
        },
        "C.6.2.2.4": {
            "title": "C.6.2.2.4 Visual indicator of audio with RTT",
            "page": 124
        },
        "C.6.2.4": {
            "title": "C.6.2.4 RTT responsiveness",
            "page": 126
        },
        "C.6.3": {
            "title": "C.6.3 Caller ID",
            "page": 126
        },
        "C.6.4": {
            "title": "C.6.4 Alternatives to voice-based services",
            "page": 126
        },
        "C.6.5": {
            "title": "C.6.5 Video communication",
            "page": 126
        },
        "C.6.5.1": {
            "title": "C.6.5.1 General",
            "page": 126
        },
        "C.6.5.2": {
            "title": "C.6.5.2 Resolution",
            "page": 126
        },
        "C.6.5.3": {
            "title": "C.6.5.3 Frame rate",
            "page": 127
        },
        "C.6.5.4": {
            "title": "C.6.5.4 Synchronization between audio and video",
            "page": 127
        },
        "C.6.5.5": {
            "title": "C.6.5.5 Visual indicator of audio with video",
            "page": 127
        },
        "C.6.5.6": {
            "title": "C.6.5.6 Speaker identification with video (sign language) communication",
            "page": 127
        },
        "C.6.6": {
            "title": "C.6.6 Alternatives to video-based services",
            "page": 127
        },
        "C.7": {
            "title": "C.7 ICT with video capabilities",
            "page": 128
        },
        "C.7.1": {
            "title": "C.7.1 Caption processing technology",
            "page": 128
        },
        "C.7.1.1": {
            "title": "C.7.1.1 Captioning playback",
            "page": 128
        },
        "C.7.1.2": {
            "title": "C.7.1.2 Captioning synchronization",
            "page": 128
        },
        "C.7.1.3": {
            "title": "C.7.1.3 Preservation of captioning",
            "page": 128
        },
        "C.7.1.4": {
            "title": "C.7.1.4 Captions characteristics",
            "page": 128
        },
        "C.7.1.5": {
            "title": "C.7.1.5 Spoken subtitles",
            "page": 129
        },
        "C.7.2": {
            "title": "C.7.2 Audio description technology",
            "page": 129
        },
        "C.7.2.1": {
            "title": "C.7.2.1 Audio description playback",
            "page": 129
        },
        "C.7.2.2": {
            "title": "C.7.2.2 Audio description synchronization",
            "page": 129
        },
        "C.7.2.3": {
            "title": "C.7.2.3 Preservation of audio description",
            "page": 129
        },
        "C.7.3": {
            "title": "C.7.3 User controls for captions and audio description",
            "page": 129
        },
        "C.8": {
            "title": "C.8 Hardware",
            "page": 130
        },
        "C.8.1": {
            "title": "C.8.1 General",
            "page": 130
        },
        "C.8.1.1": {
            "title": "C.8.1.1 Generic requirements",
            "page": 130
        },
        "C.8.1.2": {
            "title": "C.8.1.2 Standard connections",
            "page": 130
        },
        "C.8.1.3": {
            "title": "C.8.1.3 Colour",
            "page": 130
        },
        "C.8.2": {
            "title": "C.8.2 Hardware products with speech output",
            "page": 130
        },
        "C.8.2.1": {
            "title": "C.8.2.1 Speech volume gain",
            "page": 130
        },
        "C.8.2.1.1": {
            "title": "C.8.2.1.1 Speech volume range",
            "page": 130
        },
        "C.8.2.1.2": {
            "title": "C.8.2.1.2 Incremental volume control",
            "page": 130
        },
        "C.8.2.2": {
            "title": "C.8.2.2 Magnetic coupling",
            "page": 131
        },
        "C.8.2.2.1": {
            "title": "C.8.2.2.1 Fixed-line devices",
            "page": 131
        },
        "C.8.2.2.2": {
            "title": "C.8.2.2.2 Wireless communication devices",
            "page": 131
        },
        "C.8.3": {
            "title": "C.8.3 Stationary ICT",
            "page": 131
        },
        "C.8.3.0": {
            "title": "C.8.3.0 General",
            "page": 131
        },
        "C.8.3.1": {
            "title": "C.8.3.1 Forward or side reach",
            "page": 131
        },
        "C.8.3.2": {
            "title": "C.8.3.2 Forward reach",
            "page": 131
        },
        "C.8.3.2.1": {
            "title": "C.8.3.2.1 Unobstructed high forward reach",
            "page": 131
        },
        "C.8.3.2.2": {
            "title": "C.8.3.2.2 Unobstructed low forward reach",
            "page": 132
        },
        "C.8.3.2.3": {
            "title": "C.8.3.2.3 Obstructed forward reach",
            "page": 132
        },
        "C.8.3.2.3.1": {
            "title": "C.8.3.2.3.1 Clear space",
            "page": 132
        },
        "C.8.3.2.3.2": {
            "title": "C.8.3.2.3.2 Obstructed (< 510 mm) forward reach",
            "page": 132
        },
        "C.8.3.2.3.3": {
            "title": "C.8.3.2.3.3 Obstructed (< 635 mm) forward reach",
            "page": 132
        },
        "C.8.3.2.4": {
            "title": "C.8.3.2.4 Knee and toe clearance width",
            "page": 132
        },
        "C.8.3.2.5": {
            "title": "C.8.3.2.5 Toe clearance",
            "page": 133
        },
        "C.8.3.2.6": {
            "title": "C.8.3.2.6 Knee clearance",
            "page": 133
        },
        "C.8.3.3": {
            "title": "C.8.3.3 Side reach",
            "page": 134
        },
        "C.8.3.3.1": {
            "title": "C.8.3.3.1 Unobstructed high side reach",
            "page": 134
        },
        "C.8.3.3.2": {
            "title": "C.8.3.3.2 Unobstructed low side reach",
            "page": 135
        },
        "C.8.3.3.3": {
            "title": "C.8.3.3.3 Obstructed side reach",
            "page": 135
        },
        "C.8.3.3.3.1": {
            "title": "C.8.3.3.3.1 Obstructed (< 255 mm) side reach",
            "page": 135
        },
        "C.8.3.3.3.2": {
            "title": "C.8.3.3.3.2 Obstructed (< 610 mm) side reach",
            "page": 135
        },
        "C.8.3.4": {
            "title": "C.8.3.4 Clear floor or ground space",
            "page": 135
        },
        "C.8.3.4.1": {
            "title": "C.8.3.4.1 Change in level",
            "page": 135
        },
        "C.8.3.4.2": {
            "title": "C.8.3.4.2 Clear floor or ground space",
            "page": 135
        },
        "C.8.3.4.3": {
            "title": "C.8.3.4.3 Approach",
            "page": 136
        },
        "C.8.3.4.3.1": {
            "title": "C.8.3.4.3.1 General",
            "page": 136
        },
        "C.8.3.4.3.2": {
            "title": "C.8.3.4.3.2 Forward Approach",
            "page": 136
        },
        "C.8.3.4.3.3": {
            "title": "C.8.3.4.3.3 Parallel Approach",
            "page": 136
        },
        "C.8.3.5": {
            "title": "C.8.3.5 Visibility",
            "page": 136
        },
        "C.8.3.6": {
            "title": "C.8.3.6 Installation instructions",
            "page": 136
        },
        "C.8.4": {
            "title": "C.8.4 Mechanically operable parts",
            "page": 137
        },
        "C.8.4.1": {
            "title": "C.8.4.1 Numeric keys",
            "page": 137
        },
        "C.8.4.2": {
            "title": "C.8.4.2 Operation of mechanical parts",
            "page": 137
        },
        "C.8.4.2.1": {
            "title": "C.8.4.2.1 Means of operation of mechanical parts",
            "page": 137
        },
        "C.8.4.2.2": {
            "title": "C.8.4.2.2 Force of operation of mechanical parts",
            "page": 137
        },
        "C.8.4.3": {
            "title": "C.8.4.3 Keys, tickets and fare cards",
            "page": 137
        },
        "C.8.5": {
            "title": "C.8.5 Tactile indication of speech mode",
            "page": 137
        },
        "C.9": {
            "title": "C.9 Web",
            "page": 138
        },
        "C.9.0": {
            "title": "C.9.0 General (informative)",
            "page": 138
        },
        "C.9.1": {
            "title": "C.9.1 Perceivable",
            "page": 138
        },
        "C.9.1.1": {
            "title": "C.9.1.1 Text alternatives",
            "page": 138
        },
        "C.9.1.1.1": {
            "title": "C.9.1.1.1 Non-text content",
            "page": 138
        },
        "C.9.1.2": {
            "title": "C.9.1.2 Time-based media",
            "page": 138
        },
        "C.9.1.2.1": {
            "title": "C.9.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 138
        },
        "C.9.1.2.2": {
            "title": "C.9.1.2.2 Captions (pre-recorded)",
            "page": 138
        },
        "C.9.1.2.3": {
            "title": "C.9.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 138
        },
        "C.9.1.2.4": {
            "title": "C.9.1.2.4 Captions (live)",
            "page": 139
        },
        "C.9.1.2.5": {
            "title": "C.9.1.2.5 Audio description (pre-recorded)",
            "page": 139
        },
        "C.9.1.3": {
            "title": "C.9.1.3 Adaptable",
            "page": 139
        },
        "C.9.1.3.1": {
            "title": "C.9.1.3.1 Info and relationships",
            "page": 139
        },
        "C.9.1.3.2": {
            "title": "C.9.1.3.2 Meaningful sequence",
            "page": 139
        },
        "C.9.1.3.3": {
            "title": "C.9.1.3.3 Sensory characteristics",
            "page": 139
        },
        "C.9.1.3.4": {
            "title": "C.9.1.3.4 Orientation",
            "page": 140
        },
        "C.9.1.3.5": {
            "title": "C.9.1.3.5 Identify input purpose",
            "page": 140
        },
        "C.9.1.4": {
            "title": "C.9.1.4 Distinguishable",
            "page": 140
        },
        "C.9.1.4.1": {
            "title": "C.9.1.4.1 Use of colour",
            "page": 140
        },
        "C.9.1.4.2": {
            "title": "C.9.1.4.2 Audio control",
            "page": 140
        },
        "C.9.1.4.3": {
            "title": "C.9.1.4.3 Contrast (minimum)",
            "page": 140
        },
        "C.9.1.4.4": {
            "title": "C.9.1.4.4 Resize text",
            "page": 140
        },
        "C.9.1.4.5": {
            "title": "C.9.1.4.5 Images of text",
            "page": 141
        },
        "C.9.1.4.6": {
            "title": "C.9.1.4.6 Void",
            "page": 141
        },
        "C.9.1.4.7": {
            "title": "C.9.1.4.7 Void",
            "page": 141
        },
        "C.9.1.4.8": {
            "title": "C.9.1.4.8 Void",
            "page": 141
        },
        "C.9.1.4.9": {
            "title": "C.9.1.4.9 Void",
            "page": 141
        },
        "C.9.1.4.10": {
            "title": "C.9.1.4.10 Reflow",
            "page": 141
        },
        "C.9.1.4.11": {
            "title": "C.9.1.4.11 Non-text contrast",
            "page": 141
        },
        "C.9.1.4.12": {
            "title": "C.9.1.4.12 Text spacing",
            "page": 141
        },
        "C.9.1.4.13": {
            "title": "C.9.1.4.13 Content on hover or focus",
            "page": 141
        },
        "C.9.2": {
            "title": "C.9.2 Operable",
            "page": 142
        },
        "C.9.2.1": {
            "title": "C.9.2.1 Keyboard accessible",
            "page": 142
        },
        "C.9.2.1.1": {
            "title": "C.9.2.1.1 Keyboard",
            "page": 142
        },
        "C.9.2.1.2": {
            "title": "C.9.2.1.2 No keyboard trap",
            "page": 142
        },
        "C.9.2.1.3": {
            "title": "C.9.2.1.3 Void",
            "page": 142
        },
        "C.9.2.1.4": {
            "title": "C.9.2.1.4 Character key shortcuts",
            "page": 142
        },
        "C.9.2.2": {
            "title": "C.9.2.2 Enough time",
            "page": 142
        },
        "C.9.2.2.1": {
            "title": "C.9.2.2.1 Timing adjustable",
            "page": 142
        },
        "C.9.2.2.2": {
            "title": "C.9.2.2.2 Pause, stop, hide",
            "page": 142
        },
        "C.9.2.3": {
            "title": "C.9.2.3 Seizures and physical reactions",
            "page": 143
        },
        "C.9.2.3.1": {
            "title": "C.9.2.3.1 Three flashes or below threshold",
            "page": 143
        },
        "C.9.2.4": {
            "title": "C.9.2.4 Navigable",
            "page": 143
        },
        "C.9.2.4.1": {
            "title": "C.9.2.4.1 Bypass blocks",
            "page": 143
        },
        "C.9.2.4.2": {
            "title": "C.9.2.4.2 Page titled",
            "page": 143
        },
        "C.9.2.4.3": {
            "title": "C.9.2.4.3 Focus Order",
            "page": 143
        },
        "C.9.2.4.4": {
            "title": "C.9.2.4.4 Link purpose (in context)",
            "page": 143
        },
        "C.9.2.4.5": {
            "title": "C.9.2.4.5 Multiple ways",
            "page": 144
        },
        "C.9.2.4.6": {
            "title": "C.9.2.4.6 Headings and labels",
            "page": 144
        },
        "C.9.2.4.7": {
            "title": "C.9.2.4.7 Focus visible",
            "page": 144
        },
        "C.9.2.5": {
            "title": "C.9.2.5 Input modalities",
            "page": 144
        },
        "C.9.2.5.1": {
            "title": "C.9.2.5.1 Pointer gestures",
            "page": 144
        },
        "C.9.2.5.2": {
            "title": "C.9.2.5.2 Pointer cancellation",
            "page": 144
        },
        "C.9.2.5.3": {
            "title": "C.9.2.5.3 Label in name",
            "page": 145
        },
        "C.9.2.5.4": {
            "title": "C.9.2.5.4 Motion actuation",
            "page": 145
        },
        "C.9.3": {
            "title": "C.9.3 Understandable",
            "page": 145
        },
        "C.9.3.1": {
            "title": "C.9.3.1 Readable",
            "page": 145
        },
        "C.9.3.1.1": {
            "title": "C.9.3.1.1 Language of page",
            "page": 145
        },
        "C.9.3.1.2": {
            "title": "C.9.3.1.2 Language of parts",
            "page": 145
        },
        "C.9.3.2": {
            "title": "C.9.3.2 Predictable",
            "page": 145
        },
        "C.9.3.2.1": {
            "title": "C.9.3.2.1 On focus",
            "page": 145
        },
        "C.9.3.2.2": {
            "title": "C.9.3.2.2 On input",
            "page": 146
        },
        "C.9.3.2.3": {
            "title": "C.9.3.2.3 Consistent navigation",
            "page": 146
        },
        "C.9.3.2.4": {
            "title": "C.9.3.2.4 Consistent identification",
            "page": 146
        },
        "C.9.3.3": {
            "title": "C.9.3.3 Input assistance",
            "page": 146
        },
        "C.9.3.3.1": {
            "title": "C.9.3.3.1 Error identification",
            "page": 146
        },
        "C.9.3.3.2": {
            "title": "C.9.3.3.2 Labels or instructions",
            "page": 146
        },
        "C.9.3.3.3": {
            "title": "C.9.3.3.3 Error suggestion",
            "page": 146
        },
        "C.9.3.3.4": {
            "title": "C.9.3.3.4 Error prevention (legal, financial, data)",
            "page": 147
        },
        "C.9.4": {
            "title": "C.9.4 Robust",
            "page": 147
        },
        "C.9.4.1": {
            "title": "C.9.4.1 Compatible",
            "page": 147
        },
        "C.9.4.1.1": {
            "title": "C.9.4.1.1 Parsing",
            "page": 147
        },
        "C.9.4.1.2": {
            "title": "C.9.4.1.2 Name, role, value",
            "page": 147
        },
        "C.9.4.1.3": {
            "title": "C.9.4.1.3 Status messages",
            "page": 147
        },
        "C.9.5": {
            "title": "C.9.5 WCAG 2.1 AAA Success Criteria (informative)",
            "page": 147
        },
        "C.9.6": {
            "title": "C.9.6 WCAG 2.1 conformance requirements",
            "page": 148
        },
        "C.10": {
            "title": "C.10 Non-web documents",
            "page": 148
        },
        "C.10.0": {
            "title": "C.10.0 General (informative)",
            "page": 148
        },
        "C.10.1": {
            "title": "C.10.1 Perceivable",
            "page": 148
        },
        "C.10.1.1": {
            "title": "C.10.1.1 Text alternatives",
            "page": 148
        },
        "C.10.1.1.1": {
            "title": "C.10.1.1.1 Non-text content",
            "page": 148
        },
        "C.10.1.2": {
            "title": "C.10.1.2 Time-based media",
            "page": 148
        },
        "C.10.1.2.1": {
            "title": "C.10.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 148
        },
        "C.10.1.2.2": {
            "title": "C.10.1.2.2 Captions (pre-recorded)",
            "page": 149
        },
        "C.10.1.2.3": {
            "title": "C.10.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 149
        },
        "C.10.1.2.4": {
            "title": "C.10.1.2.4 Captions (live)",
            "page": 149
        },
        "C.10.1.2.5": {
            "title": "C.10.1.2.5 Audio description (pre-recorded)",
            "page": 149
        },
        "C.10.1.3": {
            "title": "C.10.1.3 Adaptable",
            "page": 149
        },
        "C.10.1.3.1": {
            "title": "C.10.1.3.1 Info and relationships",
            "page": 149
        },
        "C.10.1.3.2": {
            "title": "C.10.1.3.2 Meaningful sequence",
            "page": 150
        },
        "C.10.1.3.3": {
            "title": "C.10.1.3.3 Sensory characteristics",
            "page": 150
        },
        "C.10.1.3.4": {
            "title": "C.10.1.3.4 Orientation",
            "page": 150
        },
        "C.10.1.3.5": {
            "title": "C.10.1.3.5 Identify input purpose",
            "page": 150
        },
        "C.10.1.4": {
            "title": "C.10.1.4 Distinguishable",
            "page": 150
        },
        "C.10.1.4.1": {
            "title": "C.10.1.4.1 Use of colour",
            "page": 150
        },
        "C.10.1.4.2": {
            "title": "C.10.1.4.2 Audio control",
            "page": 151
        },
        "C.10.1.4.3": {
            "title": "C.10.1.4.3 Contrast (minimum)",
            "page": 151
        },
        "C.10.1.4.4": {
            "title": "C.10.1.4.4 Resize text",
            "page": 151
        },
        "C.10.1.4.5": {
            "title": "C.10.1.4.5 Images of text",
            "page": 151
        },
        "C.10.1.4.6": {
            "title": "C.10.1.4.6 Void",
            "page": 151
        },
        "C.10.1.4.7": {
            "title": "C.10.1.4.7 Void",
            "page": 151
        },
        "C.10.1.4.8": {
            "title": "C.10.1.4.8 Void",
            "page": 151
        },
        "C.10.1.4.9": {
            "title": "C.10.1.4.9 Void",
            "page": 151
        },
        "C.10.1.4.10": {
            "title": "C.10.1.4.10 Reflow",
            "page": 151
        },
        "C.10.1.4.11": {
            "title": "C.10.1.4.11 Non-text contrast",
            "page": 152
        },
        "C.10.1.4.12": {
            "title": "C.10.1.4.12 Text spacing",
            "page": 152
        },
        "C.10.1.4.13": {
            "title": "C.10.1.4.13 Content on hover or focus",
            "page": 152
        },
        "C.10.2": {
            "title": "C.10.2 Operable",
            "page": 152
        },
        "C.10.2.1": {
            "title": "C.10.2.1 Keyboard accessible",
            "page": 152
        },
        "C.10.2.1.1": {
            "title": "C.10.2.1.1 Keyboard",
            "page": 152
        },
        "C.10.2.1.2": {
            "title": "C.10.2.1.2 No keyboard trap",
            "page": 152
        },
        "C.10.2.1.3": {
            "title": "C.10.2.1.3 Void",
            "page": 152
        },
        "C.10.2.1.4": {
            "title": "C.10.2.1.4 Character key shortcuts",
            "page": 153
        },
        "C.10.2.2": {
            "title": "C.10.2.2 Enough time",
            "page": 153
        },
        "C.10.2.2.1": {
            "title": "C.10.2.2.1 Timing adjustable",
            "page": 153
        },
        "C.10.2.2.2": {
            "title": "C.10.2.2.2 Pause, stop, hide",
            "page": 153
        },
        "C.10.2.3": {
            "title": "C.10.2.3 Seizures and physical reactions",
            "page": 153
        },
        "C.10.2.3.1": {
            "title": "C.10.2.3.1 Three flashes or below threshold",
            "page": 153
        },
        "C.10.2.4": {
            "title": "C.10.2.4 Navigable",
            "page": 153
        },
        "C.10.2.4.1": {
            "title": "C.10.2.4.1 Void",
            "page": 153
        },
        "C.10.2.4.2": {
            "title": "C.10.2.4.2 Document titled",
            "page": 153
        },
        "C.10.2.4.3": {
            "title": "C.10.2.4.3 Focus order",
            "page": 154
        },
        "C.10.2.4.4": {
            "title": "C.10.2.4.4 Link purpose (in context)",
            "page": 154
        },
        "C.10.2.4.5": {
            "title": "C.10.2.4.5 Void",
            "page": 154
        },
        "C.10.2.4.6": {
            "title": "C.10.2.4.6 Headings and labels",
            "page": 154
        },
        "C.10.2.4.7": {
            "title": "C.10.2.4.7 Focus visible",
            "page": 154
        },
        "C.10.2.5": {
            "title": "C.10.2.5 Input modalities",
            "page": 154
        },
        "C.10.2.5.1": {
            "title": "C.10.2.5.1 Pointer gestures",
            "page": 154
        },
        "C.10.2.5.2": {
            "title": "C.10.2.5.2 Pointer cancellation",
            "page": 155
        },
        "C.10.2.5.3": {
            "title": "C.10.2.5.3 Label in name",
            "page": 155
        },
        "C.10.2.5.4": {
            "title": "C.10.2.5.4 Motion actuation",
            "page": 155
        },
        "C.10.3": {
            "title": "C.10.3 Understandable",
            "page": 155
        },
        "C.10.3.1": {
            "title": "C.10.3.1 Readable",
            "page": 155
        },
        "C.10.3.1.1": {
            "title": "C.10.3.1.1 Language of document",
            "page": 155
        },
        "C.10.3.1.2": {
            "title": "C.10.3.1.2 Language of parts",
            "page": 155
        },
        "C.10.3.2": {
            "title": "C.10.3.2 Predictable",
            "page": 156
        },
        "C.10.3.2.1": {
            "title": "C.10.3.2.1 On focus",
            "page": 156
        },
        "C.10.3.2.2": {
            "title": "C.10.3.2.2 On input",
            "page": 156
        },
        "C.10.3.2.3": {
            "title": "C.10.3.2.3 Void",
            "page": 156
        },
        "C.10.3.2.4": {
            "title": "C.10.3.2.4 Void",
            "page": 156
        },
        "C.10.3.3": {
            "title": "C.10.3.3 Input assistance",
            "page": 156
        },
        "C.10.3.3.1": {
            "title": "C.10.3.3.1 Error identification",
            "page": 156
        },
        "C.10.3.3.2": {
            "title": "C.10.3.3.2 Labels or instructions",
            "page": 156
        },
        "C.10.3.3.3": {
            "title": "C.10.3.3.3 Error suggestion",
            "page": 156
        },
        "C.10.3.3.4": {
            "title": "C.10.3.3.4 Error prevention (legal, financial, data)",
            "page": 157
        },
        "C.10.4": {
            "title": "C.10.4 Robust",
            "page": 157
        },
        "C.10.4.1": {
            "title": "C.10.4.1 Compatible",
            "page": 157
        },
        "C.10.4.1.1": {
            "title": "C.10.4.1.1 Parsing",
            "page": 157
        },
        "C.10.4.1.2": {
            "title": "C.10.4.1.2 Name, role, value",
            "page": 157
        },
        "C.10.4.1.3": {
            "title": "C.10.4.1.3 Status messages",
            "page": 157
        },
        "C.10.5": {
            "title": "C.10.5 Caption positioning",
            "page": 157
        },
        "C.10.6": {
            "title": "C.10.6 Audio description timing",
            "page": 157
        },
        "C.11": {
            "title": "C.11 Software",
            "page": 158
        },
        "C.11.0": {
            "title": "C.11.0 General",
            "page": 158
        },
        "C.11.1": {
            "title": "C.11.1 Perceivable",
            "page": 158
        },
        "C.11.1.1": {
            "title": "C.11.1.1 Text alternatives",
            "page": 158
        },
        "C.11.1.1.1": {
            "title": "C.11.1.1.1 Non-text content",
            "page": 158
        },
        "C.11.1.1.1.1": {
            "title": "C.11.1.1.1.1 Non-text content (screen reading supported open functionality)",
            "page": 158
        },
        "C.11.1.1.1.2": {
            "title": "C.11.1.1.1.2 Non-text content (closed functionality)",
            "page": 158
        },
        "C.11.1.2": {
            "title": "C.11.1.2 Time-based media",
            "page": 158
        },
        "C.11.1.2.1": {
            "title": "C.11.1.2.1 Audio-only and video-only (pre-recorded)",
            "page": 158
        },
        "C.11.1.2.1.1": {
            "title": "C.11.1.2.1.1 Audio-only and video-only (pre-recorded - open functionality)",
            "page": 158
        },
        "C.11.1.2.1.2": {
            "title": "C.11.1.2.1.2 Audio-only and video-only (pre-recorded - closed functionality)",
            "page": 159
        },
        "C.11.1.2.1.2.1": {
            "title": "C.11.1.2.1.2.1 Pre-recorded audio-only (closed functionality)",
            "page": 159
        },
        "C.11.1.2.1.2.2": {
            "title": "C.11.1.2.1.2.2 Pre-recorded video-only (closed functionality)",
            "page": 159
        },
        "C.11.1.2.2": {
            "title": "C.11.1.2.2 Captions (pre-recorded)",
            "page": 159
        },
        "C.11.1.2.3": {
            "title": "C.11.1.2.3 Audio description or media alternative (pre-recorded)",
            "page": 159
        },
        "C.11.1.2.3.1": {
            "title": "C.11.1.2.3.1 Audio description or media alternative (pre-recorded - open functionality)",
            "page": 159
        },
        "C.11.1.2.3.2": {
            "title": "C.11.1.2.3.2 Audio description or media alternative (pre-recorded - closed functionality)",
            "page": 160
        },
        "C.11.1.2.4": {
            "title": "C.11.1.2.4 Captions (live)",
            "page": 160
        },
        "C.11.1.2.5": {
            "title": "C.11.1.2.5 Audio description (pre-recorded)",
            "page": 160
        },
        "C.11.1.3": {
            "title": "C.11.1.3 Adaptable",
            "page": 160
        },
        "C.11.1.3.1": {
            "title": "C.11.1.3.1 Info and relationships",
            "page": 160
        },
        "C.11.1.3.1.1": {
            "title": "C.11.1.3.1.1 Info and relationships (open functionality)",
            "page": 160
        },
        "C.11.1.3.1.2": {
            "title": "C.11.1.3.1.2 Info and relationships (closed functionality)",
            "page": 160
        },
        "C.11.1.3.2": {
            "title": "C.11.1.3.2 Meaningful sequence",
            "page": 161
        },
        "C.11.1.3.2.1": {
            "title": "C.11.1.3.2.1 Meaningful sequence (open functionality)",
            "page": 161
        },
        "C.11.1.3.2.2": {
            "title": "C.11.1.3.2.2 Meaningful sequence (closed functionality)",
            "page": 161
        },
        "C.11.1.3.3": {
            "title": "C.11.1.3.3 Sensory characteristics",
            "page": 161
        },
        "C.11.1.3.4": {
            "title": "C.11.1.3.4 Orientation",
            "page": 161
        },
        "C.11.1.3.5": {
            "title": "C.11.1.3.5 Identify input purpose",
            "page": 161
        },
        "C.11.1.3.5.1": {
            "title": "C.11.1.3.5.1 Identify input purpose (open functionality)",
            "page": 161
        },
        "C.11.1.3.5.2": {
            "title": "C.11.1.3.5.2 Identify input purpose (closed functionality)",
            "page": 162
        },
        "C.11.1.4": {
            "title": "C.11.1.4 Distinguishable",
            "page": 162
        },
        "C.11.1.4.1": {
            "title": "C.11.1.4.1 Use of colour",
            "page": 162
        },
        "C.11.1.4.2": {
            "title": "C.11.1.4.2 Audio control",
            "page": 162
        },
        "C.11.1.4.3": {
            "title": "C.11.1.4.3 Contrast (minimum)",
            "page": 162
        },
        "C.11.1.4.4": {
            "title": "C.11.1.4.4 Resize text",
            "page": 162
        },
        "C.11.1.4.4.1": {
            "title": "C.11.1.4.4.1 Resize text (open functionality)",
            "page": 162
        },
        "C.11.1.4.4.2": {
            "title": "C.11.1.4.4.2 Resize text (closed functionality)",
            "page": 163
        },
        "C.11.1.4.5": {
            "title": "C.11.1.4.5 Images of text",
            "page": 163
        },
        "C.11.1.4.5.1": {
            "title": "C.11.1.4.5.1 Images of text (open functionality)",
            "page": 163
        },
        "C.11.1.4.5.2": {
            "title": "C.11.1.4.5.2 Images of text (closed functionality)",
            "page": 163
        },
        "C.11.1.4.6": {
            "title": "C.11.1.4.6 Void",
            "page": 163
        },
        "C.11.1.4.7": {
            "title": "C.11.1.4.7 Void",
            "page": 163
        },
        "C.11.1.4.8": {
            "title": "C.11.1.4.8 Void",
            "page": 163
        },
        "C.11.1.4.9": {
            "title": "C.11.1.4.9 Void",
            "page": 163
        },
        "C.11.1.4.10": {
            "title": "C.11.1.4.10 Reflow",
            "page": 164
        },
        "C.11.1.4.11": {
            "title": "C.11.1.4.11 Non-text contrast",
            "page": 164
        },
        "C.11.1.4.12": {
            "title": "C.11.1.4.12 Text spacing",
            "page": 164
        },
        "C.11.1.4.13": {
            "title": "C.11.1.4.13 Content on hover or focus",
            "page": 164
        },
        "C.11.2": {
            "title": "C.11.2 Operable",
            "page": 164
        },
        "C.11.2.1": {
            "title": "C.11.2.1 Keyboard accessible",
            "page": 164
        },
        "C.11.2.1.1": {
            "title": "C.11.2.1.1 Keyboard",
            "page": 164
        },
        "C.11.2.1.1.1": {
            "title": "C.11.2.1.1.1 Keyboard (open functionality)",
            "page": 164
        },
        "C.11.2.1.1.2": {
            "title": "C.11.2.1.1.2 Keyboard (closed functionality)",
            "page": 165
        },
        "C.11.2.1.2": {
            "title": "C.11.2.1.2 No keyboard trap",
            "page": 165
        },
        "C.11.2.1.3": {
            "title": "C.11.2.1.3 Void",
            "page": 165
        },
        "C.11.2.1.4": {
            "title": "C.11.2.1.4 Character key shortcuts",
            "page": 165
        },
        "C.11.2.1.4.1": {
            "title": "C.11.2.1.4.1 Character key shortcuts (open functionality)",
            "page": 165
        },
        "C.11.2.1.4.2": {
            "title": "C.11.2.1.4.2 Character key shortcuts (closed functionality)",
            "page": 165
        },
        "C.11.2.2": {
            "title": "C.11.2.2 Enough time",
            "page": 165
        },
        "C.11.2.2.1": {
            "title": "C.11.2.2.1 Timing adjustable",
            "page": 165
        },
        "C.11.2.2.2": {
            "title": "C.11.2.2.2 Pause, stop, hide",
            "page": 165
        },
        "C.11.2.3": {
            "title": "C.11.2.3 Seizures and physical reactions",
            "page": 166
        },
        "C.11.2.3.1": {
            "title": "C.11.2.3.1 Three flashes or below threshold",
            "page": 166
        },
        "C.11.2.4": {
            "title": "C.11.2.4 Navigable",
            "page": 166
        },
        "C.11.2.4.1": {
            "title": "C.11.2.4.1 Void",
            "page": 166
        },
        "C.11.2.4.2": {
            "title": "C.11.2.4.2 Void",
            "page": 166
        },
        "C.11.2.4.3": {
            "title": "C.11.2.4.3 Focus order",
            "page": 166
        },
        "C.11.2.4.4": {
            "title": "C.11.2.4.4 Link purpose (in context)",
            "page": 166
        },
        "C.11.2.4.5": {
            "title": "C.11.2.4.5 Void",
            "page": 166
        },
        "C.11.2.4.6": {
            "title": "C.11.2.4.6 Headings and labels",
            "page": 166
        },
        "C.11.2.4.7": {
            "title": "C.11.2.4.7 Focus visible",
            "page": 166
        },
        "C.11.2.5": {
            "title": "C.11.2.5 Input modalities",
            "page": 167
        },
        "C.11.2.5.1": {
            "title": "C.11.2.5.1 Pointer gestures",
            "page": 167
        },
        "C.11.2.5.2": {
            "title": "C.11.2.5.2 Pointer cancellation",
            "page": 167
        },
        "C.11.2.5.3": {
            "title": "C.11.2.5.3 Label in name",
            "page": 167
        },
        "C.11.2.5.3.1": {
            "title": "C.11.2.5.3.1 Label in name (open functionality)",
            "page": 167
        },
        "C.11.2.5.3.2": {
            "title": "C.11.2.5.3.2 Label in name (closed functionality)",
            "page": 167
        },
        "C.11.2.5.4": {
            "title": "C.11.2.5.4 Motion actuation",
            "page": 167
        },
        "C.11.3": {
            "title": "C.11.3 Understandable",
            "page": 168
        },
        "C.11.3.1": {
            "title": "C.11.3.1 Readable",
            "page": 168
        },
        "C.11.3.1.1": {
            "title": "C.11.3.1.1 Language of software",
            "page": 168
        },
        "C.11.3.1.1.1": {
            "title": "C.11.3.1.1.1 Language of software (open functionality)",
            "page": 168
        },
        "C.11.3.1.1.2": {
            "title": "C.11.3.1.1.2 Language of software (closed functionality)",
            "page": 168
        },
        "C.11.3.1.2": {
            "title": "C.11.3.1.2 Void",
            "page": 168
        },
        "C.11.3.2": {
            "title": "C.11.3.2 Predictable",
            "page": 168
        },
        "C.11.3.2.1": {
            "title": "C.11.3.2.1 On focus",
            "page": 168
        },
        "C.11.3.2.2": {
            "title": "C.11.3.2.2 On input",
            "page": 168
        },
        "C.11.3.2.3": {
            "title": "C.11.3.2.3 Void",
            "page": 169
        },
        "C.11.3.2.4": {
            "title": "C.11.3.2.4 Void",
            "page": 169
        },
        "C.11.3.3": {
            "title": "C.11.3.3 Input assistance",
            "page": 169
        },
        "C.11.3.3.1": {
            "title": "C.11.3.3.1 Error identification",
            "page": 169
        },
        "C.11.3.3.1.1": {
            "title": "C.11.3.3.1.1 Error identification (open functionality)",
            "page": 169
        },
        "C.11.3.3.1.2": {
            "title": "C.11.3.3.1.2 Error Identification (closed functionality)",
            "page": 169
        },
        "C.11.3.3.2": {
            "title": "C.11.3.3.2 Labels or instructions",
            "page": 169
        },
        "C.11.3.3.3": {
            "title": "C.11.3.3.3 Error suggestion",
            "page": 169
        },
        "C.11.3.3.4": {
            "title": "C.11.3.3.4 Error prevention (legal, financial, data)",
            "page": 169
        },
        "C.11.4": {
            "title": "C.11.4 Robust",
            "page": 170
        },
        "C.11.4.1": {
            "title": "C.11.4.1 Compatible",
            "page": 170
        },
        "C.11.4.1.1": {
            "title": "C.11.4.1.1 Parsing",
            "page": 170
        },
        "C.11.4.1.1.1": {
            "title": "C.11.4.1.1.1 Parsing (open functionality)",
            "page": 170
        },
        "C.11.4.1.1.2": {
            "title": "C.11.4.1.1.2 Parsing (closed functionality)",
            "page": 170
        },
        "C.11.4.1.2": {
            "title": "C.11.4.1.2 Name, role, value",
            "page": 170
        },
        "C.11.4.1.2.1": {
            "title": "C.11.4.1.2.1 Name, role, value (open functionality)",
            "page": 170
        },
        "C.11.4.1.2.2": {
            "title": "C.11.4.1.2.2 Name, role, value (closed functionality)",
            "page": 170
        },
        "C.11.4.1.3": {
            "title": "C.11.4.1.3 Status messages",
            "page": 170
        },
        "C.11.4.1.3.1": {
            "title": "C.11.4.1.3.1 Status messages (open functionality)",
            "page": 170
        },
        "C.11.4.1.3.2": {
            "title": "C.11.4.1.3.2 Status messages (closed functionality)",
            "page": 170
        },
        "C.11.5": {
            "title": "C.11.5 Interoperability with assistive technology",
            "page": 171
        },
        "C.11.5.1": {
            "title": "C.11.5.1 Closed functionality",
            "page": 171
        },
        "C.11.5.2": {
            "title": "C.11.5.2 Accessibility services",
            "page": 171
        },
        "C.11.5.2.1": {
            "title": "C.11.5.2.1 Platform accessibility service support for software that provides a user interface",
            "page": 171
        },
        "C.11.5.2.2": {
            "title": "C.11.5.2.2 Platform accessibility service support for assistive technologies",
            "page": 171
        },
        "C.11.5.2.3": {
            "title": "C.11.5.2.3 Use of accessibility services",
            "page": 171
        },
        "C.11.5.2.4": {
            "title": "C.11.5.2.4 Assistive technology",
            "page": 171
        },
        "C.11.5.2.5": {
            "title": "C.11.5.2.5 Object information",
            "page": 172
        },
        "C.11.5.2.6": {
            "title": "C.11.5.2.6 Row, column, and headers",
            "page": 172
        },
        "C.11.5.2.7": {
            "title": "C.11.5.2.7 Values",
            "page": 172
        },
        "C.11.5.2.8": {
            "title": "C.11.5.2.8 Label relationships",
            "page": 173
        },
        "C.11.5.2.9": {
            "title": "C.11.5.2.9 Parent-child relationships",
            "page": 173
        },
        "C.11.5.2.10": {
            "title": "C.11.5.2.10 Text",
            "page": 173
        },
        "C.11.5.2.11": {
            "title": "C.11.5.2.11 List of available actions",
            "page": 174
        },
        "C.11.5.2.12": {
            "title": "C.11.5.2.12 Execution of available actions",
            "page": 174
        },
        "C.11.5.2.13": {
            "title": "C.11.5.2.13 Tracking of focus and selection attributes",
            "page": 174
        },
        "C.11.5.2.14": {
            "title": "C.11.5.2.14 Modification of focus and selection attributes",
            "page": 174
        },
        "C.11.5.2.15": {
            "title": "C.11.5.2.15 Change notification",
            "page": 175
        },
        "C.11.5.2.16": {
            "title": "C.11.5.2.16 Modifications of states and properties",
            "page": 175
        },
        "C.11.5.2.17": {
            "title": "C.11.5.2.17 Modifications of values and text",
            "page": 175
        },
        "C.11.6": {
            "title": "C.11.6 Documented accessibility usage",
            "page": 176
        },
        "C.11.6.1": {
            "title": "C.11.6.1 User control of accessibility features",
            "page": 176
        },
        "C.11.6.2": {
            "title": "C.11.6.2 No disruption of accessibility features",
            "page": 176
        },
        "C.11.7": {
            "title": "C.11.7 User preferences",
            "page": 176
        },
        "C.11.8": {
            "title": "C.11.8 Authoring tools",
            "page": 176
        },
        "C.11.8.1": {
            "title": "C.11.8.1 Content technology",
            "page": 176
        },
        "C.11.8.2": {
            "title": "C.11.8.2 Accessible content creation",
            "page": 177
        },
        "C.11.8.3": {
            "title": "C.11.8.3 Preservation of accessibility information in transformations",
            "page": 177
        },
        "C.11.8.4": {
            "title": "C.11.8.4 Repair assistance",
            "page": 177
        },
        "C.11.8.5": {
            "title": "C.11.8.5 Templates",
            "page": 177
        },
        "C.12": {
            "title": "C.12 Documentation and support services",
            "page": 178
        },
        "C.12.1": {
            "title": "C.12.1 Product documentation",
            "page": 178
        },
        "C.12.1.1": {
            "title": "C.12.1.1 Accessibility and compatibility features",
            "page": 178
        },
        "C.12.1.2": {
            "title": "C.12.1.2 Accessible documentation",
            "page": 178
        },
        "C.12.2": {
            "title": "C.12.2 Support services",
            "page": 178
        },
        "C.12.2.1": {
            "title": "C.12.2.1 General",
            "page": 178
        },
        "C.12.2.2": {
            "title": "C.12.2.2 Information on accessibility and compatibility features",
            "page": 178
        },
        "C.12.2.3": {
            "title": "C.12.2.3 Effective communication",
            "page": 178
        },
        "C.12.2.4": {
            "title": "C.12.2.4 Accessible documentation",
            "page": 179
        },
        "C.13": {
            "title": "C.13 ICT providing relay or emergency service access",
            "page": 179
        },
        "C.13.1": {
            "title": "C.13.1 Relay service requirements",
            "page": 179
        },
        "C.13.1.1": {
            "title": "C.13.1.1 General",
            "page": 179
        },
        "C.13.1.2": {
            "title": "C.13.1.2 Text relay services",
            "page": 179
        },
        "C.13.1.3": {
            "title": "C.13.1.3 Sign relay services",
            "page": 179
        },
        "C.13.1.4": {
            "title": "C.13.1.4 Lip-reading relay services",
            "page": 179
        },
        "C.13.1.5": {
            "title": "C.13.1.5 Captioned telephony services",
            "page": 179
        },
        "C.13.1.6": {
            "title": "C.13.1.6 Speech to speech relay services",
            "page": 180
        },
        "C.13.2": {
            "title": "C.13.2 Access to relay services",
            "page": 180
        },
        "C.13.3": {
            "title": "C.13.3 Access to emergency services",
            "page": 180
        },
        "Annex D": {
            "title": "Annex D (informative): Further resources for cognitive accessibility",
            "page": 181
        },
        "Annex E": {
            "title": "Annex E (informative): Guidance for users of the present document",
            "page": 182
        },
        "E.1": {
            "title": "E.1 Introduction",
            "page": 182
        },
        "E.2": {
            "title": "E.2 Overview",
            "page": 182
        },
        "E.3": {
            "title": "E.3 Clause 4",
            "page": 183
        },
        "E.4": {
            "title": "E.4 How to use the standard",
            "page": 183
        },
        "E.4.1": {
            "title": "E.4.1 Self scoping requirements",
            "page": 183
        },
        "E.4.2": {
            "title": "E.4.2 Connection between requirements and functional performance statements",
            "page": 183
        },
        "E.5": {
            "title": "E.5 The European Web Accessibility Directive [i.28]",
            "page": 184
        },
        "E.6": {
            "title": "E.6 Annex D: Further resources for cognitive accessibility",
            "page": 184
        },
        "Annex F": {
            "title": "Annex F (informative): Change history",
            "page": 185
        }
    }
};
export default en301549;
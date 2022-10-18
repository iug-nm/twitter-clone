export function sanitize(input) {
    let regex = '';
    const xss = [
        //escape the / character for later in the regex
        '<script>',
        '<Script>',
        '<iframe',
        '<Iframe',
        '<img>',
        '<Img>',
        '<img',
        '<Img',
        '<a>',
        '<A>',
        'onError=',
        'onerror=',
        'onError =',
        'onerror =',
        '</script>',
        '</Script>',
        '</iframe>',
        '</Iframe>',
        '</img>',
        '</Img>',
        '</a>',
        '</A>',
        '/>',
    ]
    
    xss.forEach((e, i) => {
            regex += e;
            if (i !== xss.length - 1) {
                regex += '|';
            }
    });

    regex = new RegExp('/'+regex+'/', "gi");
    return input.replace(regex, '$E4F2');
}

function randomCharacter() {
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
    return alphabet[(Math.floor(Math.random() * 25))];
}

export function randomId() {
    let date = Date.now();
    let number = Math.random();
    date = Math.floor(date * number).toString();

    for (let i = 0; i < date.length; i ++) {
        if ((Math.floor(Math.random() * 7) === 1)) {
            // split the string with i as an index, and add a '-' inbetween them
            date = date.replace(date.charAt(i), randomCharacter());
        }
    }
    return date;
}
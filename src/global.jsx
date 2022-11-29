export const sanitize = (input) => {
    let regex = '';
    const xss = [
        //escape the / character for later in the regex
        '<script>',
        '<Script>',
        '<iframe>',
        '<Iframe>',
        '<iframe',
        '<IFrame',
        '<a>',
        '<A>',
        '<a',
        '<A',
        'onError=',
        'onerror=',
        'onError =',
        'onerror =',
        '</script>',
        '</Script>',
        '</iframe>',
        '</Iframe>',
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
    return input.replace(regex, '[]');
}

const randomCharacter = () => {
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
    return alphabet[Math.floor(Math.random() * 25)];
}

export const randomId = () => {
    //approx 600.000.000.000.000.000.000.000.000 of possibilities
    const IDlength = 27;
    let identifier = Date.now() * 13
    let number = Math.random() * 13;
    identifier = Math.floor(identifier * number).toString();

    //if the id is either not long enough or too long, fill it with random numbers or truncate it
    if (identifier.length < IDlength) {
        let missing = IDlength - identifier.length;
        let char = '';

        //looping missing chars
        for (let i = 0; i < missing; i++) {
                char += Math.floor(Math.random() * 9);
        }
        identifier = (identifier + char);
    } else if (identifier.length > IDlength) {
        identifier += identifier.substr(0, IDlength);
    }

    for (let i = 0; i < identifier.length; i ++) {
        //for each chars, randomize it to be a letter, an uppercased letter or a number
        if ((Math.floor(Math.random() * 3) === 1)) {
            if ((Math.floor(Math.random() * 4) === 1)) {
                identifier = identifier.replace(identifier.charAt(i), randomCharacter().toUpperCase());
            } else {
                identifier = identifier.replace(identifier.charAt(i), randomCharacter());
            }
        }
    }

    //inserting a '-' after every element of they array (but replacing the last insert with blank)
    let res = '';
    identifier.match(/.{1,9}/g).forEach((e) => {
        res += e + '-';
    });
    return res.replace(/.$/, '');

    // Testing the function
    // for (let i = 0; i < 1000000; i++) {
    //     let random = randomId(27);
    //     if (test_array.find(e => e === random) !== undefined) {
    //         console.error(random);
    //     } else {
    //         test_array.push(random);
    //     }
    //     console.log(i + ' ' + test_array[i]);
    // }
}

export const JSONfind = (data, target, value) => {
    for (let i in data) {
        if (data[i][target].indexOf(value) > - 1) {
            return data[i];
        }
    }
}

export const timeformat = (time)  => {
    let current_time = new Date();
    let post_time = new Date(Date.parse(time));
    let difference = current_time - post_time
    var res;

    if (difference < 1000) {
        res = `just now`;
    } else if (difference > 1000 && difference < 60000) { //second
        res = Math.floor(difference / 1000) + 's';
    } else if (difference < 3600000) { //minute
        res = Math.floor(difference / 1000 / 60) + 'm';
    } else if (difference < 86400000) { //hour
        res = Math.floor(difference / 1000 / 60 / 60) + 'h';
    } else if (difference < 2592000000) { //day
        res = Math.floor(difference / 1000 / 60 / 60 / 24) + 'j';
    } else if (difference > 31104000000) { //year
        res = Math.floor(difference / 1000 / 60 / 60 / 24 / 365) + 'a';
    }
    return res;
}

export const shorten = (number) => {
    number = number.toString().replace(/[^0-9.]/g, '');
    if (number < 1000) {
        return number;
    }

    let si = [
        {v: 1E3, s: "k"},
        {v: 1E6, s: "m"},
        {v: 1E9, s: "b"},
    ];
    
    let index;
    for (index = si.length - 1; index > 0; index--) {
        if (number >= si[index].v) {
            break;
        }
    }
    return (number / si[index].v).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
}

export const href = (url, target) => {
    let res;
    if (!url) {
        res = target.replace('@', '');
    } else if (!/^(http|https):\/\/www./.test(target)) {
        res = 'https://'+target;
    } else {
        res = target;
    }
    return res;
}

export const wrap = (content) => {
    let url = false;
    const reg = [
        /(?:^|[^a-zA-Z0-9_@])(@)(?!\.)([a-zA-Z0-9_.]{1,15})(?:\b(?!@)|$)/g, //@
        /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi, //http / s
        /(^|\s)#(\w*[a-zA-Z]+\w{2,50})/g, //#
    ];

    reg.forEach((e) => {
        let res = content.match(e);
        if (res != null) {
            res.forEach((elem) => {
                if (reg[1].test(elem)) {
                    url = true;
                } else {
                    url = false;
                }

                content = content.split(elem);
                content = content[0]
                            + " <a "
                            + (url ? "target='_blank'" : '')
                            + "href='" + href(url, elem)
                            + "' class='redirection " + ( url ? "link" : "mention" ) + "'>" 
                            + elem.replace(/^(http|https):\/\/www./, '')
                            + "</a>"
                            + content[1];
            });
        }
    });
    return (
        <div dangerouslySetInnerHTML={{__html:content}}></div>
    )
}
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
        '<img>',
        '<Img>',
        '<img',
        '<Img',
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
    return input.replace(regex, '[]');
}

const randomCharacter = () => {
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
    return alphabet[(Math.floor(Math.random() * 25))];
}

export const randomId = () => {
    let date = Date.now();
    let number = Math.random();
    date = Math.floor(date * number).toString();

    for (let i = 0; i < date.length; i ++) {
        if ((Math.floor(Math.random() * 3) === 1)) {
            if ((Math.floor(Math.random() * 4) === 1)) {
                date = date.replace(date.charAt(i), randomCharacter().toUpperCase());
            } else {
                date = date.replace(date.charAt(i), randomCharacter());
            }
        }
    }
    return date;
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

    if (difference > 1000 && difference < 60000) { //second
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
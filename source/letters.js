'use strict';

function letters(str, flag) {
    if (flag === undefined) {
        // удаляет все повторяющиеся символы
        return str.split('').filter(function (x, n, s) {
            return s.indexOf(x) === s.lastIndexOf(x)
        }).join('');
    }

    if (flag) {
        // удаляет повторяющиеся символы, оставляет первый
        return str.split('').filter(function (x, n, s) {
            return s.indexOf(x) === n
        }).join('');
    } else {
        // удаляет повторяющиеся символы, оставляет последний
        return str.replace(/(.)(?=.*\1)/g, '');
    }
}
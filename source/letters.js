'use strict';

function letters(str, flag) {
    if (flag === undefined) {
        // удаляет все повторяющиеся символы
        return str.split('').filter(function (symbol, curPos, array) {
            return array.indexOf(symbol) === array.lastIndexOf(symbol)
        }).join('');
    }

    if (flag) {
        // удаляет повторяющиеся символы, оставляет первый
        return str.split('').filter(function (symbol, curPos, array) {
            return array.indexOf(symbol) === curPos
        }).join('');
    } else {
        // удаляет повторяющиеся символы, оставляет последний
        return str.replace(/(.)(?=.*\1)/g, '');
    }
}
;(function ($) {
    function textToBinary(text) {
        return text.split('').map((txt) => txt.charCodeAt(0).toString(2)).join(' ');
    }

    function binaryToText(binary) {
        return binary.split(' ').map((bin) => String.fromCharCode(parseInt(bin, 2))).join('');
    }

    $.textToBinary = textToBinary;
    $.binaryToText = binaryToText;
})(this);
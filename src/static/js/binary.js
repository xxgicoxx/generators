;(function ($) {
    function textToBinary(text) {
        let result = '';

        for (var i = 0; i < text.length; i++) {
            result += text[i].charCodeAt(0).toString(2) + " ";
        }

        console.log(result);
        return result;
    }

    function binaryToText(binary) {
        var result = '';

        binary.split(' ').map(function(bin) {
            result += String.fromCharCode(parseInt(bin, 2));
        });

        return result;
    }

    $.textToBinary = textToBinary;
    $.binaryToText = binaryToText;
})(this);
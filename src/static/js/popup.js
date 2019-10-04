document.addEventListener('DOMContentLoaded', function() {
    btnGenerateApiKey.addEventListener('click', function() {
        generateApiKey();
    });

    btnGenerateColor.addEventListener('click', function() {
        checkColor();
    });

    txtColor.addEventListener('change', function() {
        getColor();
    });

    btnGenerateAscii.addEventListener('click', function() {
        hex2ascii();
    });

    btnGenerateMd5.addEventListener('click', function() {
        text2Md5();
    });

    btnGenerateBcrypt.addEventListener('click', function() {
        text2Bcrypt();
    });

    btnGenerateBinary.addEventListener('click', function() {
        text2Binary();
    });

    btnGenerateBinaryText.addEventListener('click', function() {
        binary2Text();
    });

    btnGenerateShortUrl.addEventListener('click', function() {
        shortUrl();
    });
});

generateApiKey = () => {
    txtApiKey.value = apikey();
    document.getElementById("txtApiKey").select();
    document.execCommand('copy');
}

checkColor = () => {
    if(txtColorHex.value.startsWith('#')) {
        txtColor.value = txtColorHex.value;
    } else {
        txtColor.value = `#${txtColorHex.value}`;
    }
}

getColor = () => {
    txtColorHex.value = txtColor.value;
    document.getElementById("txtColorHex").select();
    document.execCommand('copy');
}

hex2ascii = () => {    
    txtAscii.value = ascii(txtHex.value);
    document.getElementById("txtAscii").select();
    document.execCommand('copy');
}

text2Md5 = () => {    
    txtMd5.value = md5(txtRawMd5.value);
    document.getElementById("txtMd5").select();
    document.execCommand('copy');
}

text2Bcrypt = () => {
    txtBcrypt.value = dcodeIO.bcrypt.hashSync(txtRawBcrypt.value, parseInt(txtRoundsBcrypt.value) || 12);
    document.getElementById("txtBcrypt").select();
    document.execCommand('copy');
}

text2Binary = () => {
    txtBinary.value = textToBinary(txtRawBinary.value);
    document.getElementById("txtBinary").select();
    document.execCommand('copy');
}

binary2Text = () => {
    txtBinaryText.value = binaryToText(txtRawBinaryText.value);
    document.getElementById("txtBinaryText").select();
    document.execCommand('copy');
}

shortUrl = () => {
    const request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === 4) {
            if(request.status === 200) { 
                txtShortUrl.value = request.responseText;
                document.getElementById("txtShortUrl").select();
                document.execCommand('copy');
            }
        }
    }

    request.open('GET', `https://is.gd/create.php?format=simple&url=${txtUrl.value}`);    
    request.send();
}
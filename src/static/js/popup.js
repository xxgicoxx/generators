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

generateApiKey = async () => {
    txtApiKey.value = apikey();

    await copyTextToClipboard(txtApiKey.value);
}

checkColor = () => {
    txtColor.value = txtColorHex.value.startsWith('#') ? txtColorHex.value :  `#${txtColorHex.value}`;
}

getColor = async () => {
    txtColorHex.value = txtColor.value;

    await copyTextToClipboard(txtColorHex.value);
}

hex2ascii = async () => {    
    txtAscii.value = ascii(txtHex.value);

    await copyTextToClipboard(txtAscii.value);
}

text2Md5 = async () => {    
    txtMd5.value = md5(txtRawMd5.value);

    await copyTextToClipboard(txtMd5.value);
}

text2Bcrypt = async () => {
    txtBcrypt.value = dcodeIO.bcrypt.hashSync(txtRawBcrypt.value, parseInt(txtRoundsBcrypt.value) || 12);
    
    await copyTextToClipboard(txtBcrypt.value);
}

text2Binary = async () => {
    txtBinary.value = textToBinary(txtRawBinary.value);
   
    await copyTextToClipboard(txtBinary.value);
}

binary2Text = async () => {
    txtBinaryText.value = binaryToText(txtRawBinaryText.value);

    await copyTextToClipboard(txtBinaryText.value);
}

shortUrl = async () => {
    const request = new XMLHttpRequest();
    
    request.onreadystatechange = async function() {
        if(request.readyState === 4) {
            if(request.status === 200) { 
                txtShortUrl.value = request.responseText;

                await copyTextToClipboard(txtShortUrl.value);
            }
        }
    }

    request.open('GET', `https://is.gd/create.php?format=simple&url=${txtUrl.value}`);    
    request.send();
}

copyTextToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
}
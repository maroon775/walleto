
var BASE64_MARKER = ';base64,';
var LZMA64_MARKER = ';bxze64,';

function compressDataURI(dataURI, callback) {
    var base64Index = dataURI.indexOf(BASE64_MARKER);
    var base64 = dataURI.substring(base64Index + BASE64_MARKER.length);
    stringToZip(base64ToByteArray(base64), function (result) {
        callback(dataURI.substring(0, base64Index) + LZMA64_MARKER + result)
    })
}

function base64ToByteArray(base64) {
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
    for (i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
}

function stringToZip(string, callback) {
    LZMA.compress(string, 9, function (result, error) {
        if (error) console.error(error);
        var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(result)));
        return callback(base64String);
    });
}

function zipToString(data, callback) {
    var array = base64ToByteArray(data);
    LZMA.decompress(array, function (result, error) {
        if (!(typeof result === 'string')) result = new Uint8Array(result)
        if (error) console.error(error);
        callback(result);
    });
}

var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");

const hashPassword = (username, password) => {
return CryptoJS.HmacSHA1(password, createSalt(username)).toString();
}

const createSalt = (username) => {
    return CryptoJS.HmacSHA1(username.toLowerCase(), "Key").toString();
}

export default hashPassword
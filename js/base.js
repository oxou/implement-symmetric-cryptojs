const qs = q => document.querySelector(q);

var input = qs(".input");
var key = qs(".key");

document.body.addEventListener("click", function(e) {
    var t = e.target;

    if (!(t instanceof HTMLButtonElement))
        return;

    switch (t.innerText) {
        case "Encrypt":
            input.value = CryptoJS.AES.encrypt(input.value, key.value);
            break;

        case "Decrypt":
            input.value = CryptoJS.AES.decrypt(input.value, key.value).toString(CryptoJS.enc.Utf8);
            break;

        default:
            return;
    }
});

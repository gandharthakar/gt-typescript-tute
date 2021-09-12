"use strict";
function showError(msg, error_code) {
    throw { msg, error_code };
}
console.log(showError("Unknown Error Found.", 500));

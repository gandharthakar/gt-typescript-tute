
function showError(msg:string, error_code:number) {
    throw {msg, error_code}
}

console.log(showError("Unknown Error Found.", 500));
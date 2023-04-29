"use strict";
function tryReturn() {
    return true;
}
console.log(tryReturn()); // true
function tryReturn2() {
}
console.log(tryReturn2()); // undefined
function apiError(error, code) {
    throw (error, code);
}
console.log(apiError('error', 500)); // never is used to handle error

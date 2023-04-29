"use strict";
function data() {
    console.log("data");
    // return void
}
let today;
function data2() {
    today = new Date();
    console.log(today);
    return today = new Date();
}
data2();

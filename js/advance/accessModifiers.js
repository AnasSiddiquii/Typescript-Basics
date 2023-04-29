"use strict";
// public private
class Guest {
    constructor() {
        // ? name=''
        // ? public name=''
        this.name = '';
    }
    setName(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name);
    }
    getNameLen() {
        console.log(this.name.length);
    }
}
const u1 = new Guest;
u1.setName('Anas');
// u1.name='Amaan' // ! if none/public can be changed if private can't be changed
u1.displayName();
// u1.getNameLen() // ! if none/public can be changed if private can't be changed

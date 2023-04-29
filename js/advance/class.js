"use strict";
class Users {
    addUser(user) {
        return `${user} is added`;
    }
    removeUser(user) {
        console.log(`${user} is removed`);
    }
}
let user1 = new Users;
const results = user1.addUser('Peter');
// console.log(results)  // return (hide)
let ds = user1.removeUser('Anas'); // no return
// console.log(ds)  // return (show)

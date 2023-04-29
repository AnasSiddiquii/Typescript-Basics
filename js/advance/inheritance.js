"use strict";
class CreateAccout {
    makeEmail(user) {
        return `${user}@gmail.com`;
    }
}
class Clints extends CreateAccout {
    addUser(user) {
        return `${user} as an user`;
    }
    deleteUser(user) {
        return `${user} as an removed`;
    }
}
const U1 = new Clints();
console.log(U1.makeEmail("John"));
console.log(U1.addUser("Bob"));
console.log(U1.deleteUser("Sam"));
class Employees extends CreateAccout {
    addEmp(emp) {
        return `${emp} is added as an employee`;
    }
}
const E1 = new Employees();
console.log(E1.addEmp('Anas'));
console.log(E1.makeEmail('Anas'));

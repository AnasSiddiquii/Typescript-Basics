class CreateAccout {
    makeEmail(user:string){
        return `${user}@gmail.com`;
    }
}

class Clints extends CreateAccout {
    addUser(user:string){
        return `${user} as an user`
    }
    deleteUser(user:string){
        return `${user} as an removed`
    }
}
const U1 = new Clints();
console.log(U1.makeEmail("John"));
console.log(U1.addUser("Bob"));
console.log(U1.deleteUser("Sam"));



class Employees extends CreateAccout{
    addEmp(emp:string){
        return `${emp} is added as an employee`
    }
}

const E1 = new Employees();
console.log(E1.addEmp('Anas'))
console.log(E1.makeEmail('Anas'))
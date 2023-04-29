class Users{
    addUser(user:string){
        return `${user} is added`
    }

    removeUser(user:string){
        console.log (`${user} is removed`)
    }
}

let user1 = new Users;
const results = user1.addUser('Peter')
// console.log(results)  // return (hide)

let ds= user1.removeUser('Anas') // no return
// console.log(ds)  // return (show)
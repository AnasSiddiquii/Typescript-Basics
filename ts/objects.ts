type obj = {name:string, age:number, email:string} // type in variable

const person : obj = {
    name: 'John',
    age: 20,
    email: 'ychag@example.com'
}
console.log(person.name)

const user : {name:string, age:number, email:string} = {
    name: 'John',
    age: 20,
    email: 'ychag@example.com'
}
console.log(user.name)

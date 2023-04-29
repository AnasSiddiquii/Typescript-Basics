function add(n1:number,n2:number){
    return n1+n2
}
let result = add(10,20)
console.log(result)

function dummy(a:string){
    return a
}
let result2 = dummy('hello dummy')
console.log(result2)


// type inference
let i = 10 // default type = number
i =  11

let j  // default type = any
j = 'hello'
j = 10

let k:5  // default type = 5
k = 5

let l = 10  // default type = number
const  m =10 // fixed type = 5


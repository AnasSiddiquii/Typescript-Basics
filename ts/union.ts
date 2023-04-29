let data : number | string = 10


// function combine(a: any, b: any){ // same
function combine(a: number | string, b: number | string){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b
    }
    else{
        return a.toString() + b.toString()
    }
}
console.log(combine(10,20))
console.log(combine('Anas','Siddiqui'))
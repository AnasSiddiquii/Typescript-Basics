let data : any = 10 // ts off
data = 20
data = 'hello'

let data1 : unknown = 10 // smarter
data1 = 20
data1 = 'hello'

let item : string = data // any (type can be any)
// let item1 : string = data1  // unknown (type can only be unknown)


// if item contains a string and want to convert from unknown to string
if (typeof data === 'string') {
    item = data
}
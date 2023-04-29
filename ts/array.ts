let arr1:string[] = ['js', 'ts', '1', 'css']

// all 3 same
let arr2:[string,number,boolean] = ['js', 1, true] // default value = any
let arr3:any[] = ['js', 1, true] // default value = any
let arr4 = ['js', 1, true] // default value = any

let arr5:string[] = ['js', 'ts', '1', 'css']
arr5['java']
arr5.push('hello')
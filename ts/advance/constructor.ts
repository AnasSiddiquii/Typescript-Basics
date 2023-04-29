class Students{
    
    constructor(public name:string,public email:string){
        this.name=name
        this.email=email
    }
    displayName(){
        console.log(this.name, this.email)
    }
}

const std1 = new Students('Anas','test1@example.com')
const std2 = new Students('Amaan','test2@example.com')

std1.displayName()
std2.displayName()
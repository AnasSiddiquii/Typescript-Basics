// public private
class Guest{
    
    // ? name=''
    // ? public name=''
    
    private name=''

    setName(name:string){
        this.name=name
    }
    displayName(){
        console.log(this.name)
    }
    private getNameLen(){
        console.log(this.name.length)
    }
}
const u1 = new Guest
u1.setName('Anas')
// u1.name='Amaan' // ! if none/public can be changed if private can't be changed


u1.displayName()
// u1.getNameLen() // ! if none/public can be changed if private can't be changed
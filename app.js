// Assginment 01 Create a class called PersonAccount. It has firstname, lastname, incomes, 
// expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. 
// Incomes is an array of objects income and its description and expenses is also an array of objects having expense and its description.

class PersonAccount{
    constructor(firstName,lastName,incomes,expences){
        this.firstName = firstName ,
        this.lastName = lastName  ,
        this.incomes =  incomes ,
        this.expences = expences 
        
    }
        totalInconme(){
            const totIncome = this.incomes.reduce((preVal,curVal)=>{
                return preVal + curVal
            },0)
            return  totIncome

        }
        totalExpences(){
            const totExpence = this.expences.reduce((preVal,currVa)=> {
                return preVal + currVa
             }, 0)
             return totExpence ;
        }
      accountInfo(){
            return `account information : Fist Name ${this.firstName}  Last Name ${this.lastName}  incomes ${this.incomes} 
            total incomes ${this.totalInconme()} 
            total excpences ${this.totalExpences()}
            `
      }
     
}


const incomes = [400,400,400,400,400]

const person = new PersonAccount("Faheem","Khan",incomes,[123,2131,2123])
 person.totalInconme()
console.log(person.accountInfo())



// Create an Automobile class. The class will have name, model, color, type
// properties and create different methods e.g openOrCloseDoor() logs doors 
// are opened or closed, start() logs car is ready for drive. 



class Automobile{
    constructor(name, model, color, type){
        this.name = name,
        this.model = model,
        this.color = color,
        this.type = type 
    }
    open(){
        return console.log(`${this.name} Car Door is open`)
    }
   close(){
        return console.log(`${this.name} Car Door is close`)
    }
}

// Create Car, Bus and Truck child class from the Automobile Class

const car = new Automobile("spotage","2021","white","suv")
const bus = new Automobile("Nissan","2019","black","bus")
const truck = new Automobile("cyber","2022","silver","truck")
car.open()
car.close()

console.log(car)
console.log(bus)
console.log(truck)



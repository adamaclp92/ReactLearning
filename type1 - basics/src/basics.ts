//Primitives: number, string, boolean
//More complex types: array, objects
//Function types, paramteres

//Primitives

let age = 12;


//Union types
let userName: string | number;

userName = 'assa'
userName = 12


let person: {
    name: string,
    age: number
};

person = {
     name: 'asd',
     age: 12
}


//Type Aliases
type Person = {
    name: string,
    age: number
}

let man: Person

//Person objektumokat tartalmazó tömb
let people: Person[]



//Functions &types
function add(a: number, b: number): number {
    return a + b
}

function print(value: any){
    console.log(value)
}

//Generics
function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array]
    return newArray
}

const demoArray = [1, 2, 3]

const updatedArray = insertAtBeginning(demoArray, -1)

const stringArray = insertAtBeginning(["a, b, c, d"], 'd')


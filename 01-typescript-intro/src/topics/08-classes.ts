export class Person {
    public name: string;
    private address: string;


    constructor(name: string, address: string = 'No address') {
    this.name = name;
    this.address = address;
  }
}

// export class Alumno extends Person {
//     public DNI: string;
//     public age: number;

//     constructor(DNI, age) {
//         super('Alba', 'Dos Hermanas')
//         this.DNI = DNI;
//         this.age = age;
//     }
// }

export class Alumno {
    public DNI: string;
    public age: number;
    public person: Person;

    constructor(DNI: string, age: number, person: Person) {
        this.DNI = DNI;
        this.age = age;
        this.person = person
    }
}

const person = new Person('Alba', 'Dos Hermanas');
const alba = new Alumno('123123123A', 19, person);

console.log(alba)
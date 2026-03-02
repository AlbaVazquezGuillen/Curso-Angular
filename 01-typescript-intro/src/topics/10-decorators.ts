function classDecorator<T extends { new (...args:any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator
export class SuperCLass {
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola mundo')
    }
}

console.log(SuperCLass);

const myClass = new SuperCLass();
console.log(myClass);
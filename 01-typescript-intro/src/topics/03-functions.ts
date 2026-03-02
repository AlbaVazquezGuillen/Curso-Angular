function addNumbers(a:number , b:number):number {
    return a + b;
}

const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

function multiply(firtsNumber:number, secondNumber?:number, base:number = 2) {
    return firtsNumber * base;
}

// const result = addNumbers(1,2);
// const result2 = addNumbersArrow(1,2);
// const multiplyResult: number = multiply(5);

// console.log({result, result2, multiplyResult})

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number) => {
    character.hp += amount;
}

const alba: Character = {
    name: 'Alba',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
};

healCharacter (alba, 10);
healCharacter (alba, 30);
alba.showHp();

export {}
const skills = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[]
    hometown?: string;
}

const alba: Character = {
    name: 'Alba',
    hp: 100,
    skills: ['Bash', 'Counter']
}

alba.hometown = 'Rivendell'

console.log(alba)

export {};

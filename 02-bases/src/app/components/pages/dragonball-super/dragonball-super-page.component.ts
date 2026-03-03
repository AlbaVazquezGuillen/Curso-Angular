import { Component, signal } from '@angular/core';
import { CharacterList } from "../../dragonball/character-list/character-list";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterList]
})

export class DragonballSuperPageComponent {
  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001},
    { id: 2, name: 'Vegeta', power: 8001},
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    };

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}

import { Component, inject, signal } from '@angular/core';
import { CharacterList } from "../../dragonball/character-list/character-list";
import { CharacterAddComponent } from "../../dragonball/character-add/character-add";
import { DragonBallService } from '../../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterList, CharacterAddComponent]
})

export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonBallService)

}

import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'page-hero',
  templateUrl: './hero-page.component.html'
})

export class HeroPageComponent {


  name = signal('Ironman');
  age = signal(45);

getHeroDescription() {
  return `${this.name()} - ${this.age()}`;
}

changeAge() {
  this.age.set(60);
}

changeHero() {
  this.name.set('Spiderman');
  this.age.set(22)
}

resetForm() {
  this.name.set('Ironman');
  this.age.set(45);
}

  constructor() { }

  ngOnInit() { }
}

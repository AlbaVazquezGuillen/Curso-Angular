import { Routes } from '@angular/router';
import { CounterPageComponent } from './components/pages/counter/counter-page.component';
import { HeroPageComponent } from './components/pages/hero/hero-page.component';
import { DragonballPageComponent } from './components/pages/dragonball/dragonball-page.component';

export const routes: Routes = [

  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent,
  }
];

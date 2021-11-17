import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/heroes/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // assign all the mock heroes to a variable 
  heroes = HEROES;

  //selectedHero is a local object that holds hero object
  selectedHero?: Hero;

  // when the hero is selected, the selected hero object will assigned to selectedHero
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  constructor() { }

  ngOnInit(): void {
  }

}

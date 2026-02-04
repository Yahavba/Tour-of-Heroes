import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroDetail } from '../hero-detail/hero-detail';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  imports: [FormsModule, HeroDetail],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}

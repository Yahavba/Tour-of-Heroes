import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  imports: [RouterLink],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}

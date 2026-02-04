import { Component } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {
  hero: Hero = { id: 1, name: 'Windstorm' };
}

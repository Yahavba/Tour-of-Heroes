import { Component } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {
  hero: Hero = { id: 1, name: 'Windstorm' };
}

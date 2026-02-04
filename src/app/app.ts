import { Component } from '@angular/core';
import { Heroes } from './heroes/heroes';

@Component({
  selector: 'app-root',
  imports: [Heroes],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Tour of Heroes';
}

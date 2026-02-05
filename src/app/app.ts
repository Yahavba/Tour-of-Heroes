import { Component } from '@angular/core';
import { Messages } from './messages/messages';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Messages, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Tour of Heroes';
}

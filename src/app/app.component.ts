import '../assets/css/styles.scss';

import { Component } from '@angular/core';
import { getDefaultMessage } from 'src/message';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string;

  constructor() {
    this.message = getDefaultMessage().value;
  }
}

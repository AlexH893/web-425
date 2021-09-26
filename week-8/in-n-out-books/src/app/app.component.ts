/**
 * Title: app.component.ts
 * Author: Alex Haefner
 * Date: 21 August 2021
 * Description: The app file for books app
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //creating variable assignment and type of string
  assignment: string;


constructor() {

    //assigning the assignment variable a value
    this.assignment = "Welcome to In-N-Out-Books";

}

}

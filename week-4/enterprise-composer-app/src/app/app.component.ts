/**
 * Title: app.component.ts
 * Author: Alex Haefner
 * Date: 21 August 2021
 * Description: The app component ts file for composer app
 */

//Imports
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Title
  assignment: string = 'Exercise 3.2 - Passing Data to Routes, Part 1';


}


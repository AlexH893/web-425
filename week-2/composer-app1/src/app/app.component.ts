/**
 * Title: app.component.ts
 * Author: Alex Haefner
 * Date: 15 August 2021
 * Description: The app component ts file for composer app
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Title
  assignment: string = 'Assignment 2.4 - Routing in Action';


}

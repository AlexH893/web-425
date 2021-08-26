/*
 * Title: home.component.ts
 * Author: Alex Haefner
 * Date: 15 August 2021
 * Description: The home.component ts file for secure-app
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Exporting appcomponent, that holds assignment title
export class AppComponent {
  assignment: string = 'Secure Profile App';

  }

//Setting isloggedin to true
var isLoggedIn = true

/*
 * Title: sign-in.component.ts
 * Author: Alex Haefner
 * Date: 15 August 2021
 * Description: The sign-in.component ts file for secure-app
*/

//Imports

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
      this.isLoggedIn = true;

      this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
    }
  }

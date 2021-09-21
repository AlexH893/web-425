/**
 * Title: base-layout.component.ts
 * Author: Alex Haefner
 * Date: 12 Sep 2021
 * Description: The base layout component file for gpa app
 */

//imports
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  //var with string type
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    //assignment name
    this.assignment = 'GPA Calculator';
   }

  ngOnInit(): void {
  }

  //destroy session and sign user out, deleting cookies
  signOut() {

    this.cookieService.deleteAll();
    //direct back to sign-in page
    this.router.navigate(['/session/sign-in']);

  }


}

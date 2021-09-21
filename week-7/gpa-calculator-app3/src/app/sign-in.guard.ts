/**
 * Title: sign-in.guard.ts
 * Author: Alex Haefner
 * Date: 12 Sep 2021
 * Description: The sign-in guard file for gpa app
 */

//imports
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    //assigning variable the response from the cookieService call
    const sessionUser = this.cookieService.get('session_user');

    if (sessionUser) {

      return true;

    } else {
      //redirecting users back to sign-in page
      this.router.navigate(['/session/sign-in']);
      return false;

    }
  }
}

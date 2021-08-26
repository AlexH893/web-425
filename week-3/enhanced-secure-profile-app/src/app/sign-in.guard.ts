/**
 * Title: sign-in.guard.ts
 * Author: Professor Krasso
 * Edited by: Alex Haefner
 * Date: 21 Aug 2021
 * Description: sign-in.guard file for secure app
 */

//Imports
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
//This is a guard that decides if a user can activate a certain route
export class SignInGuard implements CanActivate {

  constructor(private router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //Creating variable, assigning it value of queryparams function
    let isLoggedIn = next.queryParams.isLoggedIn;
  //Return true is user is logged in
    if (isLoggedIn) {

      return true;

    } else {
    //Return false if user isn't logged in and re-direct user. Guard is in place preventing unauthorized
    //users from accessing the Home component
      this.router.navigate(['/']);
      return false;
    }
  }
}

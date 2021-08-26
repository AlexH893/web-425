/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * Edited by: Alex Haefner
 * Date: 21 Aug 2021
 * Description: Routing file for secure app
 */

//Imports
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]

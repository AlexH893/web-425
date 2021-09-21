/**
 * Title: sign-in.service.ts
 * Author: Alex Haefner
 * Date: 12 Sep 2021
 * Description: The sign-in service file for gpa app
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

//new var with type of array
studentIds: Array<number>;



  constructor() {

    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];

   }

   validate(studentId:number) {
     //iterating over the array and returning true if match was found
     return this.studentIds.some( id => id === studentId);



   }
}

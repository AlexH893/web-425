/**
 * Title: sign-in.component.ts
 * Author: Alex Haefner
 * Date: 12 Sep 2021
 * Description: The sign-in component file for gpa app
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  //var with type of FormGroup
  signinForm: FormGroup;

  //error message var with type of string
  errorMsg: string = '';


  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    //using formbuilder to create a new formgroup with a formcontrol named studentId
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
   }

  ngOnInit(): void {

  }

  get form() { return this.signinForm.controls; }

  onSubmit(){
    const formValues = this.signinForm.value;
    //getting studentId value from the studentId FormControl
    const studentId = parseInt(formValues.studentId);

    //if statement that will compare returned value from signInService function.
    //if true add a cookie to users browser & use router to navigate them to root path
    //otherwise assign an error message
    if (this.signinService.validate(studentId)){
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])
    } else {
      this.errorMsg = 'The student ID you entered is invalid. Please try again.'
    }
  }

}

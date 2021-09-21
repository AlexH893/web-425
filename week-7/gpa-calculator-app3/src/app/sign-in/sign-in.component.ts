/**
 * Title: sign-in.component.ts
 * Author: Alex Haefner
 * Date: 12 Sep 2021
 * Description: The sign-in component file for gpa app
 */

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

//var with type of string
errorMsg!: string;

//var with type of FormGroup
signinForm!: FormGroup;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {

    //using formbuilder to create a new formgroup with a formcontrol named studentId
    this.signinForm = this.fb.group({
    studentId: '',
    });
  }


  //
  onSubmit() {

    const formValues = this.signinForm.value;
    //getting studentId value from the studentId FormControl
    const studentId = parseInt(formValues.studentId);

    //if statement that will compare returned value from signInService function.
    //if true add a cookie to users browser & use router to navigate them to root path
    //otherwise assign an error message
    if (this.signinService.validate(studentId)) {

      this.cookieService.set('session_user', studentId.toString(), 1)

      this.router.navigate(['/'])

    } else {

      this.errorMsg = `The student IF you entered is invalid, please try again.`;
    }
    }

  }



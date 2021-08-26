/*
 * Title: home.component.ts
 * Author: Alex Haefner
 * Date: 15 August 2021
 * Description: The home.component ts file for secure-app
*/


import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Define isLoggedIn variable w/ Boolean data type, assign it default value of true
  isLoggedIn: boolean = true;



  constructor(private route: ActivatedRoute) {

    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
   }

  ngOnInit(): void {
  }

}

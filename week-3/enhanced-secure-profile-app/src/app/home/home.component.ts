/*
 * Title: home.component.ts
 * Author: Alex Haefner
 * Date: 15 August 2021
 * Description: The home.component ts file for secure-app
*/

//Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private route: ActivatedRoute) {

   }

  ngOnInit(): void {
  }

}

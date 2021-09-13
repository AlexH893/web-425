/**
 * Title: base-layout.component.ts
 * Author: Alex Haefner
 * Date: 12 Sep 2021
 * Description: The base layout component file for gpa app
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {


  assignment: string;

  constructor() {
    //assignment name
    this.assignment = 'Assignment 6.4 - Input Properties';
   }

  ngOnInit(): void {
  }

}

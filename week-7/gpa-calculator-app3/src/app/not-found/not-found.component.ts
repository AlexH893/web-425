/**
 * Title: not-found.component.ts
 * Author: Alex Haefner
 * Date: 12 Sep 2021
 * Description: The not-found component file for gpa app
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})

//exporting the class
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

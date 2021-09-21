/**
 * Title: gpa.component.ts
 * Author: Alex Haefner
 * Date: 12 Sep 2021
 * Description: The gpa file for gpa app
 */


import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

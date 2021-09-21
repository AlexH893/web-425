/**
 * Title: grade summary.component.ts
 * Author: Alex Haefner
 * Date: 12 Sep 2021
 * Description: The grade-summary component file for gpa app
 */

 import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  //initializing variables
  @Input() grade: string = "";
  @Input() course: string = "";


  constructor() {

  }

  ngOnInit(): void {
  }
}

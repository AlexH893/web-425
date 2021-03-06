/**
 * Title: home.component.ts
 * Author: Alex Haefner
 * Date: 12 Sep 2021
 * Description: The base home file for gpa app
 */

//imports
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;;

  //var with type of FormGroup
  transcriptForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {

    //building FormGroup with two FormControls: course and grade
    this.transcriptForm = this.fb.group({

      course: ['', Validators.required],
      grade: ['', Validators.required]
    })
  }

  //returns the transcriptForm controls
  get form() {
    return this.transcriptForm.controls;
  }

 onSubmit(event: any) {
    //pushing new object literal to the transcriptEntires array using the values
    //captured from the from
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value
    });

    //resetting validation
    event.currentTarget.reset();

  }

//function to calculte results
  calculateResults() {
    let gpa: number = 0;
  //for loop that loops over entries
    for (let entry of this.transcriptEntries) {
      console.log(entry.grade)
      switch(entry.grade) {
        case 'A':
          console.log('an a')
          //gpa vals
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }
    //logging gpa
    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length;
    console.log(this.gpaTotal);
  }


  //function to clear entries
  clearEntries() {
    console.log("Gpa has been cleared!")
    //emptying array
    this.transcriptEntries = [];
    //setting gpa total to 0
    this.gpaTotal = 0;
  }
}

/*
 * Title: my-details.component.ts
 * Author: Alex Haefner
 * Date: 15 August 2021
 * Description: The my-details.component ts file for my enhanced app
*/

import { Component, OnInit } from '@angular/core';



export default class Person {

  fullName: string;
  favoriteFood: string;
  favoriteColor: string;


  keywords = [
    "#TypeScript", "#2021", "#CodingWithAngular", "#ngOmaha"
  ]

constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    //Assigning the passed-in parameters to the class fields
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;

  }
}


@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

export class MyDetailsComponent implements OnInit {

//Creating a variable myProfile & giving it a data type of Person
myProfile: Person;


  constructor() {

//Creating new instance of the Person class, passing in actual full name,
// favorite color, and favorite food
    this.myProfile = new Person("Alex Haefner", "Pizza", "Forest Green");

  }

  ngOnInit(): void {
  }






}

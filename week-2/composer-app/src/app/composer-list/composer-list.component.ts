/**
 * Title: composer-list.component.ts
 * Author: Alex Haefner
 * Date: 15 August 2021
 * Description: The composer-list component file for composer app
 */

import { Component, OnInit } from '@angular/core';

export default class Composer {

  genre: string;
  fullName: string;

  constructor( fullName: string, genre: string ) {

    this.fullName = fullName;
    this.genre = genre;


  }

}



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {


//Creating a variable composers & giving it a data type of array
  composers: Array<Composer>;


  constructor() {

    this.composers = [

      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Joseph Haydn", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}

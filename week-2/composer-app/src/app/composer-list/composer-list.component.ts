/**
 * Title: composer-list.component.ts
 * Author: Alex Haefner
 * Date: 30 August 2021
 * Description: The composer-list component ts file for enhanced composer app
 */

import { Component, OnInit } from '@angular/core';


export class Composer {

  fullName: string;
  genre: string;

  constructor(fullName:string, genre:string) {

    //Mapping to class fields
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

  composers: Array<Composer>;

  constructor() {
    //Array containing composer information
    this.composers = [
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Joseph Haydn", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}

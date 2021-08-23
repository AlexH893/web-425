/**
 * Title: composer-list.component.ts
 * Author: Alex Haefner
 * Date: 15 August 2021
 * Description: The composer-list component file for composer app
 */

//Imports
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from'../composer.class';



@Component({

  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

//Exporting class
export class ComposerListComponent implements OnInit {

  //Updating composer's variable to the array type
  composers: Array<IComposer>;

  constructor() {

    //Creating new composers object, assigning the getComposers() function to the composers variable
    this.composers = new Composer().getComposers();

  }

  ngOnInit(): void {
  }

}

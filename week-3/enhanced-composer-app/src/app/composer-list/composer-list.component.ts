/**
 * Title: composer-list.component.ts
 * Author: Alex Haefner
 * Date: 30 August 2021
 * Description: The composer-list component ts file for enhanced composer app
 */

//Imports
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor() {
    //create a new Composer object and assign the getComposers()
    //function to the composers variable
    this.composers = new Composer().getComposers();
   }

  ngOnInit(): void {
  }

}

/**
 * Title: composer-list.component.ts
 * Author: Alex Haefner
 * Date: 21 August 2021
 * Description: The composer-list component file for composer app
 */

//Imports
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

//import statement for rxjs Observable object
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

//Exporting class
export class ComposerListComponent implements OnInit{

  composers: Observable<IComposer[]>;

  //Create variable  txtSearchControl, assign it new instance of FormControl object
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();


    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void{
  }


  //Function to filter composers by name
  filterComposers(name: string) {

    this.composers = this.composerService.filterComposers(name);

  }






}

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

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

//Exporting class
export class ComposerListComponent implements OnInit{

  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void{
  }
}

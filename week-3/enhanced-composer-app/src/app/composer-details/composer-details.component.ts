/**
 * Title: composer-details.component.ts
 * Author: Alex Haefner
 * Date: 30 August 2021
 * Description: The composer-details component ts file for enhanced composer app
 */


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

    composerId: number;
    composer: IComposer;

  constructor(private route: ActivatedRoute) {

    //call the snapshot function to retrieve the composerId parameter value and assign it
    //to the composerId variable. Parameter values will always return a string value, so you
    //will need to use parseInt to parse the string into a numerical value
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    if (this.composerId) {

      this.composer = new Composer().getComposer(this.composerId);

    }

   }

  ngOnInit(): void {
  }

}

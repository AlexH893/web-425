/**
 * Title: composer.service.ts
 * Author: Alex Haefner
 * Date: 29 August 2021
 * Description: The composer service ts file
 */


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

//import statement for rxjs Observable object
import { Observable } from 'rxjs';
//import statement for the 'of' operator from rxjs
import { of } from 'rxjs';
//import statement for the 'map' operator from rxjs
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 100, fullName:"Paul Simon", genre:"Rock"},
      {composerId: 101, fullName:"Freddie Mercury", genre:"Rock"},
      {composerId: 102, fullName:"Elton John", genre:"Rock"},
      {composerId: 103, fullName:"John Lennon", genre:"Rock"},
      {composerId: 104, fullName:"Billy Joel", genre:"Rock"},
    ]
  }

  //Function to get list of composers
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  filterComposers(name: string): Observable<IComposer[]> {

    //Using the pipe operator, we can chain together functions, while the map function allows us to
    //return a new array containing objects. Filter filters that array of data
    return of(this.composers).pipe(map(composers => composers.filter(composer =>
    composer.fullName.toLowerCase().indexOf(name) > -1)))

  }

  // Function to get composer by ID
  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}

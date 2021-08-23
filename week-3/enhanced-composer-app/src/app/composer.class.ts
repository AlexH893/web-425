/**
 * Title: composer-class.ts
 * Author: Alex Haefner
 * Date: 21 August 2021
 * Description: The composer class ts file for enhanced composer app
 */


/**
 * Title: composer-list.component.ts
 * Author: Alex Haefner
 * Date: 15 August 2021
 * Description: The composer-list component file for composer app
 */

import { IComposer } from './composer.interface';




  //New field  of composers with type of array
export class Composer {

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
  getComposers() {
    return this.composers;
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

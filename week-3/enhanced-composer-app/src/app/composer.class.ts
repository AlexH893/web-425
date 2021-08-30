/**
 * Title: composer.class.ts
 * Author: Alex Haefner
 * Date: 30 August 2021
 * Description: The composer class ts file for enhanced composer app
 */

//Importing IComposer
import { IComposer } from './composer.interface';
export class Composer {

  //New field called composers of type Array<IComposer>
  composers: Array<IComposer>;

  constructor() {

    this.composers = [

      {composerId: 100, fullName: "Ludwig Van Beethoven", genre: "Classical"},
      {composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"},
      {composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"},
      {composerId: 103, fullName: "Johannes Brahms", genre: "Classical"},
      {composerId: 104, fullName: "Joseph Haydn", genre: "Classical"}

    ]
  }

  //This function retrieves the composers
  getComposers() {
    return this.composers;
  }



  getComposer(composerId:number) : IComposer {
    //Looping over the composer array and returning the object
    //that matches the passed-in composerId
    for(let composer of this.composers) {

      if (composer.composerId === composerId) {

        return composer;
      }
    }
    return {} as IComposer;
  }

}

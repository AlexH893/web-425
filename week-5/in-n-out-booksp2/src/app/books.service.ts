/**
 * Title: books.service.ts
 * Author: Alex Haefner
 * Date: 21 August 2021
 * Description: The books service file for books app
 */

//imports
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //creating a books variable of type Observable<IBook>
  books: Array<IBook>;




  //5 favorite books
  constructor() {
    //books array containing 5 books
    this.books = [
      {
        isbn: '9780375826689',
        title: 'Eragon',
        description: 'The book tells the story of a farm boy named Eragon, who finds a mysterious stone in the mountains',
        numOfPages: 322,
        authors: ['Christopher Paolini']
      },
      {
        isbn: '037582670X',
        title: 'Eldest',
        description: 'The story is the continued adventures of Eragon and his dragon Saphira, centering on their journey to the realm of the Elves in order to further Eragons training as a Dragon Rider',
        numOfPages: 704,
        authors: ['Christopher Paolini']
      },
      {
        isbn: '9780375826726',
        title: 'Brisingr',
        description: 'Following the colossal battle against the Empires warriors, Eragon and his dragon, Saphira, have narrowly escaped with their lives. Still, there is more adventure at hand for the Rider and his dragon, as Eragon finds himself bound by a tangle of promises he may not be able to keep.',
        numOfPages: 763,
        authors: ['Christopher Paolini']
      },
      {
        isbn: '0375714499',
        title: 'Manufacturing Consent',
        description: 'In this pathbreaking work, Edward S. Herman and Noam Chomsky show that, contrary to the usual image of the news media as cantankerous, obstinate, and ubiquitous in their search for truth and defense of justice, in their actual practice they defend the economic, social, and political agendas of the privileged groups that dominate domestic society, the state, and the global order.',
        numOfPages: 480,
        authors: ['Noam Chomsky']
      },
      {
        isbn: '133821666X',
        title: 'Harry Potter and the Cursed Child',
        description: '“Harry Potter and the Cursed Child” is about the journey Albus takes while growing up, and the roles he and his best friend, Scorpius (Draco Malfoys son), play when dark forces, perhaps in league with Voldemort, once again threaten the fate of the planet.',
        numOfPages: 480,
        authors: ['J.K. Rowling']
      },

    ]
  }


  //getBooks function -- setting the return type to an observable array of IBook objects
  getBooks(): Observable<IBook[]> {

    return of(this.books);
  }

  //setting return type to IBook
  getBook(isbn: string): IBook {

    //looping the array of books and return a book matching the passed-in isbn number
    for (let book of this.books) {

      if (book.isbn === isbn) {

        return book;
      }
    }
    return {} as IBook;
  }
}

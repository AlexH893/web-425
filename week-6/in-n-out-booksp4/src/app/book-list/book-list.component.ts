/**
 * Title: book-list.component.ts
 * Author: Alex Haefner
 * Date: 21 August 2021
 * Description: The composer-list component file for composer app
 */

//imports
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
//MatDialog service can be used to open modal dialogs with Material Design styling and animations
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {


  books: Observable<IBook[]>;

  //creating variable and assigning it values
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']

  //Initializing as undefined to avoid the intializer error TS2564
  book: IBook | undefined;


  showBookDetails(isbn: string) {



    //make a call to the booksService.getBook(isbn: string),
    //mapping the return object to the book variable
    this.book = this.booksService.getBook(isbn);

    //creating a dialogRef object and assign it to the dialog.open() function
    //A dialog is opened by calling the open method with a component to be
    //loaded and an optional config object
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })

    //test that the service is returning the correct book object
    console.log(this.book);

    }

  //adding booksservice to the constructor
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    //calling the booksService.getBooks() function, assigning results to books variable
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

}

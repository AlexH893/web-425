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


  books: Array<IBook> = [];


  //Initializing as undefined to avoid the intializer error TS2564
  book: IBook | undefined;



  constructor(private booksService: BooksService, private dialog: MatDialog) {

    this.booksService.getBooks().subscribe(res => {

      console.log(res);

      //looping over the response data object
      for (let key in res ) {
        //checking if the res.hasOwnProperty(key) is true
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }
          //pushing new object to books array
          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })

  }
  ngOnInit(): void {
  }



  showBookDetails(isbn: string) {
    //Using JavaScripts built-in find function to search
    //the books array and return the matching book object
    this.book = this.books.find(book => book.isbn === isbn);


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


    dialogRef.afterClosed().subscribe(result => {

      if (result === 'confirm') {
        this.book = null;
      }
    });
  }

}


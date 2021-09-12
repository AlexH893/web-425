/**
 * Title: app.module.ts
 * Author: Alex Haefner
 * Date: 5 Sept 2021
 * Description: The book-details-dialog-component file for books app
 */

//imports
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { IBook } from '../book.interface';


@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  //A constructor that specifies a custom provider of a dependency using @Inject
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data:any) {

    //Mapping the data.book value to book variable
    this.book = data.book;
  }

  //Variable type of IBook
  book: IBook;

  ngOnInit(): void {
  }

}

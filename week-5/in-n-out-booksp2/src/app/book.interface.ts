/**
 * Title: book.interface.ts
 * Author: Alex Haefner
 * Date: 4 Sept 2021
 * Description: The book interface file for book app
 */

export interface IBook
 {
   isbn: string;
   title: string;
   description: string;
   numOfPages: number;
   authors: Array<string>;
 }

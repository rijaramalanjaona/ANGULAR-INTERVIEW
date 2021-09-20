import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Book} from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private defaultBookList: Book[] = [
    { title: 'The Hobbit', cover: 'red', authorFirstname: 'J.R.R', authorLastname: 'Tolkien', pageCount: 184, releaseDate: '1937'},
    { title: 'The Two Towers', cover: 'green', authorFirstname: 'J.R.R', authorLastname: 'Tolkien', pageCount: 294, releaseDate: '1954'},
    { title: 'The Return of the King', cover: 'blue', authorFirstname: 'J.R.R', authorLastname: 'Tolkien', pageCount: 347, releaseDate: '1955'},
    // tslint:disable-next-line:max-line-length
    { title: 'The Silmarillion', cover: 'yellow', authorFirstname: 'J.R.R', authorLastname: 'Tolkien', pageCount: 411, releaseDate: '1977'}
  ];

  private bookList: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(this.defaultBookList);

  public readonly bookList$: Observable<Book[]> = this.bookList.asObservable();

  constructor() { }

  add(book: Book): void {
    const books = this.bookList.getValue();
    books.unshift(book);
    this.bookList.next(books);
  }
}

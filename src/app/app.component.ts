import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BookService} from './book.service';
import {Book} from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bookList$: Observable<Book[]> | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookList$ = this.bookService.bookList$;
  }
}

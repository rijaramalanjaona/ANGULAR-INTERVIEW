import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Book} from '../book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: '',
      cover: '',
      authorFirstname: '',
      authorLastname: '',
      releaseDate: '',
      pageCount: 0
    });
  }

  onSubmit(): void {
    this.bookService.add(this.bookForm.value);
    this.bookForm.reset();
  }

}

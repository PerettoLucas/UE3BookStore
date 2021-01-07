import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {Book} from '../../shared/book';



@Component({
  selector: 'app-book-store-service-test-component',
  templateUrl: './book-store-service-test-component.component.html',
  styleUrls: ['./book-store-service-test-component.component.scss']
})
export class BookStoreServiceTestComponentComponent implements OnInit {

  private URL = 'http://localhost:3000';
  public books: Array<Book> ;
  private error: HttpErrorResponse;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<Book[]>(`${this.URL}/books`)
             .subscribe(
               response => this.books = response,
               error => this.error = error
             );



  }

}

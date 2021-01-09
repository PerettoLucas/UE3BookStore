import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../shared/book';
import {HttpClient} from '@angular/common/http';
import {BookFactory} from '../shared/book-factory';

@Injectable({
  providedIn: 'root'
})
export class BookStoreServiceService {

  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  resetStore(): Observable<any> {
    return this.http.delete<any>(`${this.URL}/books`, { observe: 'response' });
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.URL}/books`);
  }

  getAllBooksSearchTerm(searchTerm: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.URL}/books/search/${searchTerm}`);
  }

  createBook(): Observable<any> {
    return this.http.post<Book>(`${this.URL}/book`, BookFactory.random(), {observe: 'response'});
  }

  deleteBook(isbn: string): Observable<any> {
    return this.http.delete<Book>(`${this.URL}/book/${isbn}`, {observe: 'response'});
  }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.URL}/book/${isbn}`);
  }

  updateBook(book): void {

  }

  checkBook(isbn): void {

  }

  rateBook(isbn, rating): void {

  }

  /*


  *
  * */
}

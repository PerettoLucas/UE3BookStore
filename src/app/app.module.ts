import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BookStoreServiceTestComponentComponent } from './book-store-service-test-component/book-store-service-test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BookStoreServiceTestComponentComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

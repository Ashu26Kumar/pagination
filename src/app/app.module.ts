import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule,MatSelectModule,MatFormFieldModule} from "@angular/material"
import { AppComponent } from './app.component';
import {NgxPaginationModule} from "ngx-pagination";
import {MatPaginatorModule} from '@angular/material/paginator';

// import {MatSelectModule} from '@angular/material/select';
// import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatCardModule,NgxPaginationModule,MatSelectModule,MatFormFieldModule,MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

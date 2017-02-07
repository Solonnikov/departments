import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DepartmentDetailComponent } from './department-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DepartmentDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

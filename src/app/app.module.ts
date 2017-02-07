import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { DepartmentsComponent } from './departments.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { DepartmentService } from './department.service';
import { DepartmentSearchComponent } from './department-search.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), AppRoutingModule ],
  declarations: [ AppComponent, DepartmentDetailComponent, DepartmentsComponent, DashboardComponent, DepartmentSearchComponent ],
  providers: [ DepartmentService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

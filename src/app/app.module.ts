import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { DepartmentsComponent } from './departments.component';
import { DepartmentService } from './department.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, DepartmentDetailComponent, DepartmentsComponent, DashboardComponent ],
  providers: [ DepartmentService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

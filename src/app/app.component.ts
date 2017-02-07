import { Component, OnInit } from '@angular/core';

import { Department } from './department';
import { DepartmentService } from './department.service';


@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>Departments</h2>
  <ul class="departments">
  	<li *ngFor="let department of departments"
  	[class.selected]="department === selectedDepartment"
  	(click)="onSelect(department)">
  	<span class="badge">{{department.id}}</span>{{department.name}}
  	</li>
  </ul>
  <department-detail [department]="selectedDepartment"></department-detail>
  `,
  styleUrls: ['../styles.css'],
  providers:[DepartmentService]
})
export class AppComponent implements OnInit  { 
	title = 'Company Info';
	departments: Department[];
	selectedDepartment: Department;

	constructor(private departmentService: DepartmentService) { }

	getDepartments(){
		this.departmentService.getDepartments().then(departments => this.departments = departments);
	}

	ngOnInit(): void {
    	this.getDepartments();
  	}


	onSelect(department: Department): void{
		this.selectedDepartment = department;
	}
}

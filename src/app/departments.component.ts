import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Department } from './department';
import { DepartmentService } from './department.service';


@Component({
	moduleId: module.id,
    selector: 'departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit  { 
	departments: Department[];
	selectedDepartment: Department;

	constructor(
		private router: Router,
		private departmentService: DepartmentService) { }

	getDepartments(){
		this.departmentService.getDepartments().then(departments => this.departments = departments);
	}

	add(name: string): void {
	    name = name.trim();
	    if (!name) { return; }
	    this.departmentService.create(name)
	        .then(department => {
	            this.departments.push(department);
	            this.selectedDepartment = null;
	        });
	}

	delete(department: Department): void {
	    this.departmentService
	        .delete(department.id)
	        .then(() => {
	            this.departments = this.departments.filter(d => d !== department);
	            if (this.selectedDepartment === department) { this.selectedDepartment = null; }
	        });
	}

	ngOnInit(): void {
    	this.getDepartments();
  	}

	onSelect(department: Department): void{
		this.selectedDepartment = department;
	}

	gotoDetail(): void {
  		this.router.navigate(['/detail', this.selectedDepartment.id]);
    }
}

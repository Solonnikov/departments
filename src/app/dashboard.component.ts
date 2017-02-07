import { Component, OnInit } from '@angular/core';

import { Department } from './department';
import { DepartmentService } from './department.service';

@Component({
	moduleId: module.id,
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit { 
	
	departments: Department[] = [];

    constructor(private departmentService: DepartmentService) { }

    ngOnInit(): void {
    this.departmentService.getDepartments()
      .then(departments => this.departments = departments.slice(1, 4));
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';
// import { Department } from './department';

import { DepartmentService } from './department.service';

@Component({
	moduleId: module.id,
  selector: 'department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit{
	@Input()
	department: Department;

	constructor(
	  private departmentService: DepartmentService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	ngOnInit(): void {
      this.route.params
       .switchMap((params: Params) => this.departmentService.getDepartment(+params['id']))
       .subscribe(department => this.department = department);
	}
	goBack(): void {
  	  this.location.back();
}
}

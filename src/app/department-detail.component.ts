import { Component, Input } from '@angular/core';
import { Department } from './department';

@Component({
  selector: 'department-detail',
  template: `
  <div *ngIf="department">
  <h3>{{department.name}} Department Info</h3>
  	<div><label>Id: </label> {{department.id}}</div>
  	<div> 
  		<label>Name: </label>
  		<input [(ngModel)]="department.name" placeholder="name" />
  	</div>
  </div>
  `,
})
export class DepartmentDetailComponent {
	@Input()
	department: Department;
}

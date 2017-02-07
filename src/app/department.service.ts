import { Injectable } from '@angular/core';

import { Department } from './department';
import { DEPARTMENTS } from './mock-departments';

@Injectable()
export class DepartmentService {
	getDepartments(): Promise<Department[]>{
		return Promise.resolve(DEPARTMENTS);
	}
	getDepartment(id: number): Promise<Department> {
 		 return this.getDepartments()
             .then(departments => departments.find(department => department.id === id));
	}
}

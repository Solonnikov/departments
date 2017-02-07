import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Department } from './department';

@Injectable()
export class DepartmentService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private departmentsUrl = 'api/departments'; 

	constructor(private http: Http) { }

    getDepartments(): Promise<Department[]> {
      return this.http.get(this.departmentsUrl)
                 .toPromise()
                 .then(response => response.json().data as Department[])
                 .catch(this.handleError);
    }

    getDepartment(id: number): Promise<Department> {
  		const url = `${this.departmentsUrl}/${id}`;
  		return this.http.get(url)
    		.toPromise()
    		.then(response => response.json().data as Department)
    		.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
  	const url = `${this.departmentsUrl}/${id}`;
  	return this.http.delete(url, {headers: this.headers})
   	    .toPromise()
    	.then(() => null)
   		.catch(this.handleError);
    }

	create(name: string): Promise<Department> {
	    return this.http
	        .post(this.departmentsUrl, JSON.stringify({name: name}), {headers: this.headers})
	        .toPromise()
	        .then(res => res.json().data)
	        .catch(this.handleError);
	}

	update(department: Department): Promise<Department> {
  		const url = `${this.departmentsUrl}/${department.id}`;
  		return this.http
    		.put(url, JSON.stringify(department), {headers: this.headers})
    		.toPromise()
    		.then(() => department)
    		.catch(this.handleError);
	}

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

}

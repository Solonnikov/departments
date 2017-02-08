import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Department } from './department';

@Injectable()
export class DepartmentSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<Department[]> {
        return this.http
        .get(`app/departments/?name=${term}`)
        .map(response => response.json().data as Department[]);
    }
}

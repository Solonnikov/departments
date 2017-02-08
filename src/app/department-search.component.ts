import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { DepartmentSearchService } from './department-search.service';
import { Department } from './department';

@Component({
    moduleId: module.id,
    selector: 'department-search',
    templateUrl: './department-search.component.html',
    styleUrls: [ './department-search.component.css' ],
    providers: [DepartmentSearchService]
})

export class DepartmentSearchComponent implements OnInit {
    departments: Observable<Department[]>;
    private searchTerms = new Subject<string>();
  
    constructor(
        private departmentSearchService: DepartmentSearchService,
        private router: Router) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        this.departments = this.searchTerms
        .debounceTime(200)        
        .distinctUntilChanged()   
        .switchMap(term => term   

        ? this.departmentSearchService.search(term)
        
        : Observable.of<Department[]>([]))
        .catch(error => {

        console.log(error);
        return Observable.of<Department[]>([]);
        });
    }
    gotoDetail(department: Department): void {
        let link = ['/detail', department.id];
        this.router.navigate(link);
    }
} 

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
         <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
         <a routerLink="/departments" routerLinkActive="active">Departments</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Company Info';
}

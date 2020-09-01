import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponentCompotent implements OnInit {
    totalAngularPackages;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        // Simple GET request with response type <any>
        this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
            this.totalAngularPackages = data.total;
        });
    }
}

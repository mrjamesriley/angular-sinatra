import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'smart-table',
  templateUrl: './smart-table.component.html'
})
export class SmartTableComponent {

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];

  columns = [
    { prop: 'name'},
    { prop: 'username' },
    { prop: 'followers' }
  ]

  constructor(private http: HttpClient) {

    this.http.get("//localhost:4567/users").subscribe((response) => {

      this.rows = response['users']

    })
  }
}

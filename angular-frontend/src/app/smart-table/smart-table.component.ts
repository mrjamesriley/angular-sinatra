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
    { prop: 'name', sortable: true },
    { prop: 'username' },
    { prop: 'followers' }
  ]

  constructor(private http: HttpClient) {
    this.fetchUsers()
  }

  fetchUsers(opts={}) {

    console.log('fetching users with the options: ' + JSON.stringify(opts))

    var url = "//localhost:4567/users"

    if(opts['sortProp']) {
      url += `?sortProp=${opts['sortProp']}&sortDir=${opts['sortDir']}`
    }

    this.http.get(url).subscribe((response) => {
      this.rows = response['users']
    })

  }

  onSort(event) {
    console.log('now sorting...')

    var sortProperty  = event.sorts[0].prop
    var sortDirection = event.sorts[0].dir

    this.fetchUsers({
      sortProp: sortProperty,
      sortDir: sortDirection
    })

  }
}

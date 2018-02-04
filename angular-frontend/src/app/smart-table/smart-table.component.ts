import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'smart-table',
  templateUrl: './smart-table.component.html'
})
export class SmartTableComponent {

  rows

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

    var sortProperty  = event.sorts[0].prop
    var sortDirection = event.sorts[0].dir

    this.fetchUsers({
      sortProp: sortProperty,
      sortDir: sortDirection
    })

  }
}

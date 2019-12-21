import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-employee',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  employees: User[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
     this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
     );
  }

handleSuccessfulResponse(response) {
    this.employees = response;
}

deleteEmployee(employee: User): void {
  this.httpClientService.deleteUser(employee)
    .subscribe(data => {
      this.employees = this.employees.filter(u => u !== employee);
    });
  }
}

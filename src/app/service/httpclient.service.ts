import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

export class User {
  constructor(
    public userId: string,
    public userName: string,
    public password: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getUsers() {
    return this.httpClient.get<User[]>(AuthenticationService.APP_BASE_URL + 'users');
  }

  public deleteUser(user) {
    return this.httpClient.delete<User>(AuthenticationService.APP_BASE_URL + 'users/' + user.userId);
  }

  public createUser(user) {
    return this.httpClient.post<User>(AuthenticationService.APP_BASE_URL + 'users', user);
  }
}

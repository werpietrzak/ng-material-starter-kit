import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NewUserModel, UserCredentialsModel, UserModel } from "../../models/user.model";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  login(payload: UserCredentialsModel): Observable<UserCredentialsModel> {
    return this._httpClient.post<UserCredentialsModel>('https://fakestoreapi.com/auth/login', payload);
  }

  registerNewUser(payload: NewUserModel): Observable<NewUserModel> {
    return this._httpClient.post<NewUserModel>('https://fakestoreapi.com/users', payload);
  }

  getUser(id: string): Observable<UserModel> {
    return this._httpClient.get<UserModel>(`https://fakestoreapi.com/users/${id}`);
  }
}

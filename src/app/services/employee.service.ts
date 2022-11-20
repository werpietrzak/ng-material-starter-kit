import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NewEmployeeModel } from "../models/employee.model";
import { Observable } from "rxjs";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  createNewEmployee(payload: NewEmployeeModel): Observable<NewEmployeeModel> {
    return this._httpClient.post<NewEmployeeModel>('https://dummy.restapiexample.com/api/v1/create', payload);
  }
}

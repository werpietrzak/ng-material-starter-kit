import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EmployeeModel, EmployeeModelFromAPI, NewEmployeeModel } from "../../models/employee.model";
import { map, Observable } from "rxjs";
import { ApiResponse } from "../../models/api-response.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  createNewEmployee(payload: NewEmployeeModel): Observable<NewEmployeeModel> {
    return this._httpClient.post<NewEmployeeModel>('https://dummy.restapiexample.com/api/v1/create', payload);
  }

  deleteEmployee(id: number): Observable<EmployeeModel> {
    return this._httpClient.delete<EmployeeModel>(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
  }

  getAllEmployees(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeModelFromAPI[]>>('https://dummy.restapiexample.com/api/v1/employees')
      .pipe(map(employees => {
          return employees.data.map((employee: EmployeeModelFromAPI) => (
            {
              id: employee.id,
              name: employee.employee_name,
              salary: employee.employee_salary,
              age: employee.employee_age,
              img: employee.profile_image,
            }
          ))
      }));
  }
}

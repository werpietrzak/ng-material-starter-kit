import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, switchMap } from "rxjs";
import { EmployeeModel } from "../../models/employee.model";
import { EmployeeService } from "../../services/employee/employee.service";

@Component({
  selector: 'app-employees-master-details',
  styleUrls: ['./employees-master-details.component.scss'],
  templateUrl: './employees-master-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesMasterDetailsComponent {
  private _selectedEmployeeSubject: Subject<number> = new Subject();

  public selectedEmployee: Observable<number> = this._selectedEmployeeSubject.asObservable();

  public employees: Observable<EmployeeModel[]> = this._employeeService.getAllEmployees();

  public details: Observable<EmployeeModel> = this.selectedEmployee.pipe(
    switchMap(
    data => this._employeeService.getEmployee(data)
    )
  );

  constructor(private _employeeService: EmployeeService) {}

  selectEmployee(id: number): void {
    this._selectedEmployeeSubject.next(id);
  }
}

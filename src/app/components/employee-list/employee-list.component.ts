import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from "rxjs";
import { EmployeeService } from "../../services/employee/employee.service";
import { EmployeeModel } from "../../models/employee.model";

@Component({
  selector: 'employee-list',
  styleUrls: ['./employee-list.component.scss'],
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {}
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh: Observable<void> = this._refreshSubject.asObservable();
  employees = this._employeeService.getAllEmployees();
  refreshedEmployees: Observable<EmployeeModel[]> = this.refresh.pipe(switchMap(
    () => this._employeeService.getAllEmployees()
  ));

  onClickDeleteButton(id: number) {
    this._employeeService.deleteEmployee(id).subscribe(() => this._refreshSubject.next());
  }
}


import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of, Subject } from "rxjs";
import { EmployeeService } from "../../services/employee/employee.service";
import { EmployeeModel } from "../../models/employee.model";

@Component({
  selector: 'app-advanced-employee-list',
  styleUrls: ['./advanced-employee-list.component.scss'],
  templateUrl: './advanced-employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedEmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {}

  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('off');
  public order: Observable<string> = this._orderSubject.asObservable();
  orders: Observable<string[]> = of(['off', 'from highest', 'from lowest']);

  private _ageRangeSubject: Subject<string> = new Subject<string>();
  ageRange: Observable<string> = this._ageRangeSubject.asObservable();
  ageRanges: Observable<string[]> = of([
    'all', '0-20', '21-30', '31-40', '41-50', '51-100',
  ]);

  employees: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAllEmployees(),
    this.ageRange,
    this.order,
  ]).pipe(map(([employees, ageRange, order]: [EmployeeModel[], string, string]) => (
    employees.sort((a, b) => {
        if (a.salary > b.salary) return order === 'from lowest' ? 1 : -1;
        if (a.salary < b.salary) return order === 'from lowest' ? -1 : 1;
        return 0;
      }
    ).filter(employee => {
      if (ageRange === 'all' || ageRange === null) return true;
      const range = ageRange.split('-').map(item => Number(item));
      return Number(employee.age) >= range[0] && Number(employee.age) <= range[1];
    })
  )));

  sort(order: string): void {
    this._orderSubject.next(order);
  }

  selectAgeRange(ageRange: string): void {
    this._ageRangeSubject.next(ageRange);
  }
}

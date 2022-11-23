import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-employee-form',
  styleUrls: ['./new-employee-form.component.scss'],
  templateUrl: './new-employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewEmployeeFormComponent {
  constructor(private _employeeService: EmployeeService) {
  }

  newEmployeeForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
    salary: new FormControl(null, [Validators.required, Validators.min(1)]),
  })

  onSubmit(form: FormGroup) {
    this._employeeService.createNewEmployee(form.value).subscribe();
  }
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  styleUrls: ['./register-user.component.scss'],
  templateUrl: './register-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterUserComponent {
  constructor(private _userService: UserService) { }

  newUserForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    street: new FormControl(null, [Validators.required]),
    number: new FormControl(null, [Validators.required]),
    zipcode: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  })

  onSubmit(form: FormGroup): void {
    const values = { ...form.value };
    const {
      email,
      username,
      password,
      firstname,
      lastname,
      city,
      street,
      number,
      zipcode,
      phone
    } = values;

    this._userService.registerNewUser({
      email,
      username,
      password,
      name: {
        firstname,
        lastname,
      },
      address: {
        city,
        street,
        number,
        zipcode,
      },
      phone,
    }).subscribe();
  }
}

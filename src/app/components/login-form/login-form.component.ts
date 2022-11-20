import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  styleUrls: ['./login-form.component.scss'],
  templateUrl: './login-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  constructor(private _userService: UserService) { }

  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })

  onSubmit(form: FormGroup): void {
    this._userService.login(form.value).subscribe();
  }
}

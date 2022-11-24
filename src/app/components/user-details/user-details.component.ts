import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { map, Observable, switchMap } from "rxjs";
import { UserService } from "../../services/user/user.service";
import { UserModel } from "../../models/user.model";

@Component({
  selector: 'app-user-details',
  styleUrls: ['./user-details.component.scss'],
  templateUrl: './user-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
  ) {}

  params$: Observable<Partial<UserModel>> = this._activatedRoute.params.pipe(map(params => (
    { id: params['id'] }
  )));

  data$: Observable<UserModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._userService.getUser(data['id']))
  );
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivityService } from "../../services/activity/activity.service";
import { Observable } from "rxjs";
import { ActivityModel } from "../../models/activity.model";

@Component({
  selector: 'app-activity',
  styleUrls: ['./activity.component.scss'],
  templateUrl: './activity.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityComponent {
  constructor(private _activityService: ActivityService) {}

  data$: Observable<ActivityModel> = this._activityService.getActivity();
}

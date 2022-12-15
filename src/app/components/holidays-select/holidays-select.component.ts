import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HolidaysService } from "../../services/holidays/holidays.service";
import {Observable} from "rxjs";
import {HolidayModel} from "../../models/holiday.model";

@Component({
  selector: 'app-holidays-select',
  styleUrls: ['./holidays-select.component.scss'],
  templateUrl: './holidays-select.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidaysSelectComponent {
  constructor(private _holidaysService: HolidaysService) {}

  holidays: Observable<HolidayModel[]> = this._holidaysService.getHolidays();
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HolidaysService } from "../../services/holidays.service";

@Component({
  selector: 'app-holidays-select',
  styleUrls: ['./holidays-select.component.scss'],
  templateUrl: './holidays-select.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidaysSelectComponent {
  constructor(private _holidaysService: HolidaysService) {}

  holidays = this._holidaysService.getHolidays();
}

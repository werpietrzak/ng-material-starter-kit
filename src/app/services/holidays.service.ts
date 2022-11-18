import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HolidayModel } from "../models/holiday.model";

@Injectable()
export class HolidaysService {
  constructor(private _httpClient: HttpClient) {}

  getHolidays(): Observable<HolidayModel[]> {
    return this._httpClient.get<HolidayModel[]>('https://date.nager.at/api/v2/publicholidays/2020/US');
  }
}

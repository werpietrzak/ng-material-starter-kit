import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BeerModel } from "../models/beers.model";

@Injectable()
export class BeerService {
  constructor(private _httpClient: HttpClient) {}

  getBeers(values: any): Observable<BeerModel[]> {
    return this._httpClient.get<BeerModel[]>(`https://api.punkapi.com/v2/beers?page=${values.index + 1}&per_page=${values.size}`);
  }
}

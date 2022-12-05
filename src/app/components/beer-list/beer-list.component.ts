import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BeerService } from "../../services/beer.service";
import { BehaviorSubject, Observable } from "rxjs";
import { BeerModel } from "../../models/beers.model";

interface PaginationProps {
  index: number;
  size: number;
}

@Component({
  selector: 'app-beer-list',
  styleUrls: ['./beer-list.component.scss'],
  templateUrl: './beer-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerListComponent {
  constructor(private _beerService: BeerService) {}

  private _paginationSubject: BehaviorSubject<PaginationProps> = new BehaviorSubject<PaginationProps>({
    index: 0,
    size: 5,
  });
  public pagination: Observable<PaginationProps> = this._paginationSubject.asObservable();
  beers: Observable<BeerModel[]> = this._beerService.getBeers(this._paginationSubject.value);

  changePage($event: any) {
    console.log($event);
    this._paginationSubject.next({
      index: $event.pageIndex,
      size: $event.pageSize,
    })
    this.beers = this._beerService.getBeers(this._paginationSubject.value);
  }
}

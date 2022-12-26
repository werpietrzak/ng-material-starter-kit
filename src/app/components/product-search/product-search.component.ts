import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {combineLatest, Observable, map, BehaviorSubject, debounceTime} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-search',
  styleUrls: ['./product-search.component.scss'],
  templateUrl: './product-search.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchComponent {
  search = new FormGroup({ query: new FormControl() });

  private _searchQuerySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  // public searchQuery: Observable<string> = this._searchQuerySubject.asObservable();

  public searchQuery: Observable<string> = this.search.valueChanges.pipe(
    map(form => form.query),
    debounceTime(1000),
  );

  products: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAllProducts(),
    this.searchQuery,
  ]).pipe(map(([products, query]: [ProductModel[], string]) => {
    return products.filter(product => product.title.toLowerCase().startsWith(query.toLowerCase()))
  }));

  constructor(private _productsService: ProductsService) { }

  onSubmit(search: FormGroup): void {
    this._searchQuerySubject.next(search.get('query')?.value);
  }
}

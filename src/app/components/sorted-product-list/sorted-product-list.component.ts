import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductsService } from "../../services/products/products.service";
import { BehaviorSubject, combineLatest, map, Observable, of } from "rxjs";
import { ProductModel } from "../../models/product.model";

@Component({
  selector: 'app-sorted-product-list',
  styleUrls: ['./sorted-product-list.component.scss'],
  templateUrl: './sorted-product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortedProductListComponent {
  constructor(
    private _productsService: ProductsService,
  ) {}

  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');

  order: Observable<string> = this._orderSubject.asObservable();

  orders: Observable<string[]> = of(
    ['asc', 'desc']
  );

  products: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAllProducts(),
    this.order,
    ]).pipe(map(([products, order]: [ProductModel[], string]) => (
      products.sort((a, b) => {
        if (a.price > b.price) return order === 'asc' ? 1 : -1;
        if (a.price < b.price) return order === 'asc' ? -1 : 1;
        return 0;
      }
      )
  )));

  sort(order: string): void {
    this._orderSubject.next(order);
  }
}

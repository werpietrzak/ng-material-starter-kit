import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductsService } from "../../services/products/products.service";
import { BehaviorSubject, Observable, switchMap } from "rxjs";
import { ProductModel } from "../../models/product.model";

@Component({
  selector: 'product-list',
  styleUrls: ['./product-list-delete-button.component.scss'],
  templateUrl: './product-list-delete-button.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListDeleteButtonComponent {
  constructor(private _productsService: ProductsService) {}
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh: Observable<void> = this._refreshSubject.asObservable();
  data = this._productsService.getAllProducts();
  refreshedData: Observable<ProductModel[]> = this.refresh.pipe(switchMap(
    () => this._productsService.getAllProducts()
  ));

  onClickDeleteButton(id: number) {
    this._productsService.deleteProduct(id).subscribe(() => this._refreshSubject.next());
  }
}


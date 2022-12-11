import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ProductsService} from "../../services/products/products.service";
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-products-with-loading',
  styleUrls: ['./products-with-loading.component.scss'],
  templateUrl: './products-with-loading.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsWithLoadingComponent {
  public products: Observable<ProductModel[]> = this._productsService.getAllProducts();

  constructor(private _productsService: ProductsService) {}
}

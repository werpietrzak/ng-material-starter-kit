import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductsService } from "../../services/products/products.service";
import { ProductModel } from "../../models/product.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-product-table',
  styleUrls: ['./product-table.component.scss'],
  templateUrl: './product-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent {
  constructor(private _productsService: ProductsService) {}

  data$: Observable<ProductModel[]> = this._productsService.getAllProducts();
}

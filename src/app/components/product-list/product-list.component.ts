import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  constructor(private _productsService: ProductsService) {}

  data = this._productsService.getAllProducts();
}


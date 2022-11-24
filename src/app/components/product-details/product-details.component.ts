import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../services/products/products.service";
import { map, Observable, switchMap } from "rxjs";
import { ProductModel } from "../../models/product.model";

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService,
  ) {}

  params$: Observable<Partial<ProductModel>> = this._activatedRoute.params.pipe(map(params => (
    { id: params['id'] }
  )));

  data$: Observable<ProductModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productsService.getOneProduct(data['id']))
  );
}

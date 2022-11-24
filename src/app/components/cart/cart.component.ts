import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../services/products/products.service";
import { map, Observable, switchMap } from "rxjs";
import { CartModel } from "../../models/product.model";

@Component({
  selector: 'app-cart',
  styleUrls: ['./cart.component.scss'],
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService,
  ) {}

  params$: Observable<Partial<CartModel>> = this._activatedRoute.params.pipe(map(params => (
    { id: params['id'] }
  )));

  data$: Observable<CartModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productsService.getCartInfo(data['id']))
  );
}

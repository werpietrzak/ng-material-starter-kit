import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductsService } from "../../services/products/products.service";
import { combineLatest, map, Observable } from "rxjs";
import { ProductModel } from "../../models/product.model";
import { CategoriesService } from "../../services/categories/categories.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-filtered-list',
  styleUrls: ['./filtered-list.component.scss'],
  templateUrl: './filtered-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredListComponent {
  constructor(
    private _productsService: ProductsService,
    private _categoriesService: CategoriesService,
    private _activatedRoute: ActivatedRoute,
  ) {}

  products: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAllProducts(),
    this._activatedRoute.params,
  ]).pipe(map(([products, params]: [ProductModel[], Params]) => (
    products.filter(item => item.category === params['category'])
)));

  categories: Observable<string[]> = this._categoriesService.getAllCategories();
}

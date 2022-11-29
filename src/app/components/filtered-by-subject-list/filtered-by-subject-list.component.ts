import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductsService } from "../../services/products/products.service";
import { combineLatest, map, Observable, Subject } from "rxjs";
import { ProductModel } from "../../models/product.model";
import { CategoriesService } from "../../services/categories/categories.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-filtered-by-subject-list',
  styleUrls: ['./filtered-by-subject-list.component.scss'],
  templateUrl: './filtered-by-subject-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredBySubjectListComponent {
  constructor(
    private _productsService: ProductsService,
    private _categoriesService: CategoriesService,
    private _activatedRoute: ActivatedRoute,
  ) {}

  categories: Observable<string[]> = this._categoriesService.getAllCategories();

  private _categorySubject: Subject<string> = new Subject<string>();

  category: Observable<string> = this._categorySubject.asObservable();

  products: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAllProducts(),
    this.category,
    ]).pipe(map(([products, category]: [ProductModel[], string]) => (
      products.filter(item => item.category === category)
  )));

  selectCategory(category: string): void {
    this._categorySubject.next(category);
  }
}

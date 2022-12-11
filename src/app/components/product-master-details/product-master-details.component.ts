import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductsService } from "../../services/products/products.service";
import { Observable, Subject, switchMap } from "rxjs";
import { ProductModel } from "../../models/product.model";

@Component({
  selector: 'app-product-master-details',
  styleUrls: ['./product-master-details.component.scss'],
  templateUrl: './product-master-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductMasterDetailsComponent {
  private _selectedProductSubject: Subject<number> = new Subject();

  public selectedProductSubject: Observable<number> = this._selectedProductSubject.asObservable();

  public products: Observable<ProductModel[]> = this._productsService.getAllProducts();

  public details: Observable<ProductModel> = this.selectedProductSubject.pipe(
    switchMap(
    data => this._productsService.getOneProduct(data)
    )
  );

  constructor(private _productsService: ProductsService) {}

  selectProduct(id: number): void {
    this._selectedProductSubject.next(id);
  }
}

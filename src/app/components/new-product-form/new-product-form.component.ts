import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from "../../services/categories.service";

@Component({
  selector: 'app-new-product-form',
  styleUrls: ['./new-product-form.component.scss'],
  templateUrl: './new-product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProductFormComponent {
  constructor(
    private _productsService: ProductsService,
    private _categoriesService: CategoriesService,
  ) { }

  categories = this._categoriesService.getAllCategories();

  newProductForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(0.01)]),
    description: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
  })

  onSubmit(form: FormGroup) {
    this._productsService.addNewProduct(form.value).subscribe();
  }
}

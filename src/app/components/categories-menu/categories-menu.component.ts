import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CategoriesService } from "../../services/categories/categories.service";

@Component({
  selector: 'app-categories-menu',
  styleUrls: ['./categories-menu.component.scss'],
  templateUrl: './categories-menu.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesMenuComponent {
  constructor(private _categoriesService: CategoriesService) {}

  categories = this._categoriesService.getAllCategories();
}

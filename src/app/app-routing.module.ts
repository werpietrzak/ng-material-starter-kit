import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsComponent } from "./components/crypto-chips/crypto-chips.component";
import { CryptoChipsComponentModule } from "./components/crypto-chips/crypto-chips.component-module";
import { CryptoServiceModule } from "./services/crypto.service-module";
import { HolidaysSelectComponent } from "./components/holidays-select/holidays-select.component";
import { HolidaysSelectComponentModule } from "./components/holidays-select/holidays-select.component-module";
import { HolidaysServiceModule } from "./services/holidays.service-module";
import { CheckboxCategoriesComponent } from "./components/checkbox-categories/checkbox-categories.component";
import { CheckboxCategoriesComponentModule } from "./components/checkbox-categories/checkbox-categories.component-module";
import { CategoriesMenuComponent } from "./components/categories-menu/categories-menu.component";
import { CategoriesMenuComponentModule } from "./components/categories-menu/categories-menu.component-module";
import { NewProductFormComponent } from "./components/new-product-form/new-product-form.component";
import { NewProductFormComponentModule } from "./components/new-product-form/new-product-form.component-module";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'crypto', component: CryptoChipsComponent },
    { path: 'public-holidays', component: HolidaysSelectComponent },
    { path: 'checkbox-categories', component: CheckboxCategoriesComponent },
    { path: 'categories-menu', component: CategoriesMenuComponent },
    { path: 'create-product', component: NewProductFormComponent },
  ]),
    ProductListComponentModule,
    ProductsServiceModule,
    CategoryListComponentModule,
    CategoriesServiceModule,
    CryptoChipsComponentModule,
    CryptoServiceModule,
    HolidaysSelectComponentModule,
    HolidaysServiceModule,
    CheckboxCategoriesComponentModule,
    CategoriesMenuComponentModule,
    NewProductFormComponentModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { NewEmployeeFormComponent } from "./components/new-employee-form/new-employee-form.component";
import { NewEmployeeFormComponentModule } from "./components/new-employee-form/new-employee-form.component-module";
import { EmployeeServiceModule } from "./services/employee.service-module";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { LoginFormComponentModule } from "./components/login-form/login-form.component-module";
import { UserServiceModule } from "./services/user.service-module";
import { RegisterUserComponent } from "./components/register-user/register-user.component";
import { RegisterUserComponentModule } from "./components/register-user/register-user.component-module";
import { CatFactsComponent } from "./components/cat-facts/cat-facts.component";
import { CatFactsComponentModule } from "./components/cat-facts/cat-facts.component-module";
import { CatFactsServiceModule } from "./services/cat-facts.service-module";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'crypto', component: CryptoChipsComponent },
    { path: 'public-holidays', component: HolidaysSelectComponent },
    { path: 'checkbox-categories', component: CheckboxCategoriesComponent },
    { path: 'categories-menu', component: CategoriesMenuComponent },
    { path: 'create-product', component: NewProductFormComponent },
    { path: 'create-employee', component: NewEmployeeFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterUserComponent },
    { path: 'cat-facts', component: CatFactsComponent },
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
    NewEmployeeFormComponentModule,
    EmployeeServiceModule,
    LoginFormComponentModule,
    UserServiceModule,
    RegisterUserComponentModule,
    CatFactsComponentModule,
    CatFactsServiceModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

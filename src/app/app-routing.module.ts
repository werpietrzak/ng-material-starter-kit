import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoriesServiceModule } from './services/categories/categories.service-module';
import { CryptoChipsComponent } from "./components/crypto-chips/crypto-chips.component";
import { CryptoChipsComponentModule } from "./components/crypto-chips/crypto-chips.component-module";
import { CryptoServiceModule } from "./services/crypto/crypto.service-module";
import { HolidaysSelectComponent } from "./components/holidays-select/holidays-select.component";
import { HolidaysSelectComponentModule } from "./components/holidays-select/holidays-select.component-module";
import { HolidaysServiceModule } from "./services/holidays/holidays.service-module";
import { CheckboxCategoriesComponent } from "./components/checkbox-categories/checkbox-categories.component";
import { CheckboxCategoriesComponentModule } from "./components/checkbox-categories/checkbox-categories.component-module";
import { CategoriesMenuComponent } from "./components/categories-menu/categories-menu.component";
import { CategoriesMenuComponentModule } from "./components/categories-menu/categories-menu.component-module";
import { NewProductFormComponent } from "./components/new-product-form/new-product-form.component";
import { NewProductFormComponentModule } from "./components/new-product-form/new-product-form.component-module";
import { NewEmployeeFormComponent } from "./components/new-employee-form/new-employee-form.component";
import { NewEmployeeFormComponentModule } from "./components/new-employee-form/new-employee-form.component-module";
import { EmployeeServiceModule } from "./services/employee/employee.service-module";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { LoginFormComponentModule } from "./components/login-form/login-form.component-module";
import { UserServiceModule } from "./services/user/user.service-module";
import { RegisterUserComponent } from "./components/register-user/register-user.component";
import { RegisterUserComponentModule } from "./components/register-user/register-user.component-module";
import { CatFactsComponent } from "./components/cat-facts/cat-facts.component";
import { CatFactsComponentModule } from "./components/cat-facts/cat-facts.component-module";
import { CatFactsServiceModule } from "./services/cat-facts/cat-facts.service-module";
import { AgePredictionComponent } from "./components/age-prediction/age-prediction.component";
import { AgePredictionServiceModule } from "./services/age-prediction/age-prediction.service-module";
import { AgePredictionComponentModule } from "./components/age-prediction/age-prediction.component-module";
import { ProductTableComponent } from "./components/product-table/product-table.component";
import { ProductTableComponentModule } from "./components/product-table/product-table.component-module";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductDetailsComponentModule } from "./components/product-details/product-details.component-module";
import { CartComponent } from "./components/cart/cart.component";
import { CartComponentModule } from "./components/cart/cart.component-module";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { UserDetailsComponentModule } from "./components/user-details/user-details.component-module";
import { ActivityComponent } from "./components/activity/activity.component";
import { ActivityComponentModule } from "./components/activity/activity.component-module";
import { ActivityServiceModule } from "./services/activity/activity.service-module";
import { FilteredListComponent } from "./components/filtered-list/filtered-list.component";
import { FilteredListComponentModule } from "./components/filtered-list/filtered-list.component-module";
import { FilteredBySubjectListComponent } from "./components/filtered-by-subject-list/filtered-by-subject-list.component";
import {
  FilteredBySubjectListComponentModule
} from "./components/filtered-by-subject-list/filtered-by-subject-list.component-module";
import { SortedProductListComponent } from "./components/sorted-product-list/sorted-product-list.component";
import { SortedProductListComponentModule } from "./components/sorted-product-list/sorted-product-list.component-module";
import { AdvancedEmployeeListComponent } from "./components/advanced-employee-list/advanced-employee-list.component";
import {
  AdvancedEmployeeListComponentModule
} from "./components/advanced-employee-list/advanced-employee-list.component-module";
import { BeerListComponent } from "./components/beer-list/beer-list.component";
import { BeerListComponentModule } from "./components/beer-list/beer-list.component-module";
import { BeerServiceModule } from "./services/beer.service-module";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'activity', component: ActivityComponent },
    { path: 'advanced-employee-list', component: AdvancedEmployeeListComponent },
    { path: 'age/:name', component: AgePredictionComponent },
    { path: 'beer-list', component: BeerListComponent },
    { path: 'cart/:id', component: CartComponent },
    { path: 'cat-facts', component: CatFactsComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'categories-menu', component: CategoriesMenuComponent },
    { path: 'checkbox-categories', component: CheckboxCategoriesComponent },
    { path: 'create-employee', component: NewEmployeeFormComponent },
    { path: 'create-product', component: NewProductFormComponent },
    { path: 'crypto', component: CryptoChipsComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'product-search', component: ProductTableComponent },
    { path: 'products2', component: ProductListComponent },
    { path: 'products', component: FilteredBySubjectListComponent },
    { path: 'products/:category', component: FilteredListComponent },
    { path: 'public-holidays', component: HolidaysSelectComponent },
    { path: 'register', component: RegisterUserComponent },
    { path: 'sorted-products', component: SortedProductListComponent },
    { path: 'user/:id', component: UserDetailsComponent },
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
    AgePredictionServiceModule,
    AgePredictionComponentModule,
    ProductTableComponentModule,
    ProductDetailsComponentModule,
    CartComponentModule,
    UserDetailsComponentModule,
    ActivityComponentModule,
    ActivityServiceModule,
    FilteredListComponentModule,
    FilteredBySubjectListComponentModule,
    SortedProductListComponentModule,
    AdvancedEmployeeListComponentModule,
    BeerListComponentModule,
    BeerServiceModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

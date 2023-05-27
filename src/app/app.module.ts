import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './component/product-list/product-list.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { HomeComponent } from './home/home/home.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProdcutAgeComponent } from './pages/prodcut-age/prodcut-age.component';

// decorators
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    AboutPageComponent,
    PageNotFoundComponent,
    HomePageComponent,
    DashboardComponent,
    AdminProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent,
    AdminComponent,
    ProdcutAgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

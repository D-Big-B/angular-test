import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulesModule } from './modules/modules.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/tab/categories/categories.component';
import { ProductsComponent } from './components/tab/products/products.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CategoriesComponent, ProductsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ModulesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

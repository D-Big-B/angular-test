import { Component } from '@angular/core';
import data from './../assets/data/A4.json';
import { CompanyInfo, CategoriesInfo, ProductsInfo } from 'src/a4interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'choudhviA4';
  companyInfo: CompanyInfo = data['company'];
  categoriesInfo: CategoriesInfo[] = data['categories'];
  productsInfo: ProductsInfo[] = data['products'];
}

import { Component, Input, OnInit } from '@angular/core';
import { ProductsInfo } from 'src/a4interface';
import { CategoriesInfo } from 'src/a4interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() productsInfo!: ProductsInfo[];
  @Input() categoriesInfo!: CategoriesInfo[];

  constructor() {}

  ngOnInit(): void {}

  selectedCategoryIndex!: number;

  categorySelect(catId: number) {
    console.log(catId);
    this.selectedCategoryIndex = catId;
  }
}

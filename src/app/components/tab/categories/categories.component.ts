import { Component, Input, OnInit } from '@angular/core';
import { CategoriesInfo } from 'src/a4interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  @Input() categoriesInfo!: CategoriesInfo[];
  constructor() {}

  ngOnInit(): void {}
}

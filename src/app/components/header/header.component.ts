import { Component, OnInit, Input } from '@angular/core';
import { CompanyInfo } from 'src/a4interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() companyInfo!: CompanyInfo;

  constructor() {}

  ngOnInit(): void {}
  showPopUp: boolean = false;
  togglePopUp() {
    this.showPopUp = !this.showPopUp;
  }
}

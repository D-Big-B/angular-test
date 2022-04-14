export interface CompanyInfo {
  companyName: string;
  companyEmail: string;
  companyTaxCode: string;
  companyPhoto: string;
}

export interface CategoriesInfo {
  catid: number;
  description: string;
  catimg: string;
}

export interface ProductsInfo {
  ProductID: number;
  catid: number;
  Name: string;
  Price: Number;
  Brand: string;
  Color: string;
  RatingAvg: number;
  InventoryCount: number;
}

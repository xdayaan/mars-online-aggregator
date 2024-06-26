import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { data } from "../data/data";
import { ActionBar } from "./actions.component";
import { FilterService } from "./filter.service";
import { ProductService } from "./product.service";
import { EditProductComponent } from "./edit-product.component";

@Component({
  standalone: true,
  selector: "product",
  templateUrl: `./product.component.html`,
  imports: [CommonModule, ActionBar, EditProductComponent],
})
export class Product implements OnInit {
  data = data;
  filteredData = data;

  constructor(
    public productService: ProductService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.filterService.filter$.subscribe(filter => {
      this.applyFilters(filter);
    });
  }

  applyFilters(filter: any) {
    this.filteredData = this.data.filter(item => {
      return (!filter.qsr || item.qsr === filter.qsr) &&
             (!filter.salesChannel || item.sales_channel === filter.salesChannel) &&
             (!filter.country || item.country === filter.country) &&
             (!filter.state || item.state === filter.state) &&
             (!filter.city || item.city === filter.city) &&
             (!filter.store || item.store === filter.store);
    });
  }

  onSelectionChange(value: number): void {
    const selectedProduct = this.data.find(item => item.id === value) || null;
    this.productService.selectProduct(selectedProduct);
  }
}

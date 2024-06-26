import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'actions',
  templateUrl: './actions.component.html',
  imports: [CommonModule],
})
export class ActionBar {
  constructor(private productService: ProductService) {}

  openEditProductDialog(): void {
    this.productService.showEditDialog(true);
  }
}

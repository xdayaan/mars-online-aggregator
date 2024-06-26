import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ProductService } from './product.service';
import { QSR, Category, Item, categories } from '../data/data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  imports: [CommonModule, FormsModule],
})
export class EditProductComponent implements OnInit {
  product: QSR | null = null;
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  selectedItem: Item | null = null;
  newPriority = 1;

  constructor(private productService: ProductService, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.productService.selectedProduct$.subscribe(product => {
      this.product = product;
      if (this.product) {
        this.categories = categories.filter(cat => cat.qsr_id === this.product!.id);
      } else {
        this.categories = [];
      }
    });
  }

  openPriorityModal() {
    const modal = this.el.nativeElement.querySelector('#priorityModal');
    if (modal) {
      this.renderer.setStyle(modal, 'display', 'block');
      this.renderer.addClass(modal, 'show');
    }
  }

  closePriorityModal() {
    const modal = this.el.nativeElement.querySelector('#priorityModal');
    if (modal) {
      this.renderer.setStyle(modal, 'display', 'none');
      this.renderer.removeClass(modal, 'show');
    }
    this.selectedCategory = null;
    this.selectedItem = null;
  }

  savePriority() {
    if (this.selectedCategory && this.product) {
      this.productService.updatePriority(this.product.id, this.selectedCategory.id, this.selectedItem?.id ?? null, this.newPriority);
    }
    this.closePriorityModal();
  }

  setSelectedCategory(category: Category, item: Item | null = null): void {
    this.selectedCategory = category;
    this.selectedItem = item;
    this.newPriority = item ? item.priority : category.priority;
  }

  openEditModal() {
    const modal = this.el.nativeElement.querySelector('#editModal');
    if (modal) {
      this.renderer.setStyle(modal, 'display', 'block');
      this.renderer.setStyle(modal, 'width', '100%');
      this.renderer.addClass(modal, 'show');
    }
  }

  closeEditModal() {
    const modal = this.el.nativeElement.querySelector('#editModal');
    if (modal) {
      this.renderer.setStyle(modal, 'display', 'none');
      this.renderer.removeClass(modal, 'show');

        this.product = null;

        this.productService.showEditDialog(false)
      
    
    }
  }

  submitChanges() {
    if (this.selectedItem) {
      this.productService.updateItem(this.selectedItem);
    }
    this.closeEditModal();
  }
}

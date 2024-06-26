import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QSR, Category, Item, categories } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private selectedProductSource = new BehaviorSubject<QSR | null>(null);
  selectedProduct$ = this.selectedProductSource.asObservable();

  private editDialogVisibleSource = new BehaviorSubject<boolean>(false);
  editDialogVisible$ = this.editDialogVisibleSource.asObservable();

  selectProduct(product: QSR | null): void {
    this.selectedProductSource.next(product);
  }

  showEditDialog(show: boolean): void {
    this.editDialogVisibleSource.next(show);
  }

  updatePriority(qsrId: number, categoryId: number, itemId: number | null, newPriority: number) {
    const category = categories.find(cat => cat.qsr_id === qsrId && cat.id === categoryId);
    if (category) {
      if (itemId === null) {
        category.priority = newPriority;
      } else {
        const item = category.items.find(item => item.id === itemId);
        if (item) {
          item.priority = newPriority;
        }
      }
    }
  }

  updateItem(updatedItem: Item) {
    for (const category of categories) {
      const itemIndex = category.items.findIndex(item => item.id === updatedItem.id);
      if (itemIndex !== -1) {
        category.items[itemIndex] = updatedItem;
        break;
      }
    }
  }
}

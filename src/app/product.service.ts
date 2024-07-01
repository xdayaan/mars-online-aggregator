import { Injectable } from '@angular/core';
import { BehaviorSubject, max } from 'rxjs';
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
    console.log(category)
    if (category) {
      if (itemId === null) {
        this.swapCategoryPriority(category, newPriority, qsrId);
      } else {
        const item = category.items.find(item => item.id === itemId);
        if (item) {
          this.swapItemPriority(category, item, newPriority);
        }
      }
    }
  }

  private swapCategoryPriority(category: Category, newPriority: number, qsrId: number) {
    if (newPriority < 1) newPriority = 1;
    const qsr_cats = categories.filter(category => category.qsr_id === qsrId);
    console.log("qsrId", qsrId)
    console.log(qsr_cats)
    const maxPriority = qsr_cats.length;
    if (newPriority > maxPriority) newPriority = maxPriority; 

    console.log("new priority", newPriority)
    console.log("max Priority", maxPriority)

    if (newPriority < category.priority) {
      return; // Prevent lowering priority
    }

    const existingCategory = categories.find(cat => cat.priority == newPriority && cat.qsr_id == qsrId);
    console.log("Existing category", existingCategory)
    if (existingCategory) {
      existingCategory.priority = category.priority;
    }
    category.priority = newPriority;

    this.sortCategoriesByPriority();
  }

  private swapItemPriority(category: Category, item: Item, newPriority: number) {
    if (newPriority < 1) newPriority = 1;
    const maxPriority = category.items.length;
    if (newPriority > maxPriority) newPriority = maxPriority;

    if (newPriority < item.priority) {
      return; // Prevent lowering priority
    }

    const existingItem = category.items.find(i => i.priority == newPriority);
    if (existingItem) {
      existingItem.priority = item.priority;
    }
    item.priority = newPriority;

    this.sortItemsByPriority(category);
  }

  private sortCategoriesByPriority() {
    categories.sort((a, b) => a.priority - b.priority);
  }

  private sortItemsByPriority(category: Category) {
    category.items.sort((a, b) => a.priority - b.priority);
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

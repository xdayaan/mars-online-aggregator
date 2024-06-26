import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar.component';
import { ActionBar } from './actions.component';
import { Product } from './product.component';
import { FilterService } from './filter.service';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product.component';
import { ProductService } from './product.service';



@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ActionBar, Navbar, FilterService, EditProductComponent, ProductService],
  imports: [RouterOutlet, Navbar, ActionBar, Product, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mars-online-aggregator';
}
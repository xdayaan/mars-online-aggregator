// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar.component';
import { ActionBar } from './actions.component';
import { Product } from './product.component';
import { FilterService } from './filter.service';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product.component';
import { ProductService } from './product.service';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ActionBar, Navbar, FilterService, EditProductComponent, ProductService],
  imports: [RouterOutlet, CommonModule, Navbar, ActionBar, Product, FormsModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mars-online-aggregator';
  login = true;
  app = false;

  onLoginSuccess(isLoggedIn: boolean) {
    if (isLoggedIn) {
      this.login = false;
      this.app = true;
    }
  }
}

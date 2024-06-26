import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { data } from '../data/data';
import { FilterService } from './filter.service';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    imports: [CommonModule, FormsModule]
})
export class Navbar {
    data = data;
    uniqueQsr: string[] = [];
    uniqueSalesChannel: string[] = [];
    uniqueCountry: string[] = [];
    uniqueState: string[] = [];
    uniqueCity: string[] = [];
    uniqueStore: string[] = [];

    selectedQsr: string = '';
    selectedSalesChannel: string = '';
    selectedCountry: string = '';
    selectedState: string = '';
    selectedCity: string = '';
    selectedStore: string = '';

    constructor(private filterService: FilterService) {
        this.initializeFilters();
    }

    initializeFilters() {
        this.uniqueQsr = [...new Set(this.data.map(item => item.qsr))];
        this.uniqueSalesChannel = [...new Set(this.data.map(item => item.sales_channel))];
        this.uniqueCountry = [...new Set(this.data.map(item => item.country))];
        this.uniqueState = [...new Set(this.data.map(item => item.state))];
        this.uniqueCity = [...new Set(this.data.map(item => item.city).filter(city => city))];
        this.uniqueStore = [...new Set(this.data.map(item => item.store).filter(store => store))];
    }

    applyFilters() {
        this.filterService.setFilter({
            qsr: this.selectedQsr,
            salesChannel: this.selectedSalesChannel,
            country: this.selectedCountry,
            state: this.selectedState,
            city: this.selectedCity,
            store: this.selectedStore,
        });
    }
}

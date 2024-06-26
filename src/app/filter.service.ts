import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Filter {
    qsr: string;
    salesChannel: string;
    country: string;
    state: string;
    city: string;
    store: string;
}

@Injectable({
    providedIn: 'root',
})
export class FilterService {
    private filterSubject = new BehaviorSubject<Filter>({
        qsr: '',
        salesChannel: '',
        country: '',
        state: '',
        city: '',
        store: '',
    });

    filter$ = this.filterSubject.asObservable();

    setFilter(filter: Filter) {
        this.filterSubject.next(filter);
    }
}

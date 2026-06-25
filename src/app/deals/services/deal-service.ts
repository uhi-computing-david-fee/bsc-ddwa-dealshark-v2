import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Deal } from '../models/deal.model';
import { GameDetail } from '../models/deal-full.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '../models/store.model';
import { MessageService } from 'primeng/api';
import { DealFilters } from '../models/deal-filter.model';

@Injectable({
  providedIn: 'root',
})
export class DealService {

  constructor() {
    this.getStores();
  }

  private stores: Store[] = []; // local copy only
  stores$  = new BehaviorSubject<Store[]>([]); // public stream

  private http = inject(HttpClient);
  private messageService = inject(MessageService);

  getDeals(filters: DealFilters = {}): Observable<Deal[]> {
    let params = new HttpParams();
    if (filters.storeID) params = params.set('storeID', filters.storeID);
    if (filters.sortBy) params = params.set('sortBy', filters.sortBy);
    if (filters.upperPrice) params = params.set('upperPrice', filters.upperPrice);
    if (filters.onSale) params = params.set('onSale', filters.onSale);

    return this.http.get<Deal[]>('https://www.cheapshark.com/api/1.0/deals', { params });
  }

  getGame(id: string) {     
    const params = new HttpParams().set('id', id);
    return this.http.get<GameDetail>(`https://www.cheapshark.com/api/1.0/games`, { params });
  }

  private getStores() {
    this.http.get<Store[]>('https://www.cheapshark.com/api/1.0/stores').subscribe({
        next: stores => {
          this.stores = stores;
          this.stores$.next(stores);
        },
        error: err => {
          this.messageService.add({
            severity: 'error',
            summary: 'Stores Error',
            detail: 'Could not load store information, please reload page',
          });
        }
    });
  }

  getStoreByID(id: string): Store | undefined {
    return this.stores.find(s => s.storeID === id);
  }

  getStoreName(id: string): string {
    return this.getStoreByID(id)?.storeName ?? 'Loading store...';
  }

  getStoreIcon(id: string): string {
    return 'https://www.cheapshark.com' + this.getStoreByID(id)?.images.icon || 'https://www.cheapshark.com/img/stores/icons/0.png';
  }

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Deal } from '../models/deal.model';
import { GameDetail } from '../models/deal-full.model';
import { Observable } from 'rxjs';
import { Store } from '../models/store.model';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class DealService {

  constructor() {
    this.getStores().subscribe({
      next: data => {
        this.stores = data;
      },
      error: err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Stores Error',
          detail: 'Could not load store information, please reload page',
        })
      }
    })
  }

  stores: Store[] = [];
  private http = inject(HttpClient);
  private messageService = inject(MessageService);

  getDeals(): Observable<Deal[]> {
    return this.http.get<Deal[]>('https://www.cheapshark.com/api/1.0/deals');
  }

  getGame(id: string) {     
    const params = new HttpParams().set('id', id);
    return this.http.get<GameDetail>(`https://www.cheapshark.com/api/1.0/games`, { params });
  }

  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>('https://www.cheapshark.com/api/1.0/stores');
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

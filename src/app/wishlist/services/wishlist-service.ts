import { inject, Injectable } from '@angular/core';
import { Deal } from '../../deals/models/deal.model';
import { AuthService } from '../../auth/services/auth-service';
import { supabase } from '../../auth/services/supabase.client';
import { BehaviorSubject, from } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {

  private authService = inject(AuthService);
  private messages = inject(MessageService);

  wishlist$ = new BehaviorSubject<Deal[]>([]);

  constructor() {
    this.authService.currentUser$.subscribe({
      next: user => {
        if (user) {
          // new user - load wishlist
          this.load();
        } 
        else {
          // user ended session - clear wishlist
          this.wishlist$.next([]);
        }
      }
    })
  }

  load() {
    from(supabase.from('wishlist').select('*')).subscribe({
      next: res => {
        if (res.error) {
          this.fail('Could not load your wishlist');
          return;
        }
        const deals = res.data.map(row => this.mapWishlistRowToDeal(row));   
        this.wishlist$.next(deals);
      },
      error: err => { this.fail('Could not load your wishlist'); }
    })
  }

  add(item: Deal) {
    from(supabase.from('wishlist').insert({
      game_id: item.gameID,
      title: item.title,
      store_id: item.storeID,
      sale_price: item.salePrice,
      normal_price: item.normalPrice,
      savings: item.savings,
      deal_id: item.dealID,
      thumb: item.thumb
    }))
    .subscribe({
      next: res => {
        if (res.error) {
          this.fail('Could not add to your wishlist');
          return;
        }
        this.wishlist$.next([...this.wishlist$.value, item]);
      },
      error: err => { this.fail('Could not add to your wishlist'); }
    });
  }

  remove(gameID: string) {
    from(supabase.from('wishlist').delete().eq('game_id', gameID)).subscribe({
      next: res => {
        if (res.error) {
          this.fail('Could not remove from your wishlist');
          return;
        }
        this.wishlist$.next(this.wishlist$.value.filter(i => i.gameID !== gameID));
      },
      error: err => { this.fail('Could not remove from your wishlist'); }
    })
  }

  private mapWishlistRowToDeal(row: any): Deal {
    return {
      gameID: row.game_id,
      title: row.title,
      storeID: row.store_id,
      salePrice: row.sale_price,
      normalPrice: row.normal_price,
      savings: row.savings,
      dealID: row.deal_id,
      thumb: row.thumb
    };
  }
  
  private fail(detail: string) {
    this.messages.add({ severity: 'error', summary: 'Wishlist', detail });
    this.wishlist$.next(this.wishlist$.value); // re-emit so a pending loading state resolves
  }

}

import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DealService } from '../../services/deal-service';
import { LoadSpinner } from '../../../shared/components/load-spinner/load-spinner';
import { catchError, of, Subscription } from 'rxjs';
import { AuthService } from '../../../auth/services/auth-service';
import { WishlistService } from '../../../wishlist/services/wishlist-service';
import { Deal } from '../../models/deal.model';
import { GameDetail } from '../../models/deal-full.model';

@Component({
  selector: 'app-deal-full-page',
  imports: [CurrencyPipe, ButtonModule, TagModule, AsyncPipe, LoadSpinner],
  templateUrl: './deal-full-page.html',
  styleUrl: './deal-full-page.scss',
})
export class DealFullPage implements OnInit, OnDestroy {

  private route = inject(ActivatedRoute); 
  private wishlistService = inject(WishlistService);
  dealService = inject(DealService);
  authService = inject(AuthService);

  errorMessage = '';
  wishlistSub = new Subscription;
  isWishlist = false;
  isWishlistLoading = true;

  private id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.wishlistSub = this.wishlistService.wishlist$.subscribe({
      next: items => {
        console.log(items)
        this.isWishlistLoading = false; // resolve load on recieve
        this.isWishlist = items.some(item => item.gameID === this.id);
      }
    })
  }

  game$ = this.dealService.getGame(this.id!).pipe(
    catchError(error => {
      this.errorMessage = 'Sorry, we could not load this game.';
      return of(null);
    })
  )
  
  getSavings(savings: string): string {
    return `-${Math.round(parseFloat(savings))}%`;
  }

  addToWishList(game: GameDetail) {
    this.isWishlistLoading = true;
    const deal: Deal = {
      gameID: this.id!,
      title:  game.info.title,
      storeID: game.deals[0].storeID,       
      salePrice: game.deals[0].price,         
      normalPrice: game.deals[0].retailPrice,       
      savings: game.deals[0].savings,           
      dealID: game.deals[0].dealID,            
      thumb: game.info.thumb           
    }

    this.wishlistService.add(deal);
  }

  removeFromWishlist() {
    this.isWishlistLoading = true;
    this.wishlistService.remove(this.id!);
  }

  ngOnDestroy(): void {
    this.wishlistSub.unsubscribe();
  }
}

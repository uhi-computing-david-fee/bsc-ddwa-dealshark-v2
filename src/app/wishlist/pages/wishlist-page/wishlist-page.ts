import { Component, inject } from '@angular/core';
import { WishlistService } from '../../services/wishlist-service';
import { DealList } from '../../../deals/ui/deal-list/deal-list';
import { AsyncPipe } from '@angular/common';
import { LoadSpinner } from '../../../shared/components/load-spinner/load-spinner';

@Component({
  selector: 'app-wishlist-page',
  imports: [DealList, AsyncPipe, LoadSpinner],
  templateUrl: './wishlist-page.html',
  styleUrl: './wishlist-page.scss',
})
export class WishlistPage {

  private wishlistService = inject(WishlistService);
  wishlist$ = this.wishlistService.wishlist$;

}

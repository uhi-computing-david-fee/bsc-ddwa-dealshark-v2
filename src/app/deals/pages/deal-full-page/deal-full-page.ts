import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DealService } from '../../services/deal-service';
import { LoadSpinner } from '../../../shared/components/load-spinner/load-spinner';
import { catchError, of } from 'rxjs';
import { AuthService } from '../../../auth/services/auth-service';

@Component({
  selector: 'app-deal-full-page',
  imports: [CurrencyPipe, ButtonModule, TagModule, AsyncPipe, LoadSpinner],
  templateUrl: './deal-full-page.html',
  styleUrl: './deal-full-page.scss',
})
export class DealFullPage {

  private route = inject(ActivatedRoute); 
  dealService = inject(DealService);
  authService = inject(AuthService);

  errorMessage = '';
  private id = this.route.snapshot.paramMap.get('id');
  game$ = this.dealService.getGame(this.id!).pipe(
    catchError(error => {
      this.errorMessage = 'Sorry, we could not load this game.';
      return of(null);
    })
  )

  getSavings(savings: string): string {
    return `-${Math.round(parseFloat(savings))}%`;
  }
}

import { Component, Input } from '@angular/core';
import { Deal } from '../../models/deal.model';

@Component({
  selector: 'app-deal-list-item',
  imports: [],
  templateUrl: './deal-list-item.html',
  styleUrl: './deal-list-item.scss',
})
export class DealListItem {
  @Input({required: true}) deal!: Deal;

  getSavings(savings: string): string {
    return `-${Math.round(parseFloat(savings))}%`;
  }
}

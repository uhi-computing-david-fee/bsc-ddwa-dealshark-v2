import { Component, Input } from '@angular/core';
import { Deal } from '../../models/deal.model';
import { DealListItem } from '../deal-list-item/deal-list-item';

@Component({
  selector: 'app-deal-list',
  imports: [DealListItem],
  templateUrl: './deal-list.html',
  styleUrl: './deal-list.scss',
})
export class DealList {

  @Input({required: true}) deals: Deal[] = [];

}

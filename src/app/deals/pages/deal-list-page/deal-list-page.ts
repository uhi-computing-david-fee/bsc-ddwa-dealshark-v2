import { Component, inject, OnInit } from '@angular/core';
import { DealList } from "../../ui/deal-list/deal-list";
import { DealService } from '../../services/deal-service';
import { Deal } from '../../models/deal.model';
import { LoadSpinner } from "../../../shared/components/load-spinner/load-spinner";
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-deal-list-page',
  imports: [DealList, LoadSpinner, MessageModule],
  templateUrl: './deal-list-page.html',
  styleUrl: './deal-list-page.scss',
})
export class DealListPage implements OnInit {
  private dealService = inject(DealService);

  deals: Deal[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    this.fetchDeals();
  }

  fetchDeals() {
    this.loading = true; // set again for later calls in filter
    this.error = '';

    this.dealService.getDeals().subscribe({
      next: data => {
        // function to run on data recieved
        this.deals = data;
        this.loading = false;
      },
      error: err => {
        // function to run on error recieved
        this.error = 'Could not fetch deals. Please refresh the page';
        this.loading = false;
      }
    })
  }

}

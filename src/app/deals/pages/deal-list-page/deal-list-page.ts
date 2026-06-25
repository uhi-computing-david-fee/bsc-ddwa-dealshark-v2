import { Component, inject, OnInit } from '@angular/core';
import { DealList } from "../../ui/deal-list/deal-list";
import { DealService } from '../../services/deal-service';
import { Deal } from '../../models/deal.model';
import { LoadSpinner } from "../../../shared/components/load-spinner/load-spinner";
import { MessageModule } from 'primeng/message';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { Store } from '../../models/store.model';
import { SelectModule } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { DealFilters } from '../../models/deal-filter.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-deal-list-page',
  imports: [
    DealList,
    LoadSpinner,
    MessageModule,
    ReactiveFormsModule,
    MultiSelectModule,
    SelectModule,
    InputNumberModule,
    ToggleSwitchModule,
    ButtonModule,
    AsyncPipe
  ],
  templateUrl: './deal-list-page.html',
  styleUrl: './deal-list-page.scss',
})
export class DealListPage implements OnInit {

  private dealService = inject(DealService);
  private fb = inject(FormBuilder);

  filterForm = this.fb.group({
    selectedStores: [[] as string[]],
    sortBy: ['Deal Rating'],
    maxPrice: [null as number | null],
    onSale: [false]
  });

  sortOptions = [
    { label: 'Deal Rating', value: 'Deal Rating'},
    { label: 'Price', value: 'Price'},
    { label: 'Savings', value: 'Savings'},
    { label: 'Reviews', value: 'Reviews'}
  ];

  deals: Deal[] = [];
  loading = true;
  error = '';
  stores$ = this.dealService.stores$;

  ngOnInit(): void {
    this.fetchDeals();
  }

  fetchDeals(filters: DealFilters = {}) {
    this.loading = true; // set again for later calls in filter
    this.error = '';

    this.dealService.getDeals(filters).subscribe({
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
    });
  }

  applyFilters() {
    const filters: DealFilters = {};
    const { selectedStores, sortBy, maxPrice, onSale } = this.filterForm.value;

    // Stores as comma separated ID list
    if (selectedStores && selectedStores.length > 0) filters.storeID = selectedStores.join(',');
    if (sortBy) filters.sortBy = sortBy;
    if (maxPrice) filters.upperPrice = maxPrice;
    if (onSale) filters.onSale = 1; // 0 or 1

    // call to re-fetch
    this.fetchDeals(filters);
  }

}

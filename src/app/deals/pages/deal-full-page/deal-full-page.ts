import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-deal-full-page',
  imports: [CurrencyPipe, ButtonModule, TagModule],
  templateUrl: './deal-full-page.html',
  styleUrl: './deal-full-page.scss',
})
export class DealFullPage {
  game = {
    "info": {
      "title": "LEGO Batman",
      "thumb": "https://cdn.fanatical.com/production/product/400x225/105f34ca-7757-47ad-953e-7df7f016741e.jpeg"
    },
    "cheapestPriceEver": {
      "price": "2.28",
      "date": 1759177295
    },
    "deals": [
      {
        "storeID": "15",
        "dealID": "0f%2B4gT2VVUn4UcmFzPxXnuqoXKAOYoJ5mpFZRWNyohc%3D",
        "price": "2.49",
        "retailPrice": "19.99",
        "savings": "87.543772"
      },
      {
        "storeID": "23",
        "dealID": "tyTH88J0PXRvYALBjV3cNHd5Juq1qKcu4tG4lBiUCt4%3D",
        "price": "16.57",
        "retailPrice": "19.99",
        "savings": "17.108554"
      },
      {
        "storeID": "28",
        "dealID": "atibivJQyXsOousolMoHm2iwPKyZaYMxbJ0sR0030M4%3D",
        "price": "16.99",
        "retailPrice": "19.99",
        "savings": "15.007504"
      },
      {
        "storeID": "21",
        "dealID": "Dtzv5PHBf71720cIYjxx3oHvvZK3iHUbQjv6fWLVpd8%3D",
        "price": "19.99",
        "retailPrice": "19.99",
        "savings": "0.000000"
      },
      {
        "storeID": "30",
        "dealID": "r5pU2qL0yMcQTXWlvVyaxVOuBAjgtKdD81zA65nVJak%3D",
        "price": "19.99",
        "retailPrice": "19.99",
        "savings": "0.000000"
      }
    ]
  }

  getSavings(savings: string): string {
    return `-${Math.round(parseFloat(savings))}%`;
  }
}

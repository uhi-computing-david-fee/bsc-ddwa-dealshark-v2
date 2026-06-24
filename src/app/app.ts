import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DealList } from "./deals/ui/deal-list/deal-list";
import { Nav } from "./shared/components/nav/nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DealList, Nav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  deals = [
    {
      "internalName": "THEWITCHER3WILDHUNT",
      "title": "The Witcher 3: Wild Hunt",
      "metacriticLink": "/game/the-witcher-3-wild-hunt/",
      "dealID": "zm2ORJ1RIWrq7UFFCs9J4ps4rgsNUV7FTSnWxzxxj8Q%3D",
      "storeID": "1",
      "gameID": "112330",
      "salePrice": "3.99",
      "normalPrice": "39.99",
      "isOnSale": "1",
      "savings": "90.022506",
      "metacriticScore": "93",
      "steamRatingText": "Overwhelmingly Positive",
      "steamRatingPercent": "96",
      "steamRatingCount": "236848",
      "steamAppID": "292030",
      "releaseDate": 1431907200,
      "lastChange": 1781810900,
      "dealRating": "9.8",
      "thumb": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/abf6e7b3b01ed20c35a8dc0a009a8f9fc3e57b93/capsule_231x87.jpg?t=1768303991"
    },
    {
      "internalName": "BATTLEFIELD3",
      "title": "Battlefield 3",
      "metacriticLink": "/game/battlefield-3/",
      "dealID": "FhBKK4XJ0dmqH9xN1YideiIrjTWPk6dXxgGVFlJzO7s%3D",
      "storeID": "1",
      "gameID": "1684",
      "salePrice": "1.99",
      "normalPrice": "39.99",
      "isOnSale": "1",
      "savings": "95.023756",
      "metacriticScore": "89",
      "steamRatingText": "Mixed",
      "steamRatingPercent": "69",
      "steamRatingCount": "5199",
      "steamAppID": "1238820",
      "releaseDate": 1319500800,
      "lastChange": 1781811051,
      "dealRating": "9.8",
      "thumb": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238820/capsule_231x87.jpg?t=1777326004"
    },
    {
      "internalName": "BATTLEFIELD1",
      "title": "Battlefield 1",
      "metacriticLink": "/game/battlefield-1/",
      "dealID": "ICV0L0NmwniVHpc4NjfQsDO5gRILOIkqPz05jfxFtCM%3D",
      "storeID": "1",
      "gameID": "152332",
      "salePrice": "1.99",
      "normalPrice": "39.99",
      "isOnSale": "1",
      "savings": "95.023756",
      "metacriticScore": "88",
      "steamRatingText": "Very Positive",
      "steamRatingPercent": "86",
      "steamRatingCount": "45082",
      "steamAppID": "1238840",
      "releaseDate": 1477008000,
      "lastChange": 1781810939,
      "dealRating": "9.7",
      "thumb": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238840/capsule_231x87.jpg?t=1777324289"
    },
    {
      "internalName": "MASSEFFECTLEGENDARYEDITION",
      "title": "Mass Effect Legendary Edition",
      "metacriticLink": "/game/mass-effect-legendary-edition/",
      "dealID": "y3FMzZnEmRe2zOrsfxcD3uHBpntwe%2BE64Ug0enLeGlU%3D",
      "storeID": "1",
      "gameID": "225750",
      "salePrice": "4.79",
      "normalPrice": "59.99",
      "isOnSale": "1",
      "savings": "92.015336",
      "metacriticScore": "86",
      "steamRatingText": "Very Positive",
      "steamRatingPercent": "91",
      "steamRatingCount": "40491",
      "steamAppID": "1328670",
      "releaseDate": 1620950400,
      "lastChange": 1781810917,
      "dealRating": "9.1",
      "thumb": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1328670/capsule_231x87.jpg?t=1777395134"
    },
  ]

}

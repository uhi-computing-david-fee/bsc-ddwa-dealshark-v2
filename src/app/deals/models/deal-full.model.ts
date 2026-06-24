export interface GameDetail {
  info: {
    title:      string;
    thumb:      string;
  };
  cheapestPriceEver: {
    price: string;
    date:  number;
  };
  deals: Array<{
    storeID:     string;
    dealID:      string;
    price:       string;
    retailPrice: string;
    savings:     string;
  }>;
}
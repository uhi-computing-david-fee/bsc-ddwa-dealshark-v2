export interface Deal {
  gameID:             string;
  title:              string;
  storeID:            string;
  salePrice:          string;
  normalPrice:        string;
  savings:            string;
  metacriticScore:    string;
  steamRatingText:    string;
  steamRatingPercent: string;
  steamAppID:         string | null;
  dealRating:         string;
  dealID:             string;
  thumb:              string;
}
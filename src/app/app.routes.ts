import { Routes } from '@angular/router';
import { DealListPage } from './deals/pages/deal-list-page/deal-list-page';
import { DealFullPage } from './deals/pages/deal-full-page/deal-full-page';
import { WishlistPage } from './wishlist/pages/wishlist-page/wishlist-page';
import { Login } from './auth/pages/login/login';
import { Register } from './auth/pages/register/register';
import { authGuard } from './auth/services/auth-guard';

export const routes: Routes = [
    { path: '', component: DealListPage },
    { path: 'deal/:id', component: DealFullPage },
    { path: 'wishlist', component: WishlistPage, canActivate: [authGuard] },
    { path: 'login', component: Login },
    { path: 'register', component: Register }
];

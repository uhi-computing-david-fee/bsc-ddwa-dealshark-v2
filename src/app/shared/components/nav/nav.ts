import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../../auth/services/auth-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav implements OnInit, OnDestroy {

  private authService = inject(AuthService);

  authenticated = false;
  authSubscription = new Subscription();

  ngOnInit(): void {
    this.authSubscription = this.authService.currentUser$.subscribe({
      next: user => {
        this.authenticated = user ? true : false;
      }
    })
  }

  logout() {
    this.authService.logout().subscribe();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe(); // stop listening to auth changes
  }

}

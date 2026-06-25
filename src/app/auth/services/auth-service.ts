import { Injectable } from '@angular/core';
import { supabase } from './supabase.client';
import { BehaviorSubject, from, tap } from 'rxjs';
import { User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // Current signed-in user, or null. Single source of truth.
  currentUser$ = new BehaviorSubject<User | null>(null);

  constructor() {
    // check for persisted login
    supabase.auth.onAuthStateChange((_event, session) => {
      this.currentUser$.next(session?.user ?? null);
    });
  }

  register(email: string, password: string) {
    return from(supabase.auth.signUp({email, password})).pipe(
      // tap into register 
      tap(res => {
        this.currentUser$.next(res.data.user ?? null);
      })
    )
  }

  login(email: string, password: string) {
    return from(supabase.auth.signInWithPassword({ email, password })).pipe(
      // tap into login flow 
      tap(res => {
        this.currentUser$.next(res.data.user ?? null);
      })
    )
  }

  logout() {
    return from(supabase.auth.signOut()).pipe(
      tap(res => {
        this.currentUser$.next(null);
      })
    );
  }

}

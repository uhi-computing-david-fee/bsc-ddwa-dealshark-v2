import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../services/auth-service';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, InputTextModule, RouterLink, ReactiveFormsModule, MessageModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  error = '';
  loading = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.loading = true;
    this.error = '';

    const {email, password} = this.loginForm.value;
    this.authService.login(email!, password!).subscribe({
      next: ({error}) => {
        this.loading = false;
        if (error) {
          this.error = error.message; // supabase error response    
          return;
        }
        this.router.navigate([''])    
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Something went wrong please try again'; // network error
      }  
    })
  }
}

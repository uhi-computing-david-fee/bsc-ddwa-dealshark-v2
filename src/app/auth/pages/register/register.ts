import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../services/auth-service';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-register',
  imports: [ButtonModule, InputTextModule, ReactiveFormsModule, RouterLink, MessageModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loading = false;
  error = '';

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    if (this.registerForm.invalid) return;
    this.loading = true;
    this.error = '';

    const {email, password} = this.registerForm.value;
    this.authService.register(email!, password!).subscribe({
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

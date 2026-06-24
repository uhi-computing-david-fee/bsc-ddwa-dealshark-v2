import { Component, Input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-load-spinner',
  imports: [ProgressSpinnerModule],
  templateUrl: './load-spinner.html',
  styleUrl: './load-spinner.scss',
})
export class LoadSpinner {
  @Input() message = "Loading...";
}

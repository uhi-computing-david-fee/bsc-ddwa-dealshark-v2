import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./shared/components/nav/nav";
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}

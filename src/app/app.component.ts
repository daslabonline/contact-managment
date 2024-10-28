import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './contact/list/list.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, ListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  router= inject(Router);
  title = 'ContactsApp';
}

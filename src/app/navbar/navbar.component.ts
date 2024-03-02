import { Component } from '@angular/core';
import { ToggleThemeComponent } from './toggle-theme/toggle-theme.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [ToggleThemeComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}

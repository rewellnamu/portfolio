import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  imports: [ RouterModule],
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }
}

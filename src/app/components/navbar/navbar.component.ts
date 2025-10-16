import { Component, HostListener, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";

@Component({
  imports: [RouterModule, ThemeToggleComponent],
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  isMenuOpen = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Detect if code is running in the browser
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleBodyScroll();
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.toggleBodyScroll();
    }
  }

  private toggleBodyScroll() {
    if (!this.isBrowser) return; // Prevent SSR crash

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Close menu on ESC key
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.isBrowser) {
      this.closeMenu();
    }
  }

  // Close menu when window is resized to desktop
  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser && window.innerWidth > 968 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      // Clean up body scroll lock on component destroy
      document.body.style.overflow = '';
    }
  }
}

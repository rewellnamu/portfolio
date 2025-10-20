import { Component, HostListener, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { filter } from 'rxjs/operators';

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
  isScrolled = false;
  private routerSubscription: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    // Close menu on route change
    if (this.isBrowser) {
      this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.closeMenu();
        });
    }
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
    if (!this.isBrowser) return;

    if (this.isMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = this.getScrollbarWidth() + 'px';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }

  private getScrollbarWidth(): number {
    if (!this.isBrowser) return 0;
    return window.innerWidth - document.documentElement.clientWidth;
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

  // Add scroll effect to navbar
  @HostListener('window:scroll')
  onScroll() {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 20;
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
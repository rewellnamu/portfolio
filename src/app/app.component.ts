import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  loading = true;
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // Simulate loading time
      setTimeout(() => {
        this.loading = false;
      }, 1500);

      // Scroll to top on route change
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });

      // Prevent horizontal scroll on mobile
      this.preventHorizontalScroll();

      // Add viewport meta tag if not present
      this.ensureViewportMeta();

      // Handle orientation changes
      this.handleOrientationChange();
    }
  }

  private preventHorizontalScroll() {
    if (!this.isBrowser) return;

    // Prevent horizontal scrolling
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';

    // Add event listener for resize
    window.addEventListener('resize', () => {
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
    });
  }

  private ensureViewportMeta() {
    if (!this.isBrowser) return;

    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute(
      'content',
      'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover'
    );
  }

  private handleOrientationChange() {
    if (!this.isBrowser) return;

    window.addEventListener('orientationchange', () => {
      // Small delay to ensure proper reflow
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  loading = true;

  ngOnInit() {
    // simulate loading time (e.g., 8 seconds)
    setTimeout(() => {
      this.loading = false;
    }, 8000);
  }
}
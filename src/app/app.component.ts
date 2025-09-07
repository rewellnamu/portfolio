import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule} from '@angular/common';
import { PreloaderComponent } from './preloader/preloader.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    CommonModule,
    PreloaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isLoading = true;

  ngOnInit() {
    // Simulate loading delay (10 seconds), you can tie this to real logic
    setTimeout(() => {
      this.isLoading = false;
    }, 10000);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-theme-toggle',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
   isDarkMode = false;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (typeof window !== 'undefined' && window.localStorage) {
      document.body.classList.toggle('dark-theme', this.isDarkMode);
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
      if (this.isDarkMode) {
        document.body.classList.add('dark-theme');
      }
    }
  }
}

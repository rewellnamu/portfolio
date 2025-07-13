import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutComponent } from '../about/about.component';
import { GraphicsComponent } from '../graphics/graphics.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterModule,
      ProjectsComponent,
       AboutComponent, 
       GraphicsComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  scrollingText = '+254 719 222 974';
}

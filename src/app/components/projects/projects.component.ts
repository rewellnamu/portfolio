import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Kenya National Geo',
      description: 'Explore parks and wildlife in Kenya with this interactive app.',
      tech: ['Angular', 'Node.js', 'postgrSQL', 'TypeScript','Express.js'],
      github: 'https://github.com/rewellnamu/kenya-national-geo',
      demo: '',
      image: 'Screenshot (256).png'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio showcasing my projects and skills.',
      tech: ['Angular', 'Tailwind CSS','Typscript'],
      github: 'https://github.com/rewellnamu/portfolio',
      demo: '',
      image: 'Screenshot (289).png'
    },
    {
      title: 'Joy Millers clone',
      description: 'A clone of the Joy Millers website with a focus on responsive design.',
      tech: ['Angular', 'Node.js', 'Typescript'],
      github: 'https://github.com/rewellnamu/JOY-MILLERS-LTD',
      demo: '',
      image: 'Screenshot (293).png'
    },
    {
      title: 'Recipe Platform',
      description: 'A platform for menu recipes.',
      tech: ['HTML/CSS'],
      github: 'https://github.com/rewellnamu/webpage-hotel-',
      demo: '',
      image: 'Screenshot (11).png'
    },
    {
      title: 'Google Card',
      description: 'A clone of Google Card with a focus on responsive design.',
      tech: ['HTML/CSS'],
      github: '',
      demo: '',
      image: 'Screenshot (9).png'
    }
    // Add more projects here
  ];
}

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
      title: 'SkillMatch AI',
      description: 'AI-powered job matching platform for skills-based hiring.',
      tech: ['Angular', 'Express.js', 'PostgreSQL', 'OpenAI'],
      github: 'https://github.com/yourusername/skillmatch-ai',
      demo: 'https://skillmatch-ai.vercel.app',
      image: 'assets/images/skillmatch.png'
    },
    {
      title: 'Kenya National Geo',
      description: 'Explore parks and wildlife in Kenya with this interactive app.',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/kenya-national-geo',
      demo: '',
      image: 'assets/images/kenya-geo.png'
    }
    // Add more projects here
  ];
}

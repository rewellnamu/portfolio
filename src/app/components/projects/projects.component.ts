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
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio showcasing my projects and skills.',
      tech: ['Angular', 'Tailwind CSS'],
      github: '',
      demo: 'https://yourportfolio.com',
      image: 'assets/images/portfolio.png'
    },
    {
      title: 'E-commerce App',
      description: 'Full-featured e-commerce application with payment integration.',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      github: '',
      demo: 'https://ecommerce-app.com',
      image: 'assets/images/ecommerce.png'
    },
    {
      title: 'Blog Platform',
      description: 'A blogging platform with user authentication and post management.',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      github: '',
      demo: 'https://blog-platform.com',
      image: 'assets/images/blog-platform.png'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application using OpenWeatherMap API.',
      tech: ['Angular', 'OpenWeatherMap API'],
      github: '',
      demo: 'https://weather-app.com',
      image: 'assets/images/weather-app.png'
    },
    {
      title: 'Task Manager',
      description: 'A simple task management application with user authentication.',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      github: '',
      demo: 'https://task-manager.com',
      image: 'assets/images/task-manager.png'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application using WebSocket.',
      tech: ['Angular', 'Node.js', 'Socket.io'],
      github: '',
      demo: 'https://chat-app.com',
      image: 'assets/images/chat-app.png'
    },
    {
      title: 'Recipe Finder',
      description: 'Find recipes based on ingredients using a public API.',
      tech: ['Angular', 'Recipe API'],
      github: '',
      demo: 'https://recipe-finder.com',
      image: 'assets/images/recipe-finder.png'
    }
    // Add more projects here
  ];
}

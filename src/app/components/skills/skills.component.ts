import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    {
      title: 'Frontend',
      icon: '🎨',
      items: [
        'React',
        'Angular',
        'HTML5',
        'CSS3 / SCSS',
        'JavaScript',
        'TypeScript',
        'Responsive Design',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend',
      icon: '🛠️',
      items: [
        'Node.js',
        'Next.js',
        'Express.js',
        'PostgreSQL',
        'MongoDB',
        'REST APIs',
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: '⚙️',
      items: ['Git & GitHub', 'Docker', 'Figma', 'Vercel', 'postman', 'npm',],
    },
    {
      title: 'AI/Other',
      icon: '🤖',
      items: ['OpenAI API', 'ChatGPT Integration', 'AI Skills Matching', 'AI Chatbots',],
    },
    {
      title: 'Graphics Design',
      icon: '🎨',
      items: [
        'Canva',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Figma',
        'Logo Design',
        'Poster Design',
      ],
    },
    {
      title: 'Soft Skills',
      icon: '💼',
      items: [
        'Problem Solving',
        'Team Collaboration',
        'Time Management',
        'Adaptability',
        'Communication',
      ],
    },
  ];
}

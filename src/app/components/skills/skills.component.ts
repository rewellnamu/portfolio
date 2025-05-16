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
      icon: '/icons/image.png',
      items: [
        'Angular',
        'HTML5',
        'CSS3 / SCSS',
        'JavaScript',
        'TypeScript',
        'Responsive Design',
      ],
    },
    {
      title: 'Backend',
      icon: '/icons/browser.png',
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
      icon: '/icons/technical-support.png',
      items: ['Git & GitHub', 'Docker', 'Figma', 'Vercel', 'postman'],
    },
    {
      title: 'AI/Other',
      icon: '/icons/ai.png',
      items: ['OpenAI API', 'ChatGPT Integration', 'AI Skills Matching'],
    },
  ];
}

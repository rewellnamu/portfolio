import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      title: 'Frontend',
      icon: '🎨',
      items: ['Angular', 'HTML5', 'CSS3 / SCSS', 'JavaScript', 'TypeScript', 'Responsive Design']
    },
    {
      title: 'Backend',
      icon: '🛠️',
      items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      title: 'Tools & DevOps',
      icon: '⚙️',
      items: ['Git & GitHub', 'Docker', 'Figma', 'Vercel', 'Netlify']
    },
    {
      title: 'AI/Other',
      icon: '🤖',
      items: ['OpenAI API', 'ChatGPT Integration', 'AI Skills Matching']
    }
  ];
}

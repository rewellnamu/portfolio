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
      title: 'Workers Manager App',
      description: ' A comprehensive application for managing workers.',
      tech: ['HTML/CSS', 'Node.js', 'MongoDB', 'Javascript', 'Express.js'],
      github: 'https://github.com/rewellnamu/WORK-MANAGER',
      demo: 'https://work-manager-wine.vercel.app/',
      image: 'Screenshot (316).png'
    },
    {
      title: 'Kenya National Geo',
      description: 'Explore parks and wildlife in Kenya with this interactive app.',
      tech: ['Angular', 'Node.js', 'PostgreSQL', 'TypeScript','Express.js','Github Workflow'],
      github: 'https://github.com/rewellnamu/kenya-national-geo',
      demo: 'https://kenya-national-geo.vercel.app/',
      image: 'Screenshot (256).png'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio showcasing my projects and skills.',
      tech: ['Angular','Typscript','Scss','Node.js','Express.js','Github Workflow'],
      github: 'https://github.com/rewellnamu/portfolio',
      demo: 'https://portfolio-p1ls.vercel.app/',
      image: 'Screenshot (289).png'
    },
    {
      title: 'Kenya Police Recruitment app',
      description: 'A recruitment application for the Kenya Police Service. Work in progress.',
      tech: ['Angular', 'Node.js', 'TypeScript','Express.js'],
      github: 'https://github.com/rewellnamu/kenyaPolice-Portal',
      demo: 'https://kenya-police-portal.vercel.app/',
      image: 'Screenshot (313).png'

    },
    {
      title: 'Joy Millers clone',
      description: 'A clone of the Joy Millers website with a focus on responsive design.',
      tech: ['Angular', 'Node.js', 'Typescript', 'Express.js', 'Github Workflow'],
      github: 'https://github.com/rewellnamu/JOY-MILLERS-LTD',
      demo: 'https://joy-millers-ltd.vercel.app/',
      image: 'Screenshot (293).png'
    },
    {
      title: 'Exam Checker',
      description: 'An application for tests.',
      tech: ['HTML/CSS','Javascript', 'Github Workflow'],
      github: 'https://github.com/rewellnamu/Quiz-Master',
      demo: 'https://quiz-master-five-gamma.vercel.app/',
      image: 'Screenshot (306).png'
    },
    {
      title: 'Safari test',
      description: 'A safari test application. Tour know how',
      tech: ['HTML/CSS','Javascript', 'Github Workflow'],
      github: 'https://github.com/rewellnamu/Safari-TRAVEL-QUIZ',
      demo: 'https://safari-travel-quiz.vercel.app/',
      image: 'Screenshot (309).png'
    },
    {
      title: 'Weather App',
      description: 'A weather application that provides current weather information.',
      tech: ['HTML/CSS','Javascript', 'Github Workflow'],
      github: 'https://github.com/rewellnamu/Weather-App',
      demo: 'https://weather-app-delta-flame-47.vercel.app/',
      image: 'Screenshot (302).png'
    },
    {
      title: 'Time Manager app',
      description: 'A time management application to help users track their time.',
      tech: ['HTML/CSS','Javascript', 'Github Workflow'],
      github: 'https://github.com/rewellnamu/TIME-manager',
      demo: 'https://time-manager-seven.vercel.app/',
      image: 'Screenshot (304).png'
    },
    {
      title: 'Music Player app',
      description: 'A music player application that allows users to play and manage their music.',
      tech: ['HTML/CSS','Javascript', 'Github Workflow'],  
      github: 'https://github.com/rewellnamu/Music-player',
      demo: 'https://music-player-xi-orcin.vercel.app/',
      image: 'Screenshot (312).png'
    },
    // Add more projects here
  ];
}

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
      title: 'ACK CHURCH FRONT-END',
      description: ' An Angular front-end web application meant for churches',
      tech: ['Angular', 'Typescript', 'Scss',' npm', 'Github Actions'],
      github: 'https://github.com/rewellnamu',
      demo: 'https://mufu-church.vercel.app/',
      image: 'Screenshot (340).png'
    },
    {
      title: 'MBOKA CHAT APPLICATION',
      description: ' A fullstack React-Native meant for communication, simple and easy to use',
      tech: ['Node.js', 'MongoDB', 'Express.js', 'React-Native','Github Actions'],
      github: 'https://github.com/rewellnamu',
      demo: '',
      image: 'Screenshot (336).png'
    },
    {
      title: 'COUNTY PORTAL FULLSTACK',
      description: ' A full-stack application for managing Kirinyaga County Government services.',
      tech: ['Node.js', 'MongoDB', 'Express.js', 'Javascript', 'Html/Scss','Github Actions'],
      github: 'https://github.com/rewellnamu/COUNTY-FULLSTACK',
      demo: 'https://county-fullstack.vercel.app/',
      image: 'Screenshot (334).png'
    },
    {
      title: 'COUNTY SERVICES APP',
      description: ' A front-end application for showcasing county overall services.',
      tech: ['Angular', 'Typescript', 'Html/Scss', 'Node.js', 'Express.js', 'Github Actions'],
      github: 'https://github.com/rewellnamu/kirinyaga-county',
      demo: 'https://kirinyaga-county.vercel.app/',
      image: 'Screenshot (332).png'
    },
    {
      title: 'KIRINYAGA FEEDBACK APP',
      description: ' A full-stack application for managing public participation in our counties.',
      tech: ['React-Native', 'Node.js', 'MongoDB', 'Express.js', 'Javascript', 'Multer','Html/Scss','Github Actions'],
      github: ['https://github.com/rewellnamu/kirinyaga-feedback-app'],
      demo: 'https://kirinyaga-feedback-app.vercel.app/',
      image: 'county assembly.png'
    },
    {
      title:'Cabro City App',
      description: ' A comprehensive front-end application for managing cabro city operations.',
      tech: ['HTML/SCSS', 'Angular', 'Typescript', 'Github Actions'],
      github: 'https://github.com/rewellnamu/cabro-city-APP',
      demo: 'https://cabro-city-app.vercel.app/',
      image: 'Screenshot (317).png'
    },
    {
      title:'School Student Data App',
      description: ' A comprehensive fullstack application for managing students results.',
      tech: ['React','Node.js','Express.js','MongoDB','Github Actions'],
      github: 'https://github.com/rewellnamu/ReactStudents',
      demo: 'https://react-students-gold.vercel.app/',
      image: 'Screenshot (323).png'
    },
    
    {
      title: 'Workers Manager App',
      description: ' A comprehensive Full-stack application for managing workers.',
      tech: ['HTML/CSS', 'Node.js', 'MongoDB', 'Javascript', 'Express.js'],
      github: 'https://github.com/rewellnamu/WORK-MANAGER',
      demo: 'https://work-manager-wine.vercel.app/',
      image: 'Screenshot (316).png'
    },
    {
      title: 'Kenya National Geo',
      description: 'Explore parks and wildlife in Kenya with this interactive app.',
      tech: ['Angular', 'Node.js', 'PostgreSQL','Html/Scss','TypeScript','Express.js','Github Actions'],
      github: 'https://github.com/rewellnamu/kenya-national-geo',
      demo: 'https://kenya-national-geo.vercel.app/',
      image: 'Screenshot (256).png'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio showcasing my projects and skills.',
      tech: ['Angular','Typscript','Html/Scss','Node.js','Express.js','Github Actions'],
      github: 'https://github.com/rewellnamu/portfolio',
      demo: 'https://portfolio-p1ls.vercel.app/',
      image: 'Screenshot (289).png'
    },
    {
      title: 'Kenya Police Recruitment app',
      description: 'A recruitment application for the Kenya Police Service. Work in progress.',
      tech: ['Angular','Html/Scss', 'Node.js', 'TypeScript'],
      github: 'https://github.com/rewellnamu/kenyaPolice-Portal',
      demo: 'https://kenya-police-portal.vercel.app/',
      image: 'Screenshot (313).png'

    },
    {
      title: 'Joy Millers clone',
      description: 'A clone of the Joy Millers website with a focus on responsive design.',
      tech: ['Angular','Html/Scss', 'Node.js', 'Typescript', 'Express.js', 'Github Actions'],
      github: 'https://github.com/rewellnamu/JOY-MILLERS-LTD',
      demo: 'https://joy-millers-ltd.vercel.app/',
      image: 'Screenshot (293).png'
    },
    {
      title: 'Exam Checker',
      description: 'An application for tests.',
      tech: ['HTML/CSS','Javascript', 'Github Actions'],
      github: 'https://github.com/rewellnamu/Quiz-Master',
      demo: 'https://quiz-master-five-gamma.vercel.app/',
      image: 'Screenshot (306).png'
    },
    {
      title: 'Safari test',
      description: 'A safari test application. Tour know how',
      tech: ['HTML/CSS','Javascript', 'Github Actions'],
      github: 'https://github.com/rewellnamu/Safari-TRAVEL-QUIZ',
      demo: 'https://safari-travel-quiz.vercel.app/',
      image: 'Screenshot (309).png'
    },
    {
      title: 'Weather App',
      description: 'A weather application that provides current weather information.',
      tech: ['HTML/CSS','Javascript', 'Github Actions'],
      github: 'https://github.com/rewellnamu/Weather-App',
      demo: 'https://weather-app-delta-flame-47.vercel.app/',
      image: 'Screenshot (302).png'
    },
    {
      title: 'Time Manager app',
      description: 'A time management application to help users track their time.',
      tech: ['HTML/CSS','Javascript', 'Github Actions'],
      github: 'https://github.com/rewellnamu/TIME-manager',
      demo: 'https://time-manager-seven.vercel.app/',
      image: 'Screenshot (304).png'
    },
    {
      title: 'Music Player app',
      description: 'A music player application that allows users to play and manage their music.',
      tech: ['HTML/CSS','Javascript', 'Github Actions'],  
      github: 'https://github.com/rewellnamu/Music-player',
      demo: 'https://music-player-xi-orcin.vercel.app/',
      image: 'Screenshot (312).png'
    },
    // Add more projects here
  ];
}

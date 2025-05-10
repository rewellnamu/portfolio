import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-certificates',
  standalone: true,
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
certificates = [
  {
    title: 'Angular Developer Certification',
    issuer: 'Coursera',
    year: '2023',
    link: 'https://www.coursera.org/certificate/example',
    pdf: 'assets/certificates/angular-coursera.pdf'
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    year: '2022',
    link: 'https://www.freecodecamp.org/certificate/example',
    pdf: 'assets/certificates/fullstack-freecodecamp.pdf'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2021',
    link: 'https://www.freecodecamp.org/certificate/example',
    pdf: 'assets/certificates/responsive-web-design.pdf'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    year: '2021',
    link: 'https://www.freecodecamp.org/certificate/example',
    pdf: 'assets/certificates/javascript-algorithms.pdf'
  },
  {
    title: 'React Developer Certification',
    issuer: 'Coursera',
    year: '2023',
    link: 'https://www.coursera.org/certificate/example',
    pdf: 'assets/certificates/react-coursera.pdf'
  },
  {
    title: 'Node.js Certification',
    issuer: 'Coursera',
    year: '2023',
    link: 'https://www.coursera.org/certificate/example',
    pdf: 'assets/certificates/nodejs-coursera.pdf'
  },
  {
    title: 'Python for Everybody',
    issuer: 'Coursera',
    year: '2022',
    link: 'https://www.coursera.org/certificate/example',
    pdf: 'assets/certificates/python-coursera.pdf'
  },
  {
    title: 'Data Science with Python',
    issuer: 'Coursera',
    year: '2022',
    link: 'https://www.coursera.org/certificate/example',
    pdf: 'assets/certificates/data-science-python.pdf'
  }
  
];
}

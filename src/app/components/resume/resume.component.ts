import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  education = [
    {
      institution: ' GOOGLE SKILLSHOP',
      year: '2025'
    },
    {
      institution: 'CISCO NETWORKING ACADEMY (Netacad)',
      year: '2024',
    },
    {
      
      institution: 'HP LIFE',
      year: '2024',
    },
    {
      institution: 'EMBU COLLEGE',
      year: '2013',
    },
    {
      
      institution: 'Nguviu Boys High School',
      year: '2009 - 2012',
    },
  ];

  experience = [
    {
      role: 'Software Developer Attachee',
      company: 'TEACH2GIVE',
      year: '2025',
    },
    {
      role: 'Sales Person',
      company: 'Shell-Kingongo',
      year: '2021-2024',
    },
    {
      role: 'Security Personnel',
      company: 'Asset Security LTD',
      year: '2019-2021',
    },
   
  ];

  badges = [
    {
      title: 'Introduction to Cyber Security',
      organization: 'CISCO',
      year: '2024',
      image: '/badges/introduction-to-cybersecurity.png',
    },
    {
      title: 'HP LIFE Ambassador',
      organization: 'HP LIFE',
      year: '2024',
      image: '/badges/hp-life.png',
    },
    {
      title: 'Computer Hardware Basics',
      organization: 'CISCO',
      year: '2024',
      image: '/badges/computer-hardware-basics.png',
    },
  ];
  transcript = [
    {
      course: 'CISCO',
      downloadLink: '/cert/CISCO transcript.pdf',
    },
    {
      course: 'HP LIFE',
      downloadLink: '/cert/HP LIFE transcript.pdf',
    },
  ];
}

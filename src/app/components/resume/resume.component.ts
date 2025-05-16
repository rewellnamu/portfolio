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
      degree: 'BSc in Computer Science',
      institution: 'CISCO NETWORKING',
      year: '2020 - 2022',
    },
    {
      degree: 'Diploma in Web Development',
      institution: 'University of Nairobi',
      year: '2018 - 2020',
    },
    {
      degree: 'High School Certificate',
      institution: 'Nguviu Boys High School',
      year: '2014 - 2017',
    },
  ];

  experience = [
    {
      role: 'Frontend Developer',
      company: 'TechNova Solutions',
      year: '2023 - Present',
    },
    {
      role: 'Intern Web Developer',
      company: 'DigitalEdge Agency',
      year: '2022 - 2023',
    },
    { role: 'Junior Developer', company: 'WebWorks', year: '2021 - 2022' },
    {
      role: 'Intern Software Engineer',
      company: 'Innovatech',
      year: '2020 - 2021',
    },
  ];

  certifications = [
    { title: 'Software Developer', issuer: 'TEACH2GIVE', year: '2025' },
    { title: '', issuer: 'freeCodeCamp', year: '2022' },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      year: '2021',
    },
    { title: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2020' },
    { title: 'Python for Everybody', issuer: 'Coursera', year: '2019' },
  ];

  badges = [
    {
      title: 'Introduction to Cyber Security',
      organization: 'CISCO',
      year: '2024',
    },
    { title: 'HP LIFE Ambassador', organization: 'HP LIFE', year: '2024' },
    { title: 'Computer Hardware Basics', organization: 'CISCO', year: '2024' },
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

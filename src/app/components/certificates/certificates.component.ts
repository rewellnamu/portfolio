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
    title: 'SOFTWARE DEVELOPMENT',
    issuer: 'TEACH2GIVE',
    year: '2025',
    link: '/cert/Software Development.pdf',
    pdf: 'cert/Software Development.pdf'
  },
  {
    title: 'Google Advanced Premium IT Admin Features',
    issuer:'Google Skillshop',
    year: '2025',
    link: '/cert/Google Advanced Premium IT Admin Features.pdf',
    pdf: '/cert/Google Advanced Premium IT Admin Features.pdf'
  },
  {
    title: 'Google Premium IT Admin Features',
    issuer: 'Google Skillshop',
    year: '2025',
    link: '/cert/Google Premium IT Admin Features.pdf',
    pdf: '/cert/Google Premium IT Admin Features.pdf'
  },
  {
    title: 'INTRODUCTION TO DATA SCIENCE',
    issuer: 'CISCO',
    year: '2024',
    link: '/cert/Introduction_to_Data_Science.pdf',
    pdf: '/cert/Introduction_to_Data_Science.pdf'
  },
  {
    title: 'CUSTOMER EXPERIENCE(CX)',
    issuer: 'HP LIFE',
    year: '2024',
    link: '/cert/customer experience(cx).pdf',
    pdf: '/cert/customer experience(cx).pdf'
  },
  {
    title: 'DATA SCIENCE AND ANALYTICS',
    issuer: 'HP LIFE',
    year: '2024',
    link: '/cert/data science and analytics.pdf',
    pdf: '/cert/data science and analytics.pdf'
  },
  {
    title: 'COMPUTER HARDWARE BASICS',
    issuer: 'CISCO',
    year: '2024',
    link: '/cert/Computer_Hardware_Basics_.pdf',
    pdf: '/cert/Computer_Hardware_Basics_.pdf'
  },
  {
    title: 'INTRODUCTION TO CYBER SECURITY',
    issuer: 'CISCO',
    year: '2024',
    link: '/cert/Introduction_to_Cybersecurity.pdf',
    pdf: '/cert/Introduction_to_Cybersecurity.pdf'
  },
  {
    title: 'INTRODUCTION TO CYBER SECURITY AWARENESS',
    issuer: 'HP LIFE',
    year: '2024',
    link: '/cert/introduction to cybersecurity awareness.pdf',
    pdf: '/cert/introduction to cybersecurity awareness.pdf'
  },
  {
    title: 'INTRODUCTION TO DIGITAL BUSINESS SKILLS',
    issuer: 'HP LIFE',
    year: '2024',
    link: '/cert/introduction to digital business skills.pdf',
    pdf: '/cert/introduction to digital business skills.pdf'
  },
  {
    title: 'CUSTOMER RELATIONSHIP MANAGEMENT',
    issuer: 'HP LIFE',
    year: '2024',
    link: '/cert/customer relationship management.pdf',
    pdf: '/cert/customer relationship management.pdf'
  },
  {
    title: 'IT FOR BUSINESS SUCCESS',
    issuer: 'HP LIFE',
    year: '2024',
    link: '/cert/IT for business success.pdf',
    pdf: '/cert/IT for business success.pdf'
  },
  {
    title: 'SOCIAL MEDIA MARKETING',
    issuer: 'HP LIFE',
    year: '2024',
    link: '/cert/social media marketing.pdf',
    pdf: '/cert/social media marketing.pdf'
  },
  {
    title: 'SALES FORECASTING',
    issuer: 'HP LIFE',
    year: '2024',
    link: '/cert/Sales Forecasting .pdf',
    pdf: '/cert/Sales Forecasting .pdf'
  },
  {
    title: 'PROFIT AND LOSS',
    issuer: 'HP LIFE',
    year: '2024',
    link: '/cert/PROFIT AND LOSS.pdf',
    pdf: '/cert/PROFIT AND LOSS.pdf'
  },
  {
    title: 'INVENTORY MANAGEMENT',
    issuer: 'HP LIFE',
    year: '2024',
    link: '/cert/inventory management.pdf',
    pdf: '/cert/inventory management.pdf'
  },
  {
    title: 'EFFECTIVE PRESENTATION',
    issuer: 'HP LIFE',
    year: '2024',
    link: '/cert/EFFECTIVE PRESENTATION CERTIFICATE.pdf',
    pdf: '/cert/EFFECTIVE PRESENTATION CERTIFICATE.pdf'
  },
  {
    title: 'COMPUTER APPLICATIONS',
    issuer: 'EMBU COLLEGE',
    year: '2013',
    link: '/cert/EMBU CERT.pdf',
    pdf: '/cert/EMBU CERT.pdf'
  }
];
}

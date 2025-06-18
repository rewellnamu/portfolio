import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-graphics',
  imports: [CommonModule],
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent {
  graphics = [
    {
      title: 'Poster Design',
      image: 'graphics/Hapa ni kwa Mathe, Food saaafi.png',
      description: 'Modern logo for a Hotel startup.',
    },
    {
      title: 'Logo Design',
      image: 'graphics/REWELL.png',
      description: 'Construction Company poster design.',
    },
    {
      title: ' Certificate Design',
      image: 'graphics/Canva 5 Design Milestone Badge.png',
      description: 'Minimalist certificate card design.',
    },
    {
      title: 'Social Media Post',
      image: 'graphics/Brown and White Creative Steaks Food Instagram post.png',
      description: 'Engaging social media post design.',
    },
  ];

  videos = [
    {
      title: 'Promo Animation',
      src: 'graphics/White and Brown Food Facebook Video Promo.mp4',
      description: 'social media promo for a product launch.',
    },
    {
      title: 'Company Reveal',
      src: 'graphics/White Restaurant Delivery Simple Starter Ad.mp4',
      description: 'social media promo video',
    },
    // Add more videos as needed
  ];
}

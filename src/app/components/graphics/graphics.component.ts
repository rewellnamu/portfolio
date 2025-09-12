import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-graphics',
  imports: [CommonModule],
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent implements AfterViewInit {
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
    {
      title: 'Business Card',
      image: 'graphics/1.png',
      description: 'Professional business card design.',
    }
  ];

  videos = [
    {
      title: '',
      src: 'cut/0821(1).mp4',
      description: '',
    },
    {
      title: '',
      src: 'cut/0819(2).mp4',
      description: '',
    },
    {
      title: '',
      src: 'cut/0819.mp4',
      description: '',
    },
    {
      title: '',
      src: 'cut/0818 (1)(7).mp4',
      description: '',
    },
    {
      title: '',
      src: 'cut/0818 (1)(6).mp4',
      description: '',
    },
    {
      title:'',
      src: 'cut/0818 (1)(5).mp4',
      description: '',
    },
    {
      title:'',
      src: 'cut/0818 (1)(3).mp4',
      description: '',
    },
    {
      title: '',
      src:'cut/0818 (1).mp4',
      description:'',
    },
    {
      title: '',
      src:'cut/0818 (1)(1).mp4',
      description:'',
    }
  ];

  ngAfterViewInit() {
    // Ensure all videos are properly muted after view initialization
    setTimeout(() => {
      this.muteAllVideos();
    }, 100);
  }

  private muteAllVideos() {
    const videos = document.querySelectorAll('.video-player') as NodeListOf<HTMLVideoElement>;
    videos.forEach(video => {
      video.muted = true;
      video.volume = 0;
      
      // Add event listener to ensure muting persists
      video.addEventListener('loadeddata', () => {
        video.muted = true;
        video.volume = 0;
      });
    });
  }

  // Method to handle individual video muting
  ensureVideoMuted(event: any) {
    const video = event.target as HTMLVideoElement;
    video.muted = true;
    video.volume = 0;
  }
}
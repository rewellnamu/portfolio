import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Graphic {
  title: string;
  image: string;
  description: string;
  category?: string;
}

interface Video {
  title: string;
  src: string;
  description: string;
  thumbnail?: string;
}

@Component({
  standalone: true,
  selector: 'app-graphics',
  imports: [CommonModule],
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent implements AfterViewInit, OnDestroy {
  isBrowser: boolean;
  isImageModalOpen = false;
  selectedImage: Graphic | null = null;
  private intersectionObserver?: IntersectionObserver;

  graphics: Graphic[] = [
    {
      title: 'Poster Design',
      image: 'graphics/Hapa ni kwa Mathe, Food saaafi.png',
      description: 'Modern poster for a hotel startup',
      category: 'Branding'
    },
    {
      title: 'Logo Design',
      image: 'graphics/REWELL.png',
      description: 'Construction company brand identity',
      category: 'Logo Design'
    },
    {
      title: 'Certificate Design',
      image: 'graphics/Canva 5 Design Milestone Badge.png',
      description: 'Minimalist certificate card design',
      category: 'Certificates'
    },
    {
      title: 'Social Media Post',
      image: 'graphics/Brown and White Creative Steaks Food Instagram post.png',
      description: 'Engaging social media post design',
      category: 'Social Media'
    },
    {
      title: 'Business Card',
      image: 'graphics/1.png',
      description: 'Professional business card design',
      category: 'Print Design'
    }
  ];

  videos: Video[] = [
    {
      title: 'Creative Edit #1',
      src: 'cut/0821(1).mp4',
      description: 'Dynamic video content creation',
    },
    {
      title: 'Creative Edit #2',
      src: 'cut/0819(2).mp4',
      description: 'Social media reel design',
    },
    {
      title: 'Creative Edit #3',
      src: 'cut/0819.mp4',
      description: 'Engaging video storytelling',
    },
    {
      title: 'Creative Edit #4',
      src: 'cut/0818 (1)(7).mp4',
      description: 'Promotional video content',
    },
    {
      title: 'Creative Edit #5',
      src: 'cut/0818 (1)(6).mp4',
      description: 'Animated graphics showcase',
    },
    {
      title: 'Creative Edit #6',
      src: 'cut/0818 (1)(5).mp4',
      description: 'Creative video production',
    },
    {
      title: 'Creative Edit #7',
      src: 'cut/0818 (1)(3).mp4',
      description: 'Motion graphics design',
    },
    {
      title: 'Creative Edit #8',
      src: 'cut/0818 (1).mp4',
      description: 'Video editing showcase',
    },
    {
      title: 'Creative Edit #9',
      src: 'cut/0818 (1)(1).mp4',
      description: 'Visual storytelling piece',
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      setTimeout(() => {
        this.muteAllVideos();
        this.setupLazyLoading();
      }, 100);
    }
  }

  private muteAllVideos() {
    if (!this.isBrowser) return;

    const videos = document.querySelectorAll('.video-player') as NodeListOf<HTMLVideoElement>;
    videos.forEach(video => {
      video.muted = true;
      video.volume = 0;
      
      video.addEventListener('loadeddata', () => {
        video.muted = true;
        video.volume = 0;
      });

      // Pause video when not in viewport to save resources
      video.addEventListener('pause', () => {
        if (video.ended) {
          video.currentTime = 0;
        }
      });
    });
  }

  ensureVideoMuted(event: Event) {
    const video = event.target as HTMLVideoElement;
    video.muted = true;
    video.volume = 0;
  }

  private setupLazyLoading() {
    if (!this.isBrowser || !('IntersectionObserver' in window)) return;

    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target as HTMLVideoElement;
          if (video.paused) {
            video.play().catch(() => {
              // Autoplay prevented, which is fine
            });
          }
        } else {
          const video = entry.target as HTMLVideoElement;
          video.pause();
        }
      });
    }, options);

    const videos = document.querySelectorAll('.video-player');
    videos.forEach(video => this.intersectionObserver?.observe(video));
  }

  openImageModal(graphic: Graphic) {
    if (!this.isBrowser) return;
    
    this.selectedImage = graphic;
    this.isImageModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeImageModal() {
    if (!this.isBrowser) return;

    this.isImageModalOpen = false;
    this.selectedImage = null;
    document.body.style.overflow = '';
  }

  handleKeyboardClose(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isImageModalOpen) {
      this.closeImageModal();
    }
  }

  trackByGraphic(index: number, graphic: Graphic): string {
    return graphic.image;
  }

  trackByVideo(index: number, video: Video): string {
    return video.src;
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      document.body.style.overflow = '';
      
      if (this.intersectionObserver) {
        this.intersectionObserver.disconnect();
      }
    }
  }
}
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
// import { testimonials } from '../../data/testimonials'; // same data as in React
// import { Testimonial } from '../../types'; // interface

@Component({
  selector: 'app-testimonials-section',
  templateUrl: 'testimonials.component.html',
  styleUrls: ['testimonials.component.scss'],
  imports: [CommonModule],
})
export class TestimonialsSectionComponent implements OnInit, OnDestroy {
  // export class TestimonialsSectionComponent implements OnInit, OnDestroy {
  fallbackAvatar = '../../../assets/image/testimonial/user.png'; // fallback avatar path
  testimonials: any = [
    {
      id: '1',
      name: 'Prashant Kumar Saha',
      role: 'Sr Software Engineer',
      company: 'BPK Tech',
      content:
        'Himanshu is an outstanding Angular developer with a deep understanding of the framework and its ecosystem. His expertise in TypeScript, RxJS, and Angular Material is impressive. He consistently delivered high-quality solutions, and his code reviews were always thorough and insightful.',
      // avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      avatar: '../../../assets/image/testimonial/prashantKumarSaha.png',
      errorAvatar: '../../../assets/image/testimonial/user.png',
      rating: 5,
    },
    {
      id: '2',
      name: 'Dr. Vatan Sehrawat',
      role: 'Assistant Professor, Dept. of Computer Science & Engineering',
      company: 'Rao Birender Singh State Institute of Engineering & Technology',
      content:
        'I highly recommend Himanshu for their strong attention to detail. Their meticulous approach to tasks and projects ensured accuracy and high-quality results. During their time with me, Himanshu consistently demonstrated a growth mindset, eagerly seeking opportunities to expand their skills and knowledge.',
      // avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      avatar: '../../../assets/image/testimonial/vatanSehrawat.png',
      errorAvatar: '../../../assets/image/testimonial/user.png',
      rating: 5,
    },
    {
      id: '3',
      name: 'Ankur Verma',
      role: 'Software Engineer',
      company: 'Remotely',
      content:
        'I highly recommend Himanshu for his exceptional Angular skills and API integration capabilities. Working together on a project, His contributions to our web application, especially in integrating APIs with the Node.js backend, were invaluable. Himanshu is not only skilled but also a great team player, making collaboration smooth and productive. He would be an asset to any team in the field of web development.',
      // avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      avatar: '../../../assets/image/testimonial/ankurVerma.png',
      errorAvatar: '../../../assets/image/testimonial/user.png',
      rating: 5,
    },
    {
      id: '4',
      name: 'Akash Mishra',
      role: 'Sr. Software Developer',
      company: 'CoolBoots Media',
      content:
        'He is an exceptional Angular developer—quick to understand requirements, collaborative, and always reliable. It was a great experience working with him at Benepik.',
      // avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      avatar: '../../../assets/image/testimonial/akashMishra.png',
      errorAvatar: '../../../assets/image/testimonial/user.png',
      rating: 5,
    },
    {
      id: '5',
      name: 'Satyavir Sharma',
      role: 'Director',
      company: 'IQAC',
      content:
        'I am thrilled to recommend Himanshu Sharma. I had the pleasure of knowing him when he was here as a Student. ​Responsible, punctual and extremely bright, ​Himanshu has been among the best talent at RPS Group of Institutions, and I absolutely endorse her qualification and her skill set for participation in the various activities where he has lead from the front. I was continuously impressed by his knowledge and dedication to staying on top of the latest in the field. He​ combines sharp analysis skills with strong intuition, and I always knew I could rely on him. During his time with us, he achieved numerous academic accomplishments, like social media engagement, digital campaigns etc. He is a wonderful team player. Optimistic, engaging and easy to get along with, he is a true joy to have in the department. With that said, I am highly confident in my recommendation and believe that Himanshu Sharma would be a great fit for any role of his domain or expertise. I am proud of him always. I wish him the Best of the Best Career ahead.',
      // avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQGidH5aICPrsw/profile-displayphoto-shrink_100_100/B4DZb4EgbWHEAg-/0/1747918654810?e=1758758400&v=beta&t=jceRvgRYuArL9agCKrC9ebn_kf_MrX4d2_LQ08_GoKQ',
      avatar: '../../../assets/image/testimonial/satyavirSharma.png',
      errorAvatar: '../../../assets/image/testimonial/user.png',
      rating: 5,
    },
    {
      id: '6',
      name: 'User',
      role: 'Founder',
      company: 'Kashmir Sports Watch',
      content: `Himanshu is very good at what he does. He's really passionate about web tools. You'll not regret working with him.`,
      //   avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      avatar: '../../../assets/image/testimonial/kashmirSportsWatch.png',
      errorAvatar: '../../../assets/image/testimonial/user.png',
      rating: 5,
    },
  ];
  currentIndex = 0; // leftmost visible card
  windowSize = 3; // how many cards visible at once (1/2/3 by breakpoint)
  isAutoPlaying = false; // set true if you want autoplay
  private intervalId?: number;

  ngOnInit(): void {
    this.updateWindowSize(window.innerWidth);
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  /** Adjust visible window to match Tailwind grid cols */
  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const width = (event.target as Window).innerWidth;
    const prevWindowSize = this.windowSize;
    this.updateWindowSize(width);

    // Keep currentIndex valid if window size shrinks and list is short
    if (this.testimonials.length > 0 && this.windowSize !== prevWindowSize) {
      this.currentIndex = this.mod(this.currentIndex, this.testimonials.length);
    }
  }

  private updateWindowSize(width: number): void {
    if (width < 768) {
      this.windowSize = 1; // mobile: grid-cols-1
    } else if (width < 1024) {
      this.windowSize = 2; // tablet: md:grid-cols-2
    } else {
      this.windowSize = 3; // desktop: lg:grid-cols-3
    }
  }

  /** Indices to render in the template (wrap-around) */
  visibleIndices(): number[] {
    const len = this.testimonials.length;
    if (len === 0) return [];
    const size = Math.min(this.windowSize, len);
    return Array.from({ length: size }, (_, k) =>
      this.mod(this.currentIndex + k, len)
    );
  }

  /** Controls: shift by 1 */
  goToPrevious(): void {
    this.stopAutoPlay();
    const len = this.testimonials.length || 1;
    this.currentIndex = this.mod(this.currentIndex - 1, len);
  }

  goToNext(): void {
    this.stopAutoPlay();
    const len = this.testimonials.length || 1;
    this.currentIndex = this.mod(this.currentIndex + 1, len);
  }

  /** Dots: make clicked item the leftmost card */
  goToSlide(i: number): void {
    this.stopAutoPlay();
    const len = this.testimonials.length || 1;
    this.currentIndex = this.mod(i, len);
  }

  /** Optional autoplay */
  private startAutoPlay(): void {
    if (!this.isAutoPlaying || this.testimonials.length <= 1) return;
    this.intervalId = window.setInterval(() => this.goToNext(), 5000);
  }

  private stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  /** Safe modulo for negatives */
  private mod(n: number, m: number): number {
    return ((n % m) + m) % m;
  }

  setFallback(e: Event) {
    const img = e.target as HTMLImageElement;
    if (!img) return;
    if (!img.src.endsWith(this.fallbackAvatar)) {
      img.onerror = null; // prevent loop if fallback fails
      img.src = this.fallbackAvatar;
    }
  }
}

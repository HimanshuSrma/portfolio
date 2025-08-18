import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit, AfterViewInit {
  private portfolioService = inject(PortfolioDataService);
  
  personalInfo = this.portfolioService.getPersonalInfo();

  ngOnInit() {
    // Set initial states
    gsap.set(['.section-title', '.section-subtitle'], { opacity: 0, y: 15 });
    gsap.set('.about-content', { opacity: 0, x: -80 });
    gsap.set('.about-visual', { opacity: 0, x: 80 });
    gsap.set('.stat-item', { opacity: 0, y: 50 });
  }

  ngAfterViewInit() {
    // Animate on scroll
    ScrollTrigger.create({
      trigger: '#about',
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();
        
        tl.to(['.section-title', '.section-subtitle'], {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.15,
          ease: 'power2.out'
        })
        
        .to('.about-content', {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: 'power2.out'
        }, '-=0.3')
        .to('.about-visual', {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: 'power2.out'
        }, '-=0.5')
        .to('.stat-item', {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.3');
      }
    });
  }
}
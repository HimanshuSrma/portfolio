import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  private portfolioService = inject(PortfolioDataService);
  
  experiences = this.portfolioService.getExperience();

  ngOnInit() {
    gsap.set(['.section-title', '.section-subtitle'], { opacity: 0, y: 15 });
    gsap.set('.timeline-line', { scaleY: 0, transformOrigin: 'top' });
  }

  ngAfterViewInit() {
    ScrollTrigger.create({
      trigger: '#experience',
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();
        
        tl.to(['.section-title', '.section-subtitle'], {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out'
        })
        .to('.timeline-line', {
          scaleY: 1,
          duration: 1,
          ease: 'power2.out'
        }, '-=0.3');
      }
    });

    // Animate experience cards
    gsap.utils.toArray('.experience-card').forEach((card, index) => {
      const el = card as Element;  // cast once here
      ScrollTrigger.create({
        trigger: card as Element,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
            delay: index * 0.1
          });
        }
      });
    });
  }
}
import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ["./education.component.scss"],
})
export class EducationComponent implements OnInit, AfterViewInit {
  private portfolioService = inject(PortfolioDataService);
  
  education = this.portfolioService.getEducation();

  ngOnInit() {
    gsap.set(['.section-title', '.section-subtitle'], { opacity: 0, y: 30 });
  }

  ngAfterViewInit() {
    ScrollTrigger.create({
      trigger: '#education',
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();
        
        tl.to(['.section-title', '.section-subtitle'], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out'
        });
      }
    });

    // Animate education cards
    gsap.utils.toArray('.education-card').forEach((card, index) => {
        const el = card as Element;  // cast once here
      ScrollTrigger.create({
        trigger: card as Element,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: index * 0.2
          });
        }
      });
    });
  }

  parseFloat(value: string): number {
    return parseFloat(value);
  }
}
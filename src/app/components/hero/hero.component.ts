import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent implements OnInit, AfterViewInit {
  private portfolioService = inject(PortfolioDataService);
  
  personalInfo = this.portfolioService.getPersonalInfo();
  contact = this.portfolioService.getContact();

  ngOnInit() {
    // Set initial states for animations
    gsap.set(['.hero-badge', '.hero-title', '.hero-subtitle', '.hero-description', '.hero-buttons', '.hero-social'], {
      opacity: 0,
      y: 30
    });
    
    gsap.set('.hero-image', {
      opacity: 0,
      scale: 0.8
    });
  }

  ngAfterViewInit() {
    // Animate hero content
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.to('.hero-badge', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    })
    .to('.hero-title', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.4')
    .to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    .to('.hero-description', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.hero-buttons', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.hero-social', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.hero-image', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'back.out(1.7)'
    }, '-=0.8');
  }
}
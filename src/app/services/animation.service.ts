import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() {
  }

  // Smooth scroll to element
  scrollToElement(target: string | Element) {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: target,
        offsetY: 80 // Account for fixed header
      },
      ease: 'power2.inOut'
    });
  }

  // Fade in animation
  fadeIn(element: string | Element, options: any = {}) {
    return gsap.fromTo(element, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: 'power2.out',
        ...options 
      }
    );
  }

  // Scale in animation
  scaleIn(element: string | Element, options: any = {}) {
    return gsap.fromTo(element,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        ...options
      }
    );
  }

  // Slide in from left
  slideInLeft(element: string | Element, options: any = {}) {
    return gsap.fromTo(element,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        ...options
      }
    );
  }

  // Slide in from right
  slideInRight(element: string | Element, options: any = {}) {
    return gsap.fromTo(element,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        ...options
      }
    );
  }

  // Stagger animation for multiple elements
  staggerAnimation(elements: string | Element[], options: any = {}) {
    return gsap.fromTo(elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        ...options
      }
    );
  }

  // Progress bar animation
  progressBar(element: string | Element, percentage: number) {
    return gsap.fromTo(element,
      { width: '0%' },
      {
        width: `${percentage}%`,
        duration: 1.5,
        ease: 'power2.out'
      }
    );
  }

  // Hover scale effect
  hoverScale(element: string | Element, scale = 1.05) {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;

    el.addEventListener('mouseenter', () => {
      gsap.to(el, { scale, duration: 0.3, ease: 'power2.out' });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  }

  // Refresh ScrollTrigger
  refreshScrollTrigger() {
    ScrollTrigger.refresh();
  }

  // Kill all ScrollTriggers
  killScrollTriggers() {
    ScrollTrigger.killAll();
  }
}
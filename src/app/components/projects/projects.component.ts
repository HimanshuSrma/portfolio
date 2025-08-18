import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  private portfolioService = inject(PortfolioDataService);
  
  projects = this.portfolioService.getProjects();

  ngOnInit() {
    gsap.set(['.section-title', '.section-subtitle'], { opacity: 0, y: 30 });
  }

  ngAfterViewInit() {
    ScrollTrigger.create({
      trigger: '#projects',
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();
        
        tl.to(['.section-title', '.section-subtitle'], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        });
      }
    });

    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      const el = card as Element;  // cast once here
      ScrollTrigger.create({
        trigger: card as Element,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            delay: index * 0.1
          });
        }
      });
    });
  }

  getStatusStyle(status: string): string {
    const styles: { [key: string]: string } = {
      'completed': 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
      'ongoing': 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
      'planned': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
    };
    return styles[status] || 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300';
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'completed': 'Completed',
      'ongoing': 'Ongoing',
      'planned': 'Planned'
    };
    return labels[status] || status;
  }

  getCategoryStyle(category: string): string {
    const styles: { [key: string]: string } = {
      'web': 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300',
      'mobile': 'bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300',
      'fullstack': 'bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300',
      'other': 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
    };
    return styles[category] || 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300';
  }

  getCategoryLabel(category: string): string {
    const labels: { [key: string]: string } = {
      'web': 'Web App',
      'mobile': 'Mobile App',
      'fullstack': 'Full Stack',
      'other': 'Other'
    };
    return labels[category] || category;
  }
}
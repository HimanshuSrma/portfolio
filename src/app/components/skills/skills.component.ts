import { Component, inject, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit, AfterViewInit {
  private portfolioService = inject(PortfolioDataService);
  private cdr = inject(ChangeDetectorRef);
  
  skills = this.portfolioService.getSkills();
  categories = ['all', 'frontend', 'backend', 'database', 'tools', 'other'];
  activeCategory = 'all';
  filteredSkills : any = this.getFilteredSkills();

  ngOnInit() {
    gsap.set(['.section-title', '.section-subtitle'], { opacity: 0, y: 30 });
    gsap.set('.skills-categories', { opacity: 0, y: 20 });
  }

  ngAfterViewInit() {
    ScrollTrigger.create({
      trigger: '#skills',
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();
        
        tl.to(['.section-title', '.section-subtitle'], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        })
        .to('.skills-categories', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.4');

        this.animateSkills();
      }
    });
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
    this.filteredSkills = this.getFilteredSkills();
    this.animateSkills(); // Re-animate skills when category changes
    this.cdr.detectChanges(); // Ensure change detection runs to update the view
  }

  getFilteredSkills() {
    if (this.activeCategory === 'all') {
      return this.skills;
    }
    let skills = this.skills.filter(skill => skill.category === this.activeCategory);
    return skills;
  }

  getCategoryLabel(category: string): string {
    const labels: { [key: string]: string } = {
      'all': 'All Skills',
      'frontend': 'Frontend',
      'backend': 'Backend',
      'database': 'Database',
      'tools': 'Tools',
      'other': 'Other'
    };
    return labels[category] || category;
  }

  getCategoryStyle(category: string): string {
    const styles: { [key: string]: string } = {
      'frontend': 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300',
      'backend': 'bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300',
      'database': 'bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300',
      'tools': 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
      'other': 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
    };
    return styles[category] || 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300';
  }

  private animateSkills() {
    // Reset all skill cards
    gsap.set('.skill-card', { opacity: 0, y: 30, scale: 0.9 });
    // gsap.set('.skill-progress', { width: '0%' });

    // Animate skill cards with stagger
    gsap.to('.skill-card', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      stagger: 0.1,
      ease: 'power2.out',
      onComplete: () => {
        // Animate progress bars after cards are visible
        gsap.utils.toArray('.skill-progress').forEach((progress: any) => {
          const width = progress.getAttribute('data-width');
          gsap.to(progress, {
            width: `${width}%`,
            duration: 0.0,
            ease: 'power2.out',
            delay: 0.01
          });
        });
      }
    });
  }
}
import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  private themeService = inject(ThemeService);
  
  isDark = this.themeService.isDarkMode;
  isMobileMenuOpen = signal(false);

  ngOnInit() {
    // Animate header on load
    gsap.fromTo('.logo', 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    gsap.fromTo('.nav-link', 
      { opacity: 0, y: -10 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        delay: 0.3,
        ease: 'power2.out' 
      }
    );
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }
}
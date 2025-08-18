import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  private portfolioService = inject(PortfolioDataService);
  
  personalInfo = this.portfolioService.getPersonalInfo();
  contact = this.portfolioService.getContact();
  currentYear = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
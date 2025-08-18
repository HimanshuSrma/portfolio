import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactFormData } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit, AfterViewInit {
  
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';
  private portfolioService = inject(PortfolioDataService);
  contact = this.portfolioService.getContact();
  formData : ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngOnInit() {
    gsap.set(['.section-title', '.section-subtitle'], { opacity: 0, y: 30 });
    gsap.set('.contact-item', { opacity: 0, x: -30 });
    gsap.set('.contact-form', { opacity: 0, x: 30 });
  }

  ngAfterViewInit() {
    ScrollTrigger.create({
      trigger: '#contact',
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
        .to('.contact-item', {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.4')
        .to('.contact-form', {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.4');
      }
    });
  }


  onSubmit(form:any) {
    // Guard: block invalid submits
    if (form.invalid) {
      this.touchAll(form);
      this.errorMessage = 'Please fix the highlighted fields.';
      this.clearMessagesAfterDelay();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Create mailto link with form data
    const subject = encodeURIComponent(this.formData.subject);
    const body = encodeURIComponent(`Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`);
    const mailtoLink = `mailto:${this.contact.email}?subject=${subject}&body=${body}`;

    window.open(mailtoLink);
    
    // Reset form
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    form.resetForm(this.formData);
    this.isSubmitting = false;
    this.successMessage = 'Your email draft has been opened in your mail app.';
    this.clearMessagesAfterDelay();
  }


  private touchAll(form: any) {
    Object.keys(form.controls).forEach((key) => {
      const control = form.controls[key];
      control?.markAsTouched({ onlySelf: true });
      control?.markAsDirty({ onlySelf: true });
    });
  }

  private clearMessagesAfterDelay(ms: number = 4000) {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, ms);
  }
}
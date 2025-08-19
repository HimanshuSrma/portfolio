import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './app/components/about/about.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { EducationComponent } from './app/components/education/education.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { HeaderComponent } from './app/components/header/header.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { SkillsComponent } from './app/components/skills/skills.component';

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="w-100 overflow-x-hidden min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-experience></app-experience>
        <app-education></app-education>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter([])
  ]
});
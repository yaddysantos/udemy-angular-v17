import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@share/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  styleUrl: './view-transaction.component.css',
  template: `
  <app-title [title]="'View Transantion 1'"></app-title>
    <section class="flex justify-start">
      <img
        srcset="https://img.freepik.com/foto-gratis/tierra-vista-espacio_23-2150528643.jpg"
        alt="planet"
        width="200px"
        height="300px"
        style="view-transition-name: hero1"
      />
      <div class="bg-blue-500 div-section" style="view-transition-name: hero2"></div>
    </section>`,
})
export class ViewTransition1Component {}

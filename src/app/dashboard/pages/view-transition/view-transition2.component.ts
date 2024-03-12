import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@share/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  styleUrl: './view-transaction.component.css',
  template: ` 
    <app-title [title]="'View Transantion 2'"></app-title>
    <section class="transition-2">
      <img
        srcset="https://img.freepik.com/foto-gratis/tierra-vista-espacio_23-2150528643.jpg"
        alt="planet"
        width="200px"
        height="300px"
        style="view-transition-name: hero1"
      />
      <div class="bg-blue-800 div-section-2 rounded" style="view-transition-name: hero2"></div>
    </section>`,
})
export class ViewTransition2Component {}

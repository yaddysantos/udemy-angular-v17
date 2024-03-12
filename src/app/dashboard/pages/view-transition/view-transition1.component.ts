import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@share/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title [title]="'View Transantion 1'"></app-title>
    <section class="flex justify-start">
      <img
        srcset="https://img.freepik.com/foto-gratis/tierra-vista-espacio_23-2150528643.jpg"
        alt="planet"
        width="200px"
        height="300px"
      />
      <div class="bg-blue-500 w-56 h-56" style="width: 200px;"></div>
    </section>`,
})
export class ViewTransition1Component {}

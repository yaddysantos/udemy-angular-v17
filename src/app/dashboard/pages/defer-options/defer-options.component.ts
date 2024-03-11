import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@share/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@share/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.css'
})
export class DeferOptionsComponent {

}

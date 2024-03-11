import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@share/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@share/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule, HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html'
})
export class DeferViewsComponent {

}

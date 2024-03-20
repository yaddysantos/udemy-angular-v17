import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'; //permite tomar un observable y emitir una signal
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@share/title/title.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //transformar un obsrvable a una señal
  private route = inject(ActivatedRoute); //Acceso a cual es la informacion del usuario que viene en el params
  private userService = inject(UserService);

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id)) //permite aplanar el observable
    )
  );

  // title label = informacion del usuario: Tracey Ramos
  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      }`;
    }

    return 'Información del usuario:';
  });
  // constructor(){
  //   this.route.params.subscribe(params => {
  //     console.log(params);
  //   })
  // }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });

  //senales computadas de solo lectura, ya que tenemos en privado la peticion
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    //cargar la data
    console.log('cargando data');
    this.http
      .get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1500)) // RxJs un delay de 1.5 segundos
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          users: res.data,
        });
      });
  }

  getUserById(id: string) {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(delay(1500), map( res => res.data)); // RxJs un delay de 1.5 segundos
  }
}

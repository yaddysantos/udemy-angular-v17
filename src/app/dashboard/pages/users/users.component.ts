import { Component, inject } from '@angular/core';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  public userService = inject(UserService) //optimiza el constructor
}

import { Component, inject, signal, OnInit, computed } from '@angular/core';

import { User } from '../../interfaces/single-user-response.interface';
import { UserService } from '../../service/user-service';

@Component({
  selector: 'signals-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit{
  public userId = signal(1);

  public userInfo = signal<User | null>(null);

  public fullUsername = computed(() => {
    const user = this.userInfo();
    if (!user) {
      return 'Usuario no encontrado';
    }

    return `${user!.first_name} ${user!.last_name}`;
  });

  public userWasFound = signal(true);

  private userService = inject(UserService);

  ngOnInit(): void {
    this.getUserInfo(this.userId());
  }

  getUserInfo(id: number): void {
    if (id <= 0) {
      return;
    }

    this.userId.update(value => id);

    this.userService.getUserById(id)
      .subscribe({
        next: user => {
          this.userInfo.set(user);
          this.userWasFound.set(true);
        },

        error: error => {
          console.error('Error al obtener la información del usuario', error);
          this.userInfo.set(null);
          this.userWasFound.set(false);
        }
      });
  }
}

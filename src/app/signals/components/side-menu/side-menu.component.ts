import { Component, signal } from '@angular/core';

interface MenuItem {
  label: string;
  route: string;
}
@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    { label: 'Contador', route: '/signals/counter' },
    { label: 'Usuario', route: '/signals/user-info' },
    { label: 'Mutaciones', route: '/signals/properties' }
  ]);

}

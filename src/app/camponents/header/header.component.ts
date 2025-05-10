import { Component } from '@angular/core';
import { SideNavigationComponent } from '../side-navigation/side-navigation.component';

@Component({
  selector: 'app-header',
  imports: [SideNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isSideNavOpen = false;

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
    console.log(this.isSideNavOpen);
  }

  onSideNavClosed() {
    this.isSideNavOpen = false;
    console.log('Side navigation foi fechado');
  }

  selectedMenu: string = 'clientes'; // valor inicial pode ser qualquer um dos 3

  selectMenu(menu: string) {
    this.selectedMenu = menu;
    // aqui você pode adicionar lógica de navegação, se quiser
    if (menu === 'sair') {
      this.logout();
    }
  }

  logout() {
    // Lógica para logout, por exemplo:
    console.log('Usuário saiu');
  }

}

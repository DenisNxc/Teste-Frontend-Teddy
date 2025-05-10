import { Component } from '@angular/core';
import { SideNavigationComponent } from '../side-navigation/side-navigation.component';

@Component({
  selector: 'app-header',
  imports: [SideNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuSelecionado: string = 'clientes';
  isSideNavOpen = false;

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
    console.log(this.isSideNavOpen);
  }

  onSideNavClosed() {
    this.isSideNavOpen = false;
    console.log('Side navigation foi fechado');
  }

  selectMenu(menu: string) {
    this.menuSelecionado = menu;
  }

}

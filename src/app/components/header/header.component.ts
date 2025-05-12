import { Component } from '@angular/core';
import { SideNavigationComponent } from '../side-navigation/side-navigation.component';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  imports: [SideNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuSelecionado: string = 'clientes';
  isSideNavOpen = false;
  usuarioNome: string = '';

  constructor(private router: Router,usuarioNome:UsuarioService) {
    this.usuarioNome = usuarioNome.getNome();
  }

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

    switch(menu) {
      case 'clientes':
        this.router.navigate(['/clientes']);
        break;
      case 'clientes-selecionados':
        this.router.navigate(['/clientesSelected']);
        break;
      case 'sair':
        window.location.href = '/';
        break;
    }
  }

}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  nome = new FormControl('');
  router = inject(Router);
  usuarioService = inject(UsuarioService);

  entrar() {
    const nomeUsuario = this.nome.value?.trim();
    if (nomeUsuario) {
      this.usuarioService.setNome(nomeUsuario);
      this.router.navigate(['/clientes']);
    }
  }

}

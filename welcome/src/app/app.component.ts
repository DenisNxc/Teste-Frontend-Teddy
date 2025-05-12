import { UsuarioService } from './../../../cliente/src/app/services/usuario.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'welcome';

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

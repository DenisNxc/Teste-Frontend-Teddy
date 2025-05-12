import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private nomeUsuario = '';

  setNome(nome: string) {
    this.nomeUsuario = nome;
  }

  getNome(): string {
    return this.nomeUsuario;
  }
}

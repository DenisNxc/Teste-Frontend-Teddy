import { EventEmitter, Injectable } from '@angular/core';
import { Cliente } from '../@components/card-client/card-client.component';

@Injectable({
  providedIn: 'root'
})
export class SelectedClientsService {
  private selectedClients: Cliente[] = [];
  clientsUpdated = new EventEmitter<void>();

  addClient(cliente: Cliente): void {
    if (!this.selectedClients.some(c => c.id === cliente.id)) {
      this.selectedClients.push(cliente);
      this.clientsUpdated.emit();
    }
    console.log(this.selectedClients);
  }

  removeClient(cliente: Cliente): void {
    this.selectedClients = this.selectedClients.filter(c => c.id !== cliente.id);
  }

  clearClients(): void {
    this.selectedClients = [];
  }

  getSelectedClients(): Cliente[] {
    return this.selectedClients;
  }
}

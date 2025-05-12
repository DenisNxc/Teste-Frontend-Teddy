import { HeaderComponent } from './../../../../home/src/app/@components/header/header.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cliente } from '../@components/card-client/card-client.component';
import { SelectedClientsService } from '../services/selected-clients.services';
import { GridClientComponent } from '../@components/grid-client/grid-client.component';

@Component({
  selector: 'app-client-selected',
  imports: [GridClientComponent, HeaderComponent],
  templateUrl: './client-selected.component.html',
  styleUrl: './client-selected.component.scss'
})
export class ClientSelectedComponent implements OnInit {
  selectedClients: Cliente[] = [];

  constructor(private selectedClientsService: SelectedClientsService) {}

  ngOnInit(): void {
    this.loadSelectedClients();

    // Inscreve para atualizações em tempo real
    this.selectedClientsService.clientsUpdated.subscribe(() => {
      this.loadSelectedClients();
    });
  }


  loadSelectedClients(): void {
    this.selectedClients = this.selectedClientsService.getSelectedClients();
  }

  onRemoveClient(cliente: Cliente): void {
    this.selectedClientsService.removeClient(cliente);
  }

  clearSelectedClients(): void {
    this.selectedClientsService.clearClients();

  }
}

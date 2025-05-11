import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardClientComponent, Cliente } from '../card-client/card-client.component';
import { ClientesService } from '../../services/client.service';
import { ModalClientComponent, ModalMode } from '../modal-client/modal-client.component';

export interface Client {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
  createdAt: string;
  updatedAt: string;
}

export interface ClientResponse {
  clients: Client[];
  totalPages: number;
  currentPage: number;
}

@Component({
  selector: 'app-grid-client',
  imports: [CommonModule, FormsModule, CardClientComponent, ModalClientComponent],
  templateUrl: './grid-client.component.html',
  styleUrl: './grid-client.component.scss',
})
export class GridClientComponent implements OnInit, OnChanges {
  @Input() page: number = 1;
  @Input() pageSize: number = 16;
  @Output() pageChanged = new EventEmitter<number>();
  @Output() totalPagesChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  pageSizeOptions = [8, 12, 16, 24, 32];
  selectedPageSize = 16;
  totalClients: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  clientes: Client[] = [];
  showClientModal = false;
  selectedClientData: Cliente | null = null;
  currentModalMode: ModalMode = "create";

  private clienteService = inject(ClientesService);

  ngOnInit() {
    if (this.pageSize && this.pageSizeOptions.includes(this.pageSize)) {
      this.selectedPageSize = this.pageSize;
    }
    this.loadClientes();
  }

  ngOnChanges(changes: SimpleChanges) {
    let needsReload = false;
    if (changes["page"]) {
      if (this.currentPage !== changes["page"].currentValue) {
        this.currentPage = changes["page"].currentValue;
        needsReload = true;
      }
    }
    if (changes["pageSize"]) {
      if (this.selectedPageSize !== changes["pageSize"].currentValue) {
        this.selectedPageSize = changes["pageSize"].currentValue;
        needsReload = true;
      }
    }

    if (needsReload) {
      this.loadClientes();
    }
  }

  loadClientes() {
    this.clienteService.getClientes(this.currentPage, this.selectedPageSize).subscribe({
      next: (data: ClientResponse) => {
        this.clientes = data.clients;
        this.totalPages = data.totalPages;
        if (data.currentPage) {
            this.currentPage = data.currentPage;
        }
        this.totalClients = data.clients.length;
        this.totalPagesChange.emit(this.totalPages);
      },
      error: (err) => console.error("Erro ao carregar clientes:", err),
    });
  }

  // loadClientes() {
  //   this.clienteService.getClientes(this.currentPage, this.pageSize).subscribe({
  //     next: (data: ClientResponse) => {
  //       const mockClients = Array.from({ length: 100 }, (_, i) => ({
  //         ...data.clients[i % data.clients.length],
  //         id: i + 1,
  //         name: `Cliente ${i + 1}`,
  //       }));

  //       const start = (this.currentPage - 1) * this.pageSize;
  //       const end = start + this.pageSize;
  //       this.clientes = mockClients.slice(start, end);

  //       const totalPages = Math.ceil(mockClients.length / this.pageSize);
  //       this.totalPagesChange.emit(totalPages);
  //     },
  //     error: (err) => console.error('Erro ao carregar clientes:', err),
  //   });
  // }

  onPageChange(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.pageChanged.emit(this.currentPage);
      this.loadClientes();
    }
  }

  onPageSizeChange() {
    this.currentPage = 1;
    this.pageChanged.emit(this.currentPage);
    this.pageSizeChange.emit(this.selectedPageSize);
    this.loadClientes();
  }

  openModalForCreate(): void {
    this.selectedClientData = null;
    this.currentModalMode = "create";
    this.showClientModal = true;
  }

  openModalForEdit(cliente: any): void {
    this.selectedClientData = { ...cliente };
    this.currentModalMode = "edit";
    this.showClientModal = true;
  }

  openModalForDelete(cliente: Cliente): void {
    this.selectedClientData = { ...cliente };
    this.currentModalMode = "delete";
    this.showClientModal = true;
    console.log(this.selectedClientData);
  }

  handleCloseModal(): void {
    this.showClientModal = false;
    this.selectedClientData = null;
  }

  handleSaveClient(cliente: Cliente): void {
    this.loadClientes();
    this.handleCloseModal();
  }

  // Método para lidar com a deleção, se implementado no card
  handleDeleteConfirm(clientId: any): void {
    // Adicionar lógica de confirmação aqui antes de deletar
    this.clienteService.deletarCliente(clientId).subscribe({
      next: () => {
        console.log(`Cliente com ID ${clientId} deletado.`);
        this.loadClientes(); // Recarregar após deletar
      },
      error: (err) => console.error(`Erro ao deletar cliente ${clientId}:`, err),
    });
  }
}

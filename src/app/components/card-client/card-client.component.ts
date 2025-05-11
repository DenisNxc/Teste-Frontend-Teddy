import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalClientComponent } from '../modal-client/modal-client.component';

export interface Cliente {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
  createdAt?: string;
  updatedAt?: string;
}

@Component({
  selector: 'app-card-client',
  imports: [CommonModule,FormsModule, ModalClientComponent],
  templateUrl: './card-client.component.html',
  styleUrl: './card-client.component.scss'
})
export class CardClientComponent {

  @Input() cliente!: Cliente;
  @Output() editRequest = new EventEmitter<Cliente>();
  @Output() deleteRequest = new EventEmitter<Cliente>();

  showModal = false;

  onEdit(): void {
    this.editRequest.emit(this.cliente);
  }

  closeModal() {
    this.showModal = false;
  }

  onDelete(): void {
    console.log(this.cliente);
    this.deleteRequest.emit(this.cliente);
  }

}

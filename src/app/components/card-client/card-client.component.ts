import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalClientComponent } from '../modal-client/modal-client.component';

@Component({
  selector: 'app-card-client',
  imports: [CommonModule,FormsModule, ModalClientComponent],
  templateUrl: './card-client.component.html',
  styleUrl: './card-client.component.scss'
})
export class CardClientComponent {

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}

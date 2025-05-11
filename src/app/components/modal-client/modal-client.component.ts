import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-client',
  imports: [],
  templateUrl: './modal-client.component.html',
  styleUrl: './modal-client.component.scss'
})
export class ModalClientComponent {
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}

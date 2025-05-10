import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-client',
  imports: [CommonModule,FormsModule],
  templateUrl: './card-client.component.html',
  styleUrl: './card-client.component.scss'
})
export class CardClientComponent {
  pageSizeOptions = [8, 12, 16, 24, 32];
  selectedPageSize = 16;

}

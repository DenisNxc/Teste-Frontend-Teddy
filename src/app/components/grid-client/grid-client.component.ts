import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardClientComponent } from "../card-client/card-client.component";

@Component({
  selector: 'app-grid-client',
  imports: [CommonModule, FormsModule, CardClientComponent],
  templateUrl: './grid-client.component.html',
  styleUrl: './grid-client.component.scss'
})
export class GridClientComponent {
  pageSizeOptions = [8, 12, 16, 24, 32];
  selectedPageSize = 16;

}

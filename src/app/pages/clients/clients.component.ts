import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GridClientComponent } from '../../components/grid-client/grid-client.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, HeaderComponent, GridClientComponent, PaginationComponent],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  currentPage = 1;
  selectedPageSize = 16;
  totalPages = 1;

  onPageChange(newPage: number) {
    this.currentPage = newPage;
  }

  updateTotalPages(pages: number) {
    this.totalPages = pages;
  }

  onPageSizeChange(newPageSize: number) {
    this.selectedPageSize = newPageSize;
    this.currentPage = 1;
  }
}

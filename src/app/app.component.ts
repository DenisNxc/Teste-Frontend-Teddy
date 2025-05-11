import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardClientComponent } from "./components/card-client/card-client.component";
import { GridClientComponent } from './components/grid-client/grid-client.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, GridClientComponent,PaginationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Teddy-app';

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
    this.currentPage = 1; // volta para primeira página ao trocar pageSize
  }

}

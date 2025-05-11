import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardClientComponent } from "./components/card-client/card-client.component";
import { GridClientComponent } from './components/grid-client/grid-client.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Teddy-app';


}

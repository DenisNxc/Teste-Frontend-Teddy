import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SideNavigationComponent } from './camponents/side-navigation/side-navigation.component';
import { HeaderComponent } from './camponents/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Teddy-app';
}

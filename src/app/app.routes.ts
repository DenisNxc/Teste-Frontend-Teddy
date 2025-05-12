import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AppComponent } from './app.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientSelectedComponent } from './pages/client-selected/client-selected.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'clientes', component: ClientsComponent },
  { path: 'clientesSelected', component: ClientSelectedComponent },
];

export const AppRoutesProvider = provideRouter(routes);

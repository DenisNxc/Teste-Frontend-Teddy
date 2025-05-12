import { ClientSelectedComponent } from './../../../cliente/src/app/clientes-selecionados/client-selected.component';
import { loadRemoteModule } from '@angular-architects/module-federation'
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
    loadChildren: () => [
      {
        path: 'clientes',
        loadComponent: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4203/remoteEntry.js',
            exposedModule: './Component',
          }).then((m) => m.AppComponent),
      },
      { path: '', redirectTo: 'clientes', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

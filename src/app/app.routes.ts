import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./src/app/pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'nome-da-pagina',
    loadComponent: () => import('./nome-da-pagina/nome-da-pagina.page').then( m => m.NomeDaPaginaPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then( m => m.PerfilPage)
  },
];

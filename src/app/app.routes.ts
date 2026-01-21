import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/config/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/config/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/auth/cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'projeto',
    loadComponent: () => import('./pages/projects/projeto/projeto.page').then( m => m.ProjetoPage)
  },
  {
    path: 'funcionalidades',
    loadComponent: () => import('./pages/projects/funcionalidades/funcionalidades.page').then( m => m.FuncionalidadesPage)
  },
  {
    path: 'prasos',
    loadComponent: () => import('./pages/projects/prasos/prasos.page').then( m => m.PrasosPage)
  },
  {
    path: 'dashboard-rpg',
    loadComponent: () => import('./pages/dashboard-rpg/dashboard-rpg.page').then( m => m.DashboardRPGPage)
  },
  {
    path: 'mundo',
    loadComponent: () => import('./pages/rpg/mundo/mundo.page').then( m => m.MundoPage)
  },
  {
    path: 'ficha-personagens',
    loadComponent: () => import('./pages/rpg/ficha-personagens/ficha-personagens.page').then( m => m.FichaPersonagensPage)
  },
  {
    path: 'configuracoes',
    loadComponent: () => import('./pages/config/configuracoes/configuracoes.page').then( m => m.ConfiguracoesPage)
  },
];

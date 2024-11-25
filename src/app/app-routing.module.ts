import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule) },
  { path: 'estrenos', loadChildren: () => import('./estrenos/estrenos.module').then(m => m.EstrenosPageModule) },
  { path: 'clasicos', loadChildren: () => import('./clasicos/clasicos.module').then(m => m.ClasicosPageModule) },
  { path: 'comedia', loadChildren: () => import('./comedia/comedia.module').then(m => m.ComediaPageModule) },
  { path: 'terror', loadChildren: () => import('./terror/terror.module').then(m => m.TerrorPageModule) },
  { path: 'accion', loadChildren: () => import('./accion/accion.module').then(m => m.AccionPageModule) },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

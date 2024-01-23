import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'viagens',
    loadChildren: () => import('./viagens/viagens.module').then( m => m.ViagensPageModule)
  },
  {
    path: 'trabalho',
    loadChildren: () => import('./trabalho/trabalho.module').then( m => m.TrabalhoPageModule)
  },
  {
    path: 'estudos',
    loadChildren: () => import('./estudos/estudos.module').then( m => m.EstudosPageModule)
  },
  {
    path: 'espiritualidade',
    loadChildren: () => import('./espiritualidade/espiritualidade.module').then( m => m.EspiritualidadePageModule)
  },
  {
    path: 'projetos',
    loadChildren: () => import('./projetos/projetos.module').then( m => m.ProjetosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'article',
        loadChildren: () => import('../pages/articlelist/articlelist.module').then(m => m.ArticlelistPageModule)
      },
      {
        path: 'panier',
        loadChildren: () => import('../pages/panier/panier.module').then( m => m.PanierPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/article',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/article',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

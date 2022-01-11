import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlelistPage } from './articlelist.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlelistPageRoutingModule {}

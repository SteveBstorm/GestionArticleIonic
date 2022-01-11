import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlelistPageRoutingModule } from './articlelist-routing.module';

import { ArticlelistPage } from './articlelist.page';
import { ArticledetailComponent } from 'src/app/components/articledetail/articledetail.component';
import { ArticlenewComponent } from 'src/app/components/articlenew/articlenew.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlelistPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ArticlelistPage, ArticledetailComponent, ArticlenewComponent]
})
export class ArticlelistPageModule {}

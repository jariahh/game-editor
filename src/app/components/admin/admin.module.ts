import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component';
import {ArticlesComponent} from './articles/articles.component';
import {ArticleComponent} from './article/article.component';
import {MenusComponent} from './menus/menus.component';
import {MenuComponent} from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminComponent,
    ArticlesComponent,
    ArticleComponent,
    MenusComponent,
    MenuComponent]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article/article.component';

const routes: Routes = [
  { path: 'public', component: ArticleComponent, outlet: 'sub-outlet'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule]
})
export class PublicRoutingModule {
}

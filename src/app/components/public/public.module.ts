import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { ArticleComponent } from './article/article.component';
import { PublicMenuComponent } from './public-menu/public-menu.component';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [
    PublicComponent,
    ArticleComponent,
    PublicMenuComponent
  ],
  bootstrap: [PublicComponent]
})
export class PublicModule { }

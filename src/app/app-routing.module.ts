import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {PublicComponent} from './components/public/public.component';

const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full'},
  { path: 'public', loadChildren: PublicComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule {
}

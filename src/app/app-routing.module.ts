
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { pagesRoutingModule } from './pages/pages.routing';
import { authRoutingModule } from './auth/auth.routing';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotpagefoundComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    pagesRoutingModule,
    authRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

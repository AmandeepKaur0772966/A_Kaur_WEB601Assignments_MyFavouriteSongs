import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const myAppRoutes: Routes = [
  {
     path: '',
     redirectTo: '/list',
     pathMatch: 'full',
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./list/content.module').then((s) => s.ContentModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(myAppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

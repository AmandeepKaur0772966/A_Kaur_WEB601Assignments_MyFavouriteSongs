import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from '../content-list/content-list.component';
import { MyFavSongsDetailComponent } from '../my-fav-songs-detail/my-fav-songs-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ContentListComponent,
  },

  {
    path: ':songId',
    component: MyFavSongsDetailComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}

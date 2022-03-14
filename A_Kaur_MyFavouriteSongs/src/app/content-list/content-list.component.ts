import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FavsongsService } from '../favsongs.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  public defaultImgUrl: String =
    'https://previews.123rf.com/images/butenkow/butenkow1612/butenkow161202014/67425650-pattern-design-music-logo-vector-illustration-of-icon.jpg';

  constructor(private favSongsService: FavsongsService) {
    this.getMyFavSong();
  }

  public items: Content[] = [];
  public filterSongs: Content[] = [];
  public songsId: any = '';

  ngOnInit(): void {}

  getMyFavSong() {
    this.favSongsService
      .getAllFavSongs()
      .subscribe((mySongs) => (this.items = mySongs));
  }

  searchSongFromId(): void {
    this.favSongsService
      .searchSongFromId(this.songsId)
      .subscribe((novels) => (this.filterSongs = novels));
  }

  showItemDetails(index: number) {}
}

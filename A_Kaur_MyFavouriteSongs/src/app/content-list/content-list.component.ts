import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FavsongsService } from '../favsongs.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  public defaultImgUrl: String =
    'https://previews.123rf.com/images/butenkow/butenkow1612/butenkow161202014/67425650-pattern-design-music-logo-vector-illustration-of-icon.jpg';

  constructor(
    private favSongsService: FavsongsService,
    private messageService: MessageService
  ) {
    this.getMyFavSong();
  }

  public items: Content[] = [];
  public filterSongs: Content[] = [];
  public songsId: any = '';
  public formButtonTitle: String = 'Add Content';

  ngOnInit(): void {}

  addContentToList(newSong: Content): void {
    let obj = this.items.find((song) => song.id == newSong.id);

    console.log({ items: this.items, obj, newSong });
    if (obj) {
      /// update song
      this.updateContentInList(newSong);
    } else {
      // insert song
      this.favSongsService
        .addContent(newSong)
        .subscribe((newSongFromServer) => {
          this.items.push(newSongFromServer);
          this.messageService.setMessage('Songs Content Added successfully');
        });
    }
  }

  updateContentInList(contentItem: Content): void {
    this.formButtonTitle = 'Updating...';
    this.favSongsService.updateContent(contentItem).subscribe(() => {
      const index = this.items.findIndex((object) => {
        return object.id === contentItem.id;
      });
      if (index) {
        this.items[index] = contentItem;
      }
      this.messageService.setMessage('Songs Content updated successfully');
      console.log('Songs Content updated successfully');
      this.formButtonTitle = 'Add Content';
    });
  }

  getMyFavSong() {
    this.favSongsService
      .getAllFavSongs()
      .subscribe((mySongs) => (this.items = mySongs));
  }

  showSongsDetails(songId: number) {}
}

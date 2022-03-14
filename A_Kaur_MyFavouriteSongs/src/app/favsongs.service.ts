import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { ContentDb } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';

@Injectable({
  providedIn: 'root',
})
export class FavsongsService {
  constructor(private msgService: MessageService) {}

  getAllFavSongs(): Observable<Content[]> {
    const songs = of(new ContentDb().favSongs);
    this.msgService.setMessage('Content array loaded!');
    return songs;
  }

  searchSongFromId(songId: any): Observable<Content[]> {
    if (isNaN(songId)) {
      this.msgService.setMessage('Please Enter Only Number Type Value');
    } else {
      var favSongs: Array<Content> = [];

      this.getAllFavSongs().subscribe((mySongs) => (favSongs = mySongs));
      var searchSong: Content[] = [];
      var isResultFound = false;
      favSongs.map((song) => {
        if (song.id == songId) {
          isResultFound = true;
          searchSong.push(song);
        }
      });

      if (!isResultFound) {
        this.msgService.setMessage('Sorry! Song Not Found!');
      } else {
        this.msgService.setMessage(`Content Song at id: ${songId}`);
      }

      return of(searchSong);
    }

    return of([]);
  }
}

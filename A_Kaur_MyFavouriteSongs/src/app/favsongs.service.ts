import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { ContentDb } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FavsongsService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  constructor(private msgService: MessageService, private http: HttpClient) {}

  getAllFavSongs(): Observable<Content[]> {
    return this.http.get<Content[]>('api/content');
  }

  addContent(newContentItem: Content): Observable<Content> {
    return this.http.post<Content>(
      'api/content',
      newContentItem,
      this.httpOptions
    );
  }

  updateContent(contentItem: Content): Observable<any> {
    return this.http.put('api/content', contentItem, this.httpOptions);
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

  fetchSongDetailsFromId(songId: number): Observable<Content> {
    console.log('Retrieving Song details of a given ID');
    return this.http.get<Content>('api/content/' + songId);
  }
}

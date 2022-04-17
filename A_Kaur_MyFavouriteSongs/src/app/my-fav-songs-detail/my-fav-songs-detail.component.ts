import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavsongsService } from '../favsongs.service';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-my-fav-songs-detail',
  templateUrl: './my-fav-songs-detail.component.html',
  styleUrls: ['./my-fav-songs-detail.component.scss'],
})
export class MyFavSongsDetailComponent implements OnInit {
  public mySongId: number = 0;
  public selectedContentDetails?: Content;
  public defaultImgUrl: String =
    'https://previews.123rf.com/images/butenkow/butenkow1612/butenkow161202014/67425650-pattern-design-music-logo-vector-illustration-of-icon.jpg';

  constructor(
    private route: ActivatedRoute,
    private songService: FavsongsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.mySongId = +(params.get('songId') ?? 0);
      this.songService.fetchSongDetailsFromId(this.mySongId).subscribe((c) => {
        this.selectedContentDetails = c;
      });
    });
  }
}

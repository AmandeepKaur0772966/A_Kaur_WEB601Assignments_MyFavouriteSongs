import { Component, OnInit } from '@angular/core';
// import { Content } from '../helper-files/content-interface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  // public items: Array<Content> = [
  //   {
  //     id: '1',
  //     title: 'Sira E Hou',
  //     label: 'Speed Records',

  //     music: 'Desi Crew',
  //     description:
  //       'Sira E Hou is a punjabi track sung by Amrit Maan and Nimrat Khaira.',
  //     creator: 'Harry Singh',
  //     imgURL: 'https://covers.djpunjab.pro/image/492349/Sira-E-Hou-Track.jpg',
  //     color: '#fff',
  //     searchFilter: false,
  //     price: 15,
  //   },
  //   {
  //     id: '2',
  //     title: 'Brown Shortie',
  //     label: 'Sidhu Moose Wala',
  //     lyrics: 'Sidhu Moose Wala',
  //     music: 'The Kidd',
  //     description: "This song is from Sidhu Moosewala's album called Moostape",
  //     creator: 'Sukh Sanghera',
  //     imgURL:
  //       'https://lyricsguides.com/wp-content/uploads/2021/06/Brown-Shortie-Lyrics-%E2%80%93-Sidhu-Moose-Wala.jpg',
  //     color: '#f00',
  //     searchFilter: false,
  //   },

  //   {
  //     id: '3',
  //     title: 'Aroma',
  //     description: "This song is from Sidhu Moosewala's album called Moostape",
  //     label: 'Sidhu Moose Wala Music',
  //     music: 'The Kidd',
  //     creator: 'Sukh Sanghera',
  //     imgURL: 'https://covers.djpunjab.pro/image/497983/Aroma.jpg',
  //     tags: ['Punjabi Songs', 'Sidhu', 'Mp3', 'Sukh Sanghera', 'Moostape'],
  //     color: 'indigo',
  //     searchFilter: false,
  //   },
  //   {
  //     id: '4',
  //     title: 'Challa',
  //     description: "This song is from Nimrat Khaira's new album called Nimmo",
  //     label: '',
  //     music: '',
  //     creator: 'Harry Singh',
  //     imgURL: 'https://djyoungstar.me/siteuploads/thumb/sft6/2618_6.jpg',
  //     type: 'Romantic',
  //     color: 'orange',
  //     searchFilter: false,
  //     price: 20,
  //   },
  //   {
  //     id: '5',
  //     title: 'Regret',
  //     description: "This song is from Sidhu Moosewala's album called Moostape",
  //     label: 'Sidhu Moose Wala Music',
  //     lyrics: 'Sidhu Moose Wala',
  //     music: 'The Kidd',
  //     creator: 'Sukh Sanghera',
  //     imgURL: 'https://cover.riskyjattnew.com/497848/Regret.jpg',
  //     color: 'black',
  //     searchFilter: false,
  //     price: 8,
  //   },
  //   {
  //     id: '6',
  //     title: 'US',
  //     description: "This song is from Sidhu Moosewala's album called Moostape",
  //     label: 'Sidhu Moose Wala Music',
  //     lyrics: 'Sidhu Moose Wala',
  //     music: 'The Kidd',
  //     creator: 'Sukh Sanghera',
  //     imgURL:
  //       'https://lyricsraag.com/wp-content/uploads/2021/05/c8uuwkuju6e.jpg',
  //     color: 'green',
  //     searchFilter: false,
  //   },
  //   {
  //     id: '7',
  //     title: 'Dont Look',
  //     description: 'This song is the single track of  Karan Aujla ',
  //     label: 'Rehaan Records',
  //     lyrics: 'Karan Aujla',
  //     music: 'Jay Trak',
  //     creator: 'Sandeep Rehaan',
  //     color: 'brown',
  //     imgURL:
  //       'https://lyricsraag.com/wp-content/uploads/2021/05/c8uuwkuju6e.jpg',
  //     searchFilter: false,
  //   },
  // ];

  public searchMsg: String = '';

  public searchValue: any = '';

  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  searchByTitle() {
    for (let i = 0; i < this.dataService.items.length; i++) {
      console.log(
        this.dataService.items[i].title
          .toLowerCase()
          .includes(this.searchValue.toLowerCase())
      );
      if (
        this.dataService.items[i].title
          .toLowerCase()
          .includes(this.searchValue.toLowerCase())
      ) {
        this.dataService.items[i].searchFilter = true;
        this.searchMsg =
          '<h1 class="alert alert-success mt-4">Result Found</h1>';
        break;
      }

      this.dataService.items[i].searchFilter = false;

      this.searchMsg =
        '<h1 class="alert alert-danger mt-4">Result Not Found</h1>';
    }
  }

  showItemDetails(index: number) {
    console.log({
      'Content ID': this.dataService.items[index].id,
      'Content Title': this.dataService.items[index].title,
    });
  }
}

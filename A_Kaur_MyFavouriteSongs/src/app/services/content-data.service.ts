import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Injectable({
  providedIn: 'root',
})
export class ContentDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    // setting it to the value of our array of content
    const content: Content[] = [
      {
        id: 1,
        title: 'Sira E Hou',
        description:
          'Sira E Hou is a punjabi track sung by Amrit Maan and Nimrat Khaira.',
        creator: 'Harry Singh',
        imgURL: '',
      },
      {
        id: 11,
        title: 'Brown Shortie',
        description:
          "This song is from Sidhu Moosewala's album called Moostape",
        creator: 'Sukh Sanghera',
        imgURL:
          'https://lyricsguides.com/wp-content/uploads/2021/06/Brown-Shortie-Lyrics-%E2%80%93-Sidhu-Moose-Wala.jpg',
      },

      {
        id: 2,
        title: 'Aroma',
        description:
          "This song is from Sidhu Moosewala's album called Moostape",
        creator: 'Sukh Sanghera',

        tags: ['Punjabi Songs', 'Sidhu', 'Mp3', 'Sukh Sanghera', 'Moostape'],
      },
      {
        id: 3,
        title: 'Challa',
        description: "This song is from Nimrat Khaira's new album called Nimmo",
        creator: 'Harry Singh',
        imgURL: 'https://djyoungstar.me/siteuploads/thumb/sft6/2618_6.jpg',
        type: 'Romantic',
      },
      {
        id: 4,
        title: 'Regret',
        description:
          "This song is from Sidhu Moosewala's album called Moostape",
        creator: 'Sukh Sanghera',
        imgURL: 'https://cover.riskyjattnew.com/497848/Regret.jpg',
      },
      {
        id: 5,
        title: 'US',
        description:
          "This song is from Sidhu Moosewala's album called Moostape",
        creator: 'Sukh Sanghera',
        imgURL:
          'https://lyricsraag.com/wp-content/uploads/2021/05/c8uuwkuju6e.jpg',
      },
      {
        id: 6,
        title: 'US',
        description:
          "This song is from Sidhu Moosewala's album called Moostape",
        creator: 'Sukh Sanghera',
        imgURL:
          'https://lyricsraag.com/wp-content/uploads/2021/05/c8uuwkuju6e.jpg',
      },
    ];
    return { content };
  }

  genId(content: Content[]): number {
    return content.length > 0
      ? Math.max(...content.map((c) => c.id)) + 1
      : 2000;
  }
}

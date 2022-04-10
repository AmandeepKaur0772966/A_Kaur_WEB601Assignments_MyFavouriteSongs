// import { Component, OnInit } from '@angular/core';
// import {ContentList} from "../helper-files/content-list";

// @Component({
//   selector: 'app-content-card',
//   templateUrl: './content-card.component.html',
//   styleUrls: ['./content-card.component.css']
// })
// export class ContentCardComponent implements OnInit {
//   myList: ContentList;

//   constructor(){

//     this.myList = new ContentList();
//     console.log("my list contains these items: ", this.myList.items);

//     this.myList.addItem({
//       id: 0,
//       title: "Sira E Hou",
//       description: "Sira E Hou is a punjabi track sung by Amrit Maan and Nimrat Khaira.",
//       creator: "Harry Singh",
//       imgURL: "https://covers.djpunjab.pro/image/492349/Sira-E-Hou-Track.jpg"
//     });
//     this.myList.addItem({
//       id: 1,
//       title: "Brown Shortie",
//       description: "This song is from Sidhu Moosewala's album called Moostape",
//       creator: "Sukh Sanghera",
//       imgURL: "https://lyricsguides.com/wp-content/uploads/2021/06/Brown-Shortie-Lyrics-%E2%80%93-Sidhu-Moose-Wala.jpg"
//     });
//     this.myList.addItem({
//       id: 2,
//       title: "Challa",
//       description: "This song is from Nimrat Khaira's new album called Nimmo",
//       creator: "Harry Singh",
//       imgURL: "https://i.ytimg.com/vi/yDIALeJpKeM/maxresdefault.jpg",
//       type: "Romantic"
//     });

//     console.log("my list contains these items: ", this.myList.items);


//     console.log("The length of the array is:  ", this.myList.numberOfItems());

//     console.log("THe html output is: ", this.myList.getHtml(0));

//     // myList.items = [];
//   }


//   ngOnInit(): void {
//   }

// }
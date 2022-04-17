import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';
import { CheckAppUpdateService } from './check-app-update.service';
// import {ContentList} from "./helper-files/content-list";
// import {ContentCardComponent} from './content-card/content-card.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'A_Kaur_MyFavouriteSongs';

  constructor(
    private applicationRef: ApplicationRef,
    private swUpdate: SwUpdate,
    private myAppUpdateService: CheckAppUpdateService
  ) {}

  ngOnInit(): void {
    this.myAppUpdateService.onCheckUpdateInit();

    const isMyAppStable$ = this.applicationRef.isStable.pipe(
      first((isStable) => isStable === true)
    );

    const halfHour$ = interval(1800000);

    const everyHalfHour$ = concat(isMyAppStable$, halfHour$);

    everyHalfHour$.subscribe(() => this.swUpdate.checkForUpdate());
  }
}

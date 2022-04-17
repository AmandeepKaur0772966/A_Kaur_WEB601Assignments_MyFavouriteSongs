import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class CheckAppUpdateService {
  durationInSeconds = 5;
  constructor(
    private myAppUpdate: SwUpdate,
    private myAppSnackbar: MatSnackBar,
    private router: Router
  ) {}

  public onCheckUpdateInit() {
    this.myAppUpdate.versionUpdates.subscribe((event) => {
      if (event.type === 'VERSION_DETECTED') {
        console.log('Downloading new app version>>>>>>>>>>>>');
      } else if (event.type === 'VERSION_READY') {
        console.log('VERSION_READY');
        let snackbar = this.myAppSnackbar.open(
          'New Version Found!',
          'Update Now'
        );

        snackbar.onAction().subscribe(() => {
          console.log('The snackbar Update action was triggered!');
          this.myAppUpdate
            .activateUpdate()
            .then(() => document.location.reload());
        });

        console.log('App version:' + event.currentVersion.hash);
        console.log('New version :' + event.latestVersion.hash);
      } else {
        console.log('VERSION_INSTALLATION_FAILED');
      }
    });
  }
}

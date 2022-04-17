import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../comps/my-dialog/my-dialog.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss'],
})
export class ModifyContentComponent implements OnInit {
  @Output() public insertSongEvent = new EventEmitter();
  @Input() public parentData: String = '';
  @Input() public cardData?: any;

  constructor(
    private messageService: MessageService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openCompDialog() {
    console.log({ cardData: this.cardData });
    const myDialog = this.dialog.open(MyDialogComponent, {
      data: {
        title: this.parentData,
        onSubmit: this.onSubmit,
        cardData: this.cardData,
      },
    });

    const sub = myDialog.componentInstance.onAdd.subscribe((f: NgForm) => {
      // do something
      this.onSubmit(f);
    });
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    if (f.valid) {
      var newSong = f.value;
      this.insertSongEvent.emit(newSong);
      f.reset();
    } else {
      this.messageService.setMessage(
        'User must try to create the content again with the required fields filled in.'
      );
    }
  }
}

import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Optional,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss'],
})
export class MyDialogComponent implements OnInit {
  onAdd = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log({ data: this.data });
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    if (f.valid) this.closeDialog();
    this.onAdd.emit(f);
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }
}

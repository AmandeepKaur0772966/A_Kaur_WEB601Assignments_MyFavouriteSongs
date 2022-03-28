import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss'],
})
export class ModifyContentComponent implements OnInit {
  @Output() public insertSongEvent = new EventEmitter();
  @Input() public parentData: String = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

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

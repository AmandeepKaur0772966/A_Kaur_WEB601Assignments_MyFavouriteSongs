import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss'],
})
export class CreateContentComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public isValid?: boolean = true;

  ngOnInit(): void {}

  doInsertContent(f: NgForm) {
    return new Promise((resolve, reject) => {
      if (!f.valid) {
        reject(false); // pass values
      } else {
        /// insertData
        this.dataService.addMusic(f.value);
        resolve(f.value.title); // pass values
      }
    });
  }

  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid);
    // false
    this.doInsertContent(f).then(
      (title) => {
        console.log(`The addition is successful Title: ${title}`);

        // f.reset();
      },
      (err) => (this.isValid = f.valid ?? true)
    );

    // component using that pattern, the resolved promise should invoke a
    // success function that will add a message to the console saying the addition is successful,
    // along with the title of the content, and the input fields in the CreateContent's
    f.reset();
  }
}

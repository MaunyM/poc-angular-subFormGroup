import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  pocFormGroup: FormGroup = new FormGroup(
    {
      name: new FormControl(),
      dateTime: new FormGroup({
        date: new FormControl('', [Validators.required]),
        time: new FormControl('', [Validators.required])
      })
    }
  );

  constructor() {
  }

  ngOnInit() {
  }

}

import { Component, OnInit, VERSION } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  fg: FormGroup;
  constructor(private fb: FormBuilder, private svc: UserService) {}
  ngOnInit(): void {
    this.fg = this.fb.group({
      firstname: ['', [Validators.required, Validators.maxLength(100)]],
      lastname: ['', [Validators.required, Validators.maxLength(100)]],
      address: this.fb.array([]),
    });
    this.filldata();
  }
  addaddress() {
    this.formarry.push(
      this.fb.group({
        housename: [''],
        zip: [''],
      })
    );
  }
  filldata() {
    this.svc.users.subscribe((x) => {
      if (x.address.length > 0) {
        for (let i = 0; i < x.address?.length; i++) {
          this.formarry.push(
            this.fb.group({
              housename: [''],
              zip: [''],
            })
          );
        }
      }

      this.fg.setValue(x);
    });
  }
  get formarry(): FormArray {
    return <FormArray>this.fg.controls['address'];
  }
  save() {
    this.fg.get('firstname').hasError('requored');
    console.log(this.fg.value);
  }
}

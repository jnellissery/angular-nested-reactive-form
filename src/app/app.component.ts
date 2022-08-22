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
    this.formarry.push(this.addformgroup());
  }
  filldata() {
    this.svc.users.subscribe((x) => {
      if (x.address.length > 0) {
        for (let i = 0; i < x.address?.length; i++) {
          this.formarry.push(this.addformgroup());
        }
      } else {
        console.log(this.formarry.length);
        this.formarry.push(this.addformgroup());
      }

      this.fg.patchValue(x);
    });
  }
  get formarry(): FormArray {
    return <FormArray>this.fg.get('address');
  }
  save() {
    this.fg.get('firstname').hasError('requored');
    console.log(this.fg.value);
  }
  addarrry(): FormArray {
    return <FormArray>this.fg.get('address');
  }
  addformgroup(): FormGroup {
    return this.fb.group({
      housename: [''],
      zip: [''],
    });
  }
}

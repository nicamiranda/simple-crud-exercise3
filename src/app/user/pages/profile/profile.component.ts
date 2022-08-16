import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Profile } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  
  constructor(private pf: FormBuilder) { 
    this.profileForm = this.pf.group ({
      name: [""],
      email: [""],
      bio: [""],
      active: [""]
    })
  }

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe((data) => {
        console.log(data);
      })
  }

  submit() {
    console.log(this.profileForm.value);
  }

}

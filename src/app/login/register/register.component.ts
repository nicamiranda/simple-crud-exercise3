import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  hide: boolean = false;
  
  constructor(private rf : FormBuilder, private router: Router) {
    this.registerForm = this.rf.group(
      {
        email : ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  ngOnInit(): void {
  }

  onCreate() {
    if (!this.registerForm.valid) {
      return;
    }
    console.log(this.registerForm.value);
  }


  goToLogin() {
    this.router.navigate(['login']);
  }

}

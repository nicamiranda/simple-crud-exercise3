import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  hide: boolean = false;

  constructor(private lf : FormBuilder, private router: Router) { 
    this.loginForm = this.lf.group(
      {
        email : ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  ngOnInit() : void {
    
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }

  goToRegister() {
    this.router.navigate(['register']);
  }
}

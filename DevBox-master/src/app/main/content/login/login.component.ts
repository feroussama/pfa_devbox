import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import {AuthService} from 'C:/Users/hend/pfa/DevBox-master/src/app/services/auth.service';

import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: fuseAnimations
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;


  loginForm: FormGroup;
  loginFormErrors: any;

  constructor(
   
    private router: Router,
    //private flashMessage:FlashMessagesService
    private fuseConfig: FuseConfigService,
    private formBuilder: FormBuilder,
    private authService:AuthService
  )
  {
    this.fuseConfig.setConfig({
      layout: {
        navigation: 'none',
        toolbar: 'none',
        footer: 'none'
      }
    });

    this.loginFormErrors = {
      email: {},
      password: {}
    };
  }

  ngOnInit()
  {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
  }

  onLoginSubmit(f:NgForm){
    const user = {
     email: f.value.email,
      password: f.value.password
    }
   
    this.authService.authenticateUser(user).subscribe(data => {
    
      if(data['success']){
        
       
        this.router.navigate(['profile']);
      } else {
       
        this.router.navigate(['login']);
      
      }
    });
  }

  onLoginFormValuesChanged()
  {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.loginFormErrors[field] = {};

      // Get the control
      const control = this.loginForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }
}

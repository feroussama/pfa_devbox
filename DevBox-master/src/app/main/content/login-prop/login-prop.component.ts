import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import {ValidpropService} from 'C:/Users/hend/pfa/DevBox-master/src/app/services/validprop.service';


import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'app-login-prop',
  templateUrl: './login-prop.component.html',
  styleUrls: ['./login-prop.component.scss'],
  animations: fuseAnimations
})
export class LoginPropComponent implements OnInit {
  email: String;
  password: String;


  loginForm: FormGroup;
  loginFormErrors: any;

  constructor(

    private router: Router,
    private validpropService:ValidpropService,
    //private flashMessage:FlashMessagesService
    private fuseConfig: FuseConfigService,
    private formBuilder: FormBuilder
  ) {
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

  ngOnInit() {
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
   
    this.validpropService.authenticateUser(user).subscribe(data => {
    
      if(data.success){
        this.validpropService.storeUserData(data.token, data.user);
        /*this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 5000});*/
        this.router.navigate(['propprofile']);
      } else {
        /*this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000});*/
        this.router.navigate(['loginprop']);
      
      }
    });
  }

  onLoginFormValuesChanged() {
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'app-project-step',
  templateUrl: './project-step.component.html',
  styleUrls: ['./project-step.component.scss'],
    animations : fuseAnimations
})
export class ProjectStepComponent implements OnInit {
  ProjectTitle: String;
  Discription: String;


  loginForm: FormGroup;
  loginFormErrors: any;

  constructor(

  
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
      ProjectTitle: {},
      Discription: {}
    };
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      ProjectTitle: ['',Validators.required,],
      Discription: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
  }

  onLoginSubmit() {
    const user = {
      ProjectTitle: this.ProjectTitle,
      Discription: this.Discription
    }


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

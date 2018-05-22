import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'app-chap-form',
  templateUrl: './chap-form.component.html',
  styleUrls: ['./chap-form.component.scss'],
  animations: fuseAnimations
})
export class ChapFormComponent implements OnInit {
  form: FormGroup;
  formErrors: any;
  constructor(private fuseConfig: FuseConfigService, private formBuilder: FormBuilder) { 
    this.fuseConfig.setConfig({
      layout: {
        navigation: 'none',
        toolbar: 'none',
        footer: 'none'
      }
    });
    // Reactive form errors
    this.formErrors = {
      titre: {},
      contenu: {}

    };

    
  }

  ngOnInit() {
    // Reactive Form
    this.form = this.formBuilder.group({

      titre: ['', Validators.required],
      contenu: ['', Validators.required],
    


    });

    this.form.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }
  onFormValuesChanged() {
    for (const field in this.formErrors) {
      if (!this.formErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.formErrors[field] = {};

      // Get the control
      const control = this.form.get(field);

      if (control && control.dirty && !control.valid) {
        this.formErrors[field] = control.errors;
      }
    }
  }


}


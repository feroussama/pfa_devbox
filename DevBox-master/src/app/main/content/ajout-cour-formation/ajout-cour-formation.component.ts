import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';


@Component({
  selector: 'app-ajout-cour-formation',
  templateUrl: './ajout-cour-formation.component.html',
  styleUrls: ['./ajout-cour-formation.component.scss']
})
export class AjoutCourFormationComponent implements OnInit {
  questions: any[];
  form: FormGroup;
  formErrors: any;
   count = 0 ;

  constructor(private formBuilder: FormBuilder, private fuseConfig: FuseConfigService) {
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
      description: {},
      duree:{}

    };
  }
  ngOnInit() {
    // Reactive Form
    this.form = this.formBuilder.group({

      titre: ['', Validators.required],
      description: ['', Validators.required],
      duree: ['', Validators.required]


    });

    this.form.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }
  CountChap(){
    this.count++;
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


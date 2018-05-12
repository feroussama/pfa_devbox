import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';


import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'app-add-qcm',
  templateUrl: './add-qcm.component.html',
  styleUrls: ['./add-qcm.component.scss']
})
export class AddQcmComponent implements OnInit {
  formErrors: any;
  form: FormGroup;

  horizontalStepperStep1: FormGroup;
  horizontalStepperStep2: FormGroup;
  horizontalStepperStep3: FormGroup;
  horizontalStepperStep4: FormGroup;
  horizontalStepperStep5: FormGroup;
  horizontalStepperStep6: FormGroup;
  horizontalStepperStep7: FormGroup;
  horizontalStepperStep8: FormGroup;
  horizontalStepperStep9: FormGroup;
  horizontalStepperStep10: FormGroup;
  horizontalStepperStep11: FormGroup;
  horizontalStepperStep12: FormGroup;
  horizontalStepperStep13: FormGroup;
  horizontalStepperStep14: FormGroup;
  horizontalStepperStep15: FormGroup;
  horizontalStepperStep16: FormGroup;
  horizontalStepperStep17: FormGroup;
  horizontalStepperStep18: FormGroup;
  horizontalStepperStep19: FormGroup;
  horizontalStepperStep20: FormGroup;

  horizontalStepperStep1Errors: any;
  horizontalStepperStep2Errors: any;
  horizontalStepperStep3Errors: any;
  horizontalStepperStep4Errors: any;
  horizontalStepperStep5Errors: any;
  horizontalStepperStep6Errors: any;
  horizontalStepperStep7Errors: any;
  horizontalStepperStep8Errors: any;
  horizontalStepperStep9Errors: any;
  horizontalStepperStep10Errors: any;
  horizontalStepperStep11Errors: any;
  horizontalStepperStep12Errors: any;
  horizontalStepperStep13Errors: any;
  horizontalStepperStep14Errors: any;
  horizontalStepperStep15Errors: any;
  horizontalStepperStep16Errors: any;
  horizontalStepperStep17Errors: any;
  horizontalStepperStep18Errors: any;
  horizontalStepperStep19Errors: any;
  horizontalStepperStep20Errors: any;


  constructor(private formBuilder: FormBuilder, private fuseConfig: FuseConfigService ) {
 
   // config de template
   
   

    this.formErrors = {
      q1: {}, q1c1: {}, q1c2: {}, q1c3: {},
      q2: {}, q2c1: {}, q2c2: {}, q2c3: {},
      q3: {}, q3c1: {}, q3c2: {}, q3c3: {},
      q4: {}, q4c1: {}, q4c2: {}, q4c3: {},
      q5: {}, q5c1: {}, q5c2: {}, q5c3: {},
      q6: {}, q6c1: {}, q6c2: {}, q6c3: {},
      q7: {}, q7c1: {}, q7c2: {}, q7c3: {},
      q8: {}, q8c1: {}, q8c2: {}, q8c3: {},
      q9: {}, q9c1: {}, q9c2: {}, q9c3: {},
      q10: {}, q10c1: {}, q10c2: {}, q10c3: {},
      q11: {}, q11c1: {}, q11c2: {}, q11c3: {},
      q12: {}, q12c1: {}, q12c2: {}, q12c3: {},
      q13: {}, q13c1: {}, q13c2: {}, q13c3: {},
      q14: {}, q14c1: {}, q14c2: {}, q14c3: {},
      q15: {}, q15c1: {}, q15c2: {}, q15c3: {},
      q16: {}, q16c1: {}, q16c2: {}, q16c3: {},
      q17: {}, q17c1: {}, q17c2: {}, q17c3: {},
      q18: {}, q18c1: {}, q18c2: {}, q18c3: {},
      q19: {}, q19c1: {}, q19c2: {}, q19c3: {},
      q20: {}, q20c1: {}, q20c2: {}, q20c3: {}
    };


    this.horizontalStepperStep1Errors = {
      q1: {}, q1c1: {}, q1c2: {}, q1c3: {}
    };
    this.horizontalStepperStep2Errors = {
      q2: {}, q2c1: {}, q2c2: {}, q2c3: {}
    };
    this.horizontalStepperStep3Errors = {
      q3: {}, q3c1: {}, q3c2: {}, q3c3: {}
    };
    this.horizontalStepperStep4Errors = {
      q4: {}, q4c1: {}, q4c2: {}, q4c3: {}
    };

    this.horizontalStepperStep5Errors = {
      q5: {}, q5c1: {}, q5c2: {}, q5c3: {}
    };

    this.horizontalStepperStep6Errors = {
      q6: {}, q6c1: {}, q6c2: {}, q6c3: {}
    };
    this.horizontalStepperStep7Errors = {
      q7: {}, q7c1: {}, q7c2: {}, q7c3: {}
    };

    this.horizontalStepperStep8Errors = {
      q8: {}, q8c1: {}, q8c2: {}, q8c3: {}
    };

    this.horizontalStepperStep9Errors = {
      q9: {}, q9c1: {}, q9c2: {}, q9c3: {}
    };
    this.horizontalStepperStep10Errors = {
      q10: {}, q10c1: {}, q10c2: {}, q10c3: {}
    };
    this.horizontalStepperStep11Errors = {
      q11: {}, q11c1: {}, q11c2: {}, q11c3: {}
    };
    this.horizontalStepperStep12Errors = {
      q12: {}, q12c1: {}, q12c2: {}, q12c3: {}
    };
    this.horizontalStepperStep13Errors = {
      q13: {}, q13c1: {}, q13c2: {}, q13c3: {}
    };
    this.horizontalStepperStep14Errors = {
      q14: {}, q14c1: {}, q14c2: {}, q14c3: {}
    };
    this.horizontalStepperStep15Errors = {
      q15: {}, q15c1: {}, q15c2: {}, q15c3: {}
    };
    this.horizontalStepperStep16Errors = {
      q16: {}, q16c1: {}, q16c2: {}, q16c3: {}
    };
    this.horizontalStepperStep17Errors = {
      q17: {}, q17c1: {}, q17c2: {}, q17c3: {}
    };
    this.horizontalStepperStep18Errors = {
      q18: {}, q18c1: {}, q18c2: {}, q18c3: {}
    };
    this.horizontalStepperStep19Errors = {
      q19: {}, q19c1: {}, q19c2: {}, q19c3: {}
    };
    this.horizontalStepperStep20Errors = {
      q20: {}, q20c1: {}, q20c2: {}, q20c3: {}
    };

  }

  ngOnInit() {
    this.horizontalStepperStep1 = this.formBuilder.group({
      q1: ['', Validators.required], q1c1: ['', Validators.required], q1c2: ['', Validators.required], q1c3: ['', Validators.required],
    });
    this.horizontalStepperStep2 = this.formBuilder.group({
      q2: ['', Validators.required], q2c1: ['', Validators.required], q2c2: ['', Validators.required], q2c3: ['', Validators.required],
    });
    this.horizontalStepperStep3 = this.formBuilder.group({
      q3: ['', Validators.required], q3c1: ['', Validators.required], q3c2: ['', Validators.required], q3c3: ['', Validators.required],
    });
    this.horizontalStepperStep4 = this.formBuilder.group({
      q4: ['', Validators.required], q4c1: ['', Validators.required], q4c2: ['', Validators.required], q4c3: ['', Validators.required],
    });
    this.horizontalStepperStep5 = this.formBuilder.group({
      q5: ['', Validators.required], q5c1: ['', Validators.required], q5c2: ['', Validators.required], q5c3: ['', Validators.required],
    });
    this.horizontalStepperStep6 = this.formBuilder.group({
      q6: ['', Validators.required], q6c1: ['', Validators.required], q6c2: ['', Validators.required], q6c3: ['', Validators.required],
    });
    this.horizontalStepperStep7 = this.formBuilder.group({
      q7: ['', Validators.required], q7c1: ['', Validators.required], q7c2: ['', Validators.required], q7c3: ['', Validators.required],
    });
    this.horizontalStepperStep8 = this.formBuilder.group({
      q8: ['', Validators.required], q8c1: ['', Validators.required], q8c2: ['', Validators.required], q8c3: ['', Validators.required],
    });
    this.horizontalStepperStep9 = this.formBuilder.group({
      q9: ['', Validators.required], q9c1: ['', Validators.required], q9c2: ['', Validators.required], q9c3: ['', Validators.required],
    });
    this.horizontalStepperStep10 = this.formBuilder.group({
      q10: ['', Validators.required], q10c1: ['', Validators.required], q10c2: ['', Validators.required], q10c3: ['', Validators.required],
    });
    this.horizontalStepperStep11 = this.formBuilder.group({
      q11: ['', Validators.required], q11c1: ['', Validators.required], q11c2: ['', Validators.required], q11c3: ['', Validators.required],
    });
    this.horizontalStepperStep12 = this.formBuilder.group({
      q12: ['', Validators.required], q12c1: ['', Validators.required], q12c2: ['', Validators.required], q12c3: ['', Validators.required],
    });
    this.horizontalStepperStep13 = this.formBuilder.group({
      q13: ['', Validators.required], q13c1: ['', Validators.required], q13c2: ['', Validators.required], q13c3: ['', Validators.required],
    });
    this.horizontalStepperStep14 = this.formBuilder.group({
      q14: ['', Validators.required], q14c1: ['', Validators.required], q14c2: ['', Validators.required], q14c3: ['', Validators.required],
    });
    this.horizontalStepperStep15 = this.formBuilder.group({
      q15: ['', Validators.required], q15c1: ['', Validators.required], q15c2: ['', Validators.required], q15c3: ['', Validators.required],
    });
    this.horizontalStepperStep16 = this.formBuilder.group({
      q16: ['', Validators.required], q16c1: ['', Validators.required], q16c2: ['', Validators.required], q16c3: ['', Validators.required],
    });
    this.horizontalStepperStep17 = this.formBuilder.group({
      q17: ['', Validators.required], q17c1: ['', Validators.required], q17c2: ['', Validators.required], q17c3: ['', Validators.required],
    });
    this.horizontalStepperStep18 = this.formBuilder.group({
      q18: ['', Validators.required], q18c1: ['', Validators.required], q18c2: ['', Validators.required], q18c3: ['', Validators.required],
    });
    this.horizontalStepperStep19 = this.formBuilder.group({
      q19: ['', Validators.required], q19c1: ['', Validators.required], q19c2: ['', Validators.required], q19c3: ['', Validators.required],
    });
    this.horizontalStepperStep20 = this.formBuilder.group({
      q20: ['', Validators.required], q20c1: ['', Validators.required], q20c2: ['', Validators.required], q20c3: ['', Validators.required],


    });




    this.horizontalStepperStep1.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep2.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep3.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep4.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep5.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep6.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep7.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep8.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep9.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep10.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep11.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep12.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep13.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep14.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep15.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep16.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep17.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep18.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep19.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
    this.horizontalStepperStep20.valueChanges.subscribe(() => {
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

  finishHorizontalStepper() {
    alert('You have finished the horizontal stepper!');
  }

}

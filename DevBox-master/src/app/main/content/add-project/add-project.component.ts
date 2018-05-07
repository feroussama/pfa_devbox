import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  questions: any[];
  form: FormGroup;
  formErrors: any;

  constructor(private formBuilder: FormBuilder) {

    // Reactive form errors
    this.formErrors = {
      titre: {},
      description: {}


    };
  }

  ngOnInit() {
    this.questions = [
      {
        'q': 'quel est la durée de votre projet ?',
        'qc1': '2 au 5 mois',
        'qc2': '5 au 10 mois',
        'qc3': 'plus que 10 mois ',
      },
      {
        'q': 'quel est la complexite de votre projet ?  ',
        'qc1': 'professionel',
        'qc2': 'marketing',
        'qc3': 'personel',
      },
      {
        'q': 'quel est le nombre des fonctionalités de votre projet ? ',
        'qc1': '10',
        'qc2': '30',
        'qc3': 'plus que 50',
      },
      {
        'q': 'quel est le budget proposé par vous ?',
        'qc1': '1000 au 5000 Dt',
        'qc2': '5000 au 10000 DT',
        'qc3': 'plus que 10000 DT',
      },
    ]

    // Reactive Form
    this.form = this.formBuilder.group({

      titre: ['', Validators.required],
      description: ['', Validators.required]


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


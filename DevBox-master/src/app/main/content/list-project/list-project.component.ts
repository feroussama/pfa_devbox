import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { fuseAnimations } from '@fuse/animations';


@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ListProjectComponent implements OnInit {
  dialogRef: any;
  projects: any[];
  categories: any[];

  constructor() { }


  ngOnInit() {

    this.projects = [
      {
        'titre': 'gestion de syndicat',
        'description': 'developpement d une solution de gestion de syndicat en ligne  ',
        'category': 'firebase',

      },
      {
        'titre': 'e&m learning ',
        'description': 'de veloppement d une solution hybride de d education lectronique et mobile ',
        'category': 'web',

      },
      {
        'titre': 'e&m learning ',
        'description': 'de veloppement d une solution hybride de d education lectronique et mobile ',
        'category': 'purple',

      },
      {
        'titre': 'e&m learning ',
        'description': 'de veloppement d une solution hybride de d education lectronique et mobile ',
        'category': 'red',

      },
      {
        'titre': 'e&m learning ',
        'description': 'de veloppement d une solution hybride de d education lectronique et mobile ',
        'category': 'orange',

      },
      {
        'titre': 'e&m learning ',
        'description': 'de veloppement d une solution hybride de d education lectronique et mobile ',
        'category': 'deep-orange',

      },
      {
        'titre': 'e&m learning ',
        'description': 'de veloppement d une solution hybride de d education lectronique et mobile ',
        'category': 'green',

      },



      {
        'titre': 'ferjani',
        'description': 'oussama',
        'category': 'cloud',

      },
      {
        'titre': 'ferjani',
        'description': 'oussama',
        'category': 'android',

      },
    ];
    this.categories = [{
      'id': 0,
      'value': 'web',
      'label': 'Web'
    },
    {
      'id': 1,
      'value': 'firebase',
      'label': 'Firebase'
    },
    {
      'id': 2,
      'value': 'cloud',
      'label': 'Cloud'
    },
    {
      'id': 3,
      'value': 'android',
      'label': 'Android'
    }];
  }


}

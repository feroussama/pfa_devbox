import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class FormationComponent implements OnInit {
  projects: any[];
  courses:any[];
  categories: any[];
  constructor() { }

  ngOnInit() {
    this.courses = [{
      'id': '15459251a6d6b397565',
      'title': 'Basics of Angular',
      'slug': 'basics-of-angular',
      'category': 'web',
      'length': 30,
      'updated': 'Jun 28, 2017'
    },
      {
        'id': '154588a0864d2881124',
        'title': 'Basics of TypeScript',
        'slug': 'basics-of-typeScript',
        'category': 'web',
        'length': 60,
        'updated': 'Nov 01, 2017'
      },
      {
        'id': '15453ba60d3baa5daaf',
        'title': 'Android N: Quick Settings',
        'slug': 'android-n-quick-settings',
        'category': 'android',
        'length': 120,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '15453a06c08fb021776',
        'title': 'Keep Sensitive Data Safe and Private',
        'slug': 'keep-sensitive-data-safe-and-private',
        'category': 'android',
        'length': 45,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '15427f4c1b7f3953234',
        'title': 'Building a gRPC Service with Java',
        'slug': 'building-a-grpc-service-with-java',
        'category': 'cloud',
        'length': 30,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '1542d75d929a603125',
        'title': 'Build a PWA Using Workbox',
        'slug': 'build-a-pwa-using-workbox',
        'category': 'web',
        'length': 120,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '1543ee3a5b43e0f9f45',
        'title': 'Build an App for the Google Assistant with Firebase and Dialogflow',
        'slug': 'build-an-app-for-the-google-assistant-with-firebase-and-dialogflow',
        'category': 'firebase',
        'length': 30,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '1543cc4515df3146112',
        'title': 'Cloud Functions for Firebase',
        'slug': 'cloud-functions-for-firebase',
        'category': 'firebase',
        'length': 45,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '154398a4770d7aaf9a2',
        'title': 'Manage Your Pivotal Cloud Foundry App\'s Using Apigee Edge',
        'slug': 'manage-your-pivotal-cloud-foundry-apps-using-apigee-Edge',
        'category': 'cloud',
        'length': 90,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '15438351f87dcd68567',
        'title': 'Building Beautiful UIs with Flutter',
        'your': 'building-beautiful-uis-with-flutter',
        'category': 'web',
        'length': 90,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '1544e43dcdae6ebf876',
        'title': 'Cloud Firestore',
        'slug': 'cloud-firestore',
        'category': 'firebase',
        'length': 90,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '1541ca7af66da284177',
        'title': 'Customize Network Topology with Subnetworks',
        'slug': 'customize-network-topology-with-subnetworks',
        'category': 'web',
        'length': 45,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '154297167e781781745',
        'title': 'Looking at Campaign Finance with BigQuery',
        'slug': 'looking-at-campaign-finance-with-bigquery',
        'category': 'cloud',
        'length': 60,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '154537435d5b32bf11a',
        'title': 'Firebase Android',
        'slug': 'firebase-android',
        'category': 'android',
        'length': 45,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '154204e45a59b168453',
        'title': 'Simulating a Thread Network Using OpenThread',
        'slug': 'simulating-a-thread-network-using-openthread',
        'category': 'web',
        'length': 45,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '1541dd1e05dfc439216',
        'title': 'Your First Progressive Web App',
        'slug': 'your-first-progressive-web-app',
        'category': 'web',
        'length': 30,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '1532dfc67e704e48515',
        'title': 'Launch Cloud Datalab',
        'slug': 'launch-cloud-datalab',
        'category': 'cloud',
        'length': 60,
        'updated': 'Jun 28, 2017'
      },
      {
        'id': '1542e43dfaae6ebf226',
        'title': 'Personalize Your iOS App with Firebase User Management',
        'slug': 'personalize-your-ios-app-with-firebase-user-management',
        'category': 'firebase',
        'length': 90,
        'updated': 'Jun 28, 2017'
      }];


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

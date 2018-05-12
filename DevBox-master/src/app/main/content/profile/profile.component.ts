import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SessionService } from 'C:/devbox_final/pfa_devbox/DevBox-master/src/app/services/session.service';
import { Router } from '@angular/router';

import { fuseAnimations } from '@fuse/animations';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
   encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ProfileComponent {
  dialogRef: any;

  user:Object;

  constructor(/*private sessionService:SessionService, private router:Router*/) { }

   ngOnInit() {
   /* this.sessionService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
     err => {
       console.log(err);
       return false;
     });*/
   }

}

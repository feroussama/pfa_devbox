import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-chef-profile',
  templateUrl: './chef-profile.component.html',
  styleUrls: ['./chef-profile.component.scss'],
  animations: fuseAnimations
})
export class ChefProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

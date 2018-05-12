import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MService} from 'C:/devbox_final/pfa_devbox/DevBox-master/src/app/services/m.service';
import {Router} from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { User } from 'C:/devbox_final/pfa_devbox/models/user';
@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.scss']
})
export class EspaceAdminComponent {
  users: User[];
  forgotPasswordForm: FormGroup;
  forgotPasswordFormErrors: any;
  private categorieDevs = ['A', 'B', 'C', 'D'];


  constructor(
    private fuseConfig: FuseConfigService,
    private formBuilder: FormBuilder,
    private mService: MService,
     private router:Router

  ) {
    this.fuseConfig.setConfig({
      layout: {
        navigation: 'none',
        toolbar: 'none',
       
      }
    });

    this.forgotPasswordFormErrors = {
      email: {},
      msg: {}
    };


  }
  email: String;

  tex: String;
  onRegisterSubmit(){
    const user = {
     
      email: this.email,
      tex: this.tex
    }
   this.mService.envoi(user).subscribe(data => {
     console.log(data);
     
          if(data['success']){
           //this.router.navigate(['/login']);
          } else {
          // this.router.navigate(['/register']);
          }
        });
  }

ngOnInit()
{
  this.forgotPasswordForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    msg: ['', Validators.required]
  });


  this.forgotPasswordForm.valueChanges.subscribe(() => {
    this.onForgotPasswordFormValuesChanged();
  });

  this.getUsers();
}
getUsers(): void {
  this.mService.getUsers()
  .subscribe(users => this.users = users, err=>{console.log(err);
  });
}
onForgotPasswordFormValuesChanged()
{
  for (const field in this.forgotPasswordFormErrors) {
    if (!this.forgotPasswordFormErrors.hasOwnProperty(field)) {
      continue;
    }

    // Clear previous errors
    this.forgotPasswordFormErrors[field] = {};

    // Get the control
    const control = this.forgotPasswordForm.get(field);

    if (control && control.dirty && !control.valid) {
      this.forgotPasswordFormErrors[field] = control.errors;
    }
  }
}
/*
delete = function(id) {  
  this.mService.deleteUser(id)  
  .subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
  }
*/
/*
delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.mService.deleteUser(user).subscribe();
  }*/


  deleteUser(id) {
    this.users = this.users.filter(h => h !== id);
    this.mService.deleteUser(id).subscribe(res => {
      console.log('Deleted');
    });
}

acceptUser(user:User){
 
 
   this.mService.registerUser(user).subscribe(data => {
    if(data['success']){
        
       
      this.router.navigate(['adminspace']);
    } else {
     
      this.router.navigate(['registre']);
    
    }
  });

}

ajouterCategorie(user:User,categorieDev:String){

  this.mService.ajouterCategorie(user,categorieDev).subscribe(data => {
    if(data['success']){
        
       
      this.router.navigate(['adminspace']);
    } else {
     
      this.router.navigate(['registre']);
    
    }
  });


}





}







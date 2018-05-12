import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { LoginComponent } from './main/content/login/login.component';
import { MaterialModule } from 'app/material.module';
import { RegistreComponent } from './main/content/registre/registre.component';
import { ForgotPasswordComponent } from './main/content/forgot-password/forgot-password.component';
import { ProfileComponent } from './main/content/profile/profile.component';
import { EspaceAdminComponent } from './main/content/espace-admin/espace-admin.component';

import { LoginAdminComponent } from './main/content/login-admin/login-admin.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TestValidFormComponent } from './main/content/test-valid-form/test-valid-form.component';
import { SigninPropComponent } from './main/content/signin-prop/signin-prop.component';
import { StartComponent } from './main/content/start/start.component';
import { PropProfileComponent } from './main/content/prop-profile/prop-profile.component';
import { ProjectStepComponent } from './main/content/project-step/project-step.component';
import { LoginPropComponent } from './main/content/login-prop/login-prop.component';
import { TestTechComponent } from './main/content/test-tech/test-tech.component';

import { FuseAcademyModule } from './main/content/academy/academy.module';
import { FuseProjectDashboardComponent } from './main/content/project/project.component';
import { AuthService } from 'C:/devbox_final/pfa_devbox/DevBox-master/src/app/services/auth.service';
import { ValidadminService } from 'C:/devbox_final/pfa_devbox/DevBox-master/src/app/services/validadmin.service';
import { ValidpropService } from 'C:/devbox_final/pfa_devbox/DevBox-master/src/app/services/validprop.service';
import { MService } from 'C:/devbox_final/pfa_devbox/DevBox-master/src/app/services/m.service';
import { ListProjectComponent } from './main/content/list-project/list-project.component';
import { AddProjectComponent } from './main/content/add-project/add-project.component';
import { MembreEqpeProjetComponent } from './main/content/membre-eqpe-projet/membre-eqpe-projet.component';
import { AddQcmComponent } from './main/content/add-qcm/add-qcm.component';
import { ChefProfileComponent } from './main/content/chef-profile/chef-profile.component';
import { ChefNotifComponent } from './main/content/chef-notif/chef-notif.component';
import { DevNotifComponent } from './main/content/dev-notif/dev-notif.component';
import { DevResQcmComponent } from './main/content/dev-res-qcm/dev-res-qcm.component';
import { DevDiscuComponent } from './main/content/dev-discu/dev-discu.component';
import { ChefDiscuComponent } from './main/content/chef-discu/chef-discu.component';
import { FormationComponent } from './main/content/formation/formation.component';
import { KnowledgeBaseModule } from './main/content/knowledge-base/knowledge-base.module';
import { TestProjetComponent } from './main/content/test-projet/test-projet.component';









const appRoutes: Routes = [

   //espace developpeur

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registre',
        component: RegistreComponent
    },
    {
        path: 'forgot_password',
        component: ForgotPasswordComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
     {
        path: 'test_tech',
         component: TestTechComponent
    },
    // espace administrateur
    {
        path: 'adminlogin',
        component: LoginAdminComponent
    },
  
    {
        path: 'adminspace',
        component: EspaceAdminComponent
    },

    //proprietaire du projet

       {
        path: 'registreprop',
           component: SigninPropComponent
    },
  
    {
        path: 'loginprop',
        component: LoginPropComponent
    },
    {
        path: 'propprofile',
        component: PropProfileComponent
    },
    {
        path: 'project',
        component: FuseProjectDashboardComponent
    },
    {
        path: 'test-projet',
        component: TestProjetComponent

        
    },

    //chef projet
    {

        path: 'chef-profile',
        component: ChefProfileComponent


    },
    {

        path: 'chef-profile',
        component: ChefProfileComponent


    },
    {

        path: 'ajout_qcm',
        component: AddQcmComponent


    },

    

    {
        path: 'start',
        component: StartComponent
    },
   
    {
        path      : 'sample',
        redirectTo: 'sample'
    }
    
    
    
];


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistreComponent,
        ForgotPasswordComponent,
        ProfileComponent,
        EspaceAdminComponent,
        LoginAdminComponent,
        
        TestValidFormComponent,
        SigninPropComponent,
        StartComponent,
        PropProfileComponent,
        ProjectStepComponent,
        LoginPropComponent,
        TestTechComponent,
        FuseProjectDashboardComponent,
        ListProjectComponent,
        AddProjectComponent,
        MembreEqpeProjetComponent,
        AddQcmComponent,
        ChefProfileComponent,
        ChefNotifComponent,
        DevNotifComponent,
        DevResQcmComponent,
        DevDiscuComponent,
        ChefDiscuComponent,
        FormationComponent,
        TestProjetComponent,
       
   
       
   
        
        
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),

        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,
        MaterialModule,
       
        NgxDatatableModule,
        FuseAcademyModule,
        KnowledgeBaseModule
      
    ],
    providers: [AuthService,ValidadminService,ValidpropService,MService ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}

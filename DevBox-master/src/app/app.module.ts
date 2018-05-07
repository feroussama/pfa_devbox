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
import {AuthService} from 'C:/Users/hend/pfa/DevBox-master/src/app/services/auth.service';
import {ValidadminService} from 'C:/Users/hend/pfa/DevBox-master/src/app/services/validadmin.service';
import {ValidpropService} from 'C:/Users/hend/pfa/DevBox-master/src/app/services/validprop.service';
import {MService} from 'C:/Users/hend/pfa/DevBox-master/src/app/services/m.service';









const appRoutes: Routes = [
   
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
    {
        path: 'adminlogin',
        component: LoginAdminComponent
    },
  
    {
        path: 'adminspace',
        component: EspaceAdminComponent
    },
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
        path: 'projectstep',
        component: ProjectStepComponent

        
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
        FuseAcademyModule
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

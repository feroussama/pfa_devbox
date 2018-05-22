import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSidenavModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseAcademyCoursesComponent } from './courses/courses.component';
import { FuseAcademyCourseComponent } from './course/course.component';


const routes = [
    {
        path     : 'courses',
        component: FuseAcademyCoursesComponent,
        
    },
    {
        path     : 'courses/:courseId/:courseSlug',
        component: FuseAcademyCourseComponent,
     
    },
  
];

@NgModule({
    declarations: [
        FuseAcademyCoursesComponent,
        FuseAcademyCourseComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,

        FuseSharedModule
    ],
    providers   : [
        
    ]
})
export class FuseAcademyModule
{
}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FuseWidgetComponent } from './widget.component';
import { FuseWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        FuseWidgetComponent,
        FuseWidgetToggleDirective
    ],
    exports     : [
        FuseWidgetComponent,
        FuseWidgetToggleDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FuseWidgetModule
{
}

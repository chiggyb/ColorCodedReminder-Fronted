import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarterTemplateFormComponent } from './starterTemplateForm/starterTemplateForm.component';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/startertemplateform' },
  { path: 'startertemplateform', component: StarterTemplateFormComponent    }
]; 
  
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
    StarterTemplateFormComponent 
    // StarterReactiveFormComponent,
    // BasicFormComponent, TemplateFormComponent, ReactiveFormComponent,
    // ControlValueAccessorComponent, UpdateOnComponent, ReactiveDynamicFormComponent
  ];
}


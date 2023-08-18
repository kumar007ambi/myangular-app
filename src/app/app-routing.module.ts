import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
//import { AssignmentFormsComponent } from './assignment-forms/assignment-forms.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'pipes', component: MypipesComponent },
  { path: 'rForms', component: ReactiveformsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

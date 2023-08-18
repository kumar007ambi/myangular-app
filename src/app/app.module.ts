import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignmentFormsComponent } from './assignment-forms/assignment-forms.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    FormsComponent,
    AssignmentFormsComponent,
    MypipesComponent,
    ReversePipe,
    SortPipe,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

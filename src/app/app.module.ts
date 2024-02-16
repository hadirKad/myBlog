import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConditionStatementComponent } from './condition-statement/condition-statement.component';
import { LoopComponent } from './loop/loop.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import{FormsModule} from '@angular/forms';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { MaterialUiComponent } from './material-ui/material-ui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConditionStatementComponent,
    LoopComponent,
    SimpleFormComponent,
    StyleBindingComponent,
    MaterialUiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

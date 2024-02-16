import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConditionStatementComponent } from './condition-statement/condition-statement.component';
import { LoopComponent } from './loop/loop.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConditionStatementComponent,
    LoopComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

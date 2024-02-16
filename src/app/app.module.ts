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
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { BasicRoutingComponent } from './basic-routing/basic-routing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConditionStatementComponent,
    LoopComponent,
    SimpleFormComponent,
    StyleBindingComponent,
    MaterialUiComponent,
    ParentComponent,
    ChildComponent,
    PipeComponent,
    BasicRoutingComponent,
    PageNotFoundComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

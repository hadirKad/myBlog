import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ParentComponent} from './parent/parent.component';
import{ChildComponent} from './child/child.component';
import{PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'parent',
    component : ParentComponent
  },
  {
    path: 'child',
    component : ChildComponent
  },
  //page not found work when we don't have the path 404
  {
    path: '**',
    component : PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

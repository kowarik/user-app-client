import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { ApplicationComponent } from './application/application.component';
import { UserAppComponent } from './userapp/userapp.component';
import { AddAppComponent } from './application/add-app/add-app.component';
import { AddUserComponent } from './user/add-user/add-user.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'application', component: ApplicationComponent},
  {path: 'userapp', component: UserAppComponent},
  {path: 'application/addapp', component: AddAppComponent},
  {path: 'user/adduser', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

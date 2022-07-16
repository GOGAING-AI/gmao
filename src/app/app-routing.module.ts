import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ToolsComponent } from './components/tools/tools.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'users',component: UsersComponent},
  {path:'tools',component: ToolsComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: '', redirectTo:'/users', pathMatch: 'full' }, // redirect to
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

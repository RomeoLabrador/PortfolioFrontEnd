import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { applyStyles } from '@popperjs/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogindisplayComponent } from './login/logindisplay/logindisplay.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"login", component:LogindisplayComponent},
  {path:"home", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

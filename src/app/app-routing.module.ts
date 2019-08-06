import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';
import { RootComponent } from './root/root.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent,
        data: {
          breadcrumb: 'Sign In'
        }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: {
          breadcrumb: 'Sign Up'
        }
      },
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

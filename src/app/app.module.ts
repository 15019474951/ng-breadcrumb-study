import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { IndexComponent } from './index/index.component';
import { RootComponent } from './root/root.component';

@NgModule({
   declarations: [
      AppComponent,
      SigninComponent,
      SignupComponent,
      BreadcrumbComponent,
      IndexComponent,
      RootComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

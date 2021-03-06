import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { HeadComponent } from './layout/head.component';
import { LeftPanelComponent } from './layout/left-panel.component';
import { LoginComponent } from './components/login/login.component';
import { Helpers } from './helpers/helpers';
import { TokenService } from './services/token.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './config/config';
import { BaseService } from './services/base.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    HeadComponent,
    LeftPanelComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatSidenavModule, HttpClientModule
  ],
  providers: [Helpers, TokenService, AppConfig, BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

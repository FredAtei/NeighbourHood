import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BusinessComponent } from './business/business.component';
import { HoodComponent } from './hood/hood.component';
import { HoodFormComponent } from './hood-form/hood-form.component';
import { HoodListComponent } from './hood-list/hood-list.component';
import { RegisterComponent } from './register/register.component';
import { PostNeighbourComponent } from './post-neighbour/post-neighbour.component';
import { LogoutComponent } from './logout/logout.component';
import { NeighbourhoodComponent } from './neighbourhood/neighbourhood.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    RegisterComponent,
    PostNeighbourComponent,
    BusinessComponent,
    HoodComponent,
    HoodFormComponent,
    HoodListComponent,
    RegisterComponent,
    LogoutComponent,
    NeighbourhoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

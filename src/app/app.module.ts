import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from './view/home.component';
import{HeaderComponent} from './common/header.component';
import {FooterComponent} from './common/footer.component';
import{ClassComponent} from './view/class.component';
import{EventComponent} from './view/event.component';

import{AboutComponent } from './view/about.component';
import{ContactComponent}  from './view/contact.component';
import{BlogComponent}  from './view/blog.component';
import{AdminComponent} from './view/admin.component';
import{LoginComponent} from './view/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClassComponent,
    EventComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    AdminComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot()  

  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }

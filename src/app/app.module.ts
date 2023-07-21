import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { InicioComponent } from './template/inicio/inicio.component';
import { HeaderComponent } from './template/header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ConfirmEmComponent } from './confirm-em/confirm-em.component';
import { RephoneComponent } from './rephone/rephone.component';
import { ChangepwComponent } from './changepw/changepw.component';
import { ReconfirmComponent } from './reconfirm/reconfirm.component';
import { RecodeComponent } from './recode/recode.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    InicioComponent,
    HeaderComponent,
    RegisterComponent,
    RecoveryComponent,
    ConfirmEmComponent,
    RephoneComponent,
    ChangepwComponent,
    ReconfirmComponent,
    RecodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

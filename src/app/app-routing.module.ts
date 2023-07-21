import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepwComponent } from './changepw/changepw.component';
import { ConfirmEmComponent } from './confirm-em/confirm-em.component';
import { LoginComponent } from './login/login.component';
import { RecodeComponent } from './recode/recode.component';
import { ReconfirmComponent } from './reconfirm/reconfirm.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RegisterComponent } from './register/register.component';
import { RephoneComponent } from './rephone/rephone.component';
import { InicioComponent } from './template/inicio/inicio.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path:'inicio', component: InicioComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path: 'register', component: RegisterComponent},
  {path: 'recovery', component: RecoveryComponent},
  {path: 'confirm', component: ConfirmEmComponent},
  {path: 'rephone', component: RephoneComponent},
  {path: 'changepw', component: ChangepwComponent},
  {path: 'reconfirm', component: ReconfirmComponent},
  {path: 'recode', component: RecodeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponentComponent } from './warning-alert/warning-alert-component.component';
import { SuccessAlertComponentComponent } from './success-alert/success-alert-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponentComponent,
    SuccessAlertComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

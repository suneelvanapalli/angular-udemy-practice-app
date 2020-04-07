import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponentComponent } from './warning-alert/warning-alert-component.component';
import { SuccessAlertComponentComponent } from './success-alert/success-alert-component.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { ActivateService } from './Shared/activateService';
import { CounterService } from './Shared/counterService';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponentComponent,
    SuccessAlertComponentComponent,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Assignment1Component,
    Assignment5Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

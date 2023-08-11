import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { LoadingSpinnerComponent } from './icon-button/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    IconButtonComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

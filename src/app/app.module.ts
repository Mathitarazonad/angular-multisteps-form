import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StepsSectionComponent } from './components/steps-section/steps-section.component';
import { FormSectionComponent } from './components/form-section/form-section.component';
import { FormSentConfirmationComponent } from './components/form-sent-confirmation/form-sent-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StepsSectionComponent,
    FormSectionComponent,
    FormSentConfirmationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

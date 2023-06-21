import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StepsSectionComponent } from './components/steps-section/steps-section.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StepsSectionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LabeledTextFieldComponent } from './common/input-templates/labeled-text-field/labeled-text-field.component';
import { LabeledSelectFieldComponent } from './common/input-templates/labeled-select-field/labeled-select-field.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LabeledTextFieldComponent,
    LabeledSelectFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

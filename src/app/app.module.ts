import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LabeledTextFieldComponent } from './common/input-templates/labeled-text-field/labeled-text-field.component';
import { LabeledSelectFieldComponent } from './common/input-templates/labeled-select-field/labeled-select-field.component';
import { CotizadorComponent } from './pages/cotizador/cotizador.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BreedsDisplayComponent } from './pages/breed-display/breeds-display.component';
import { DogComponent } from './animals/dog/dog.component';
import { ToggleButtonComponent } from './common/toggle-button/toggle-button.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cotizador', component: CotizadorComponent },
  { path: 'breeds-display', component: BreedsDisplayComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LabeledTextFieldComponent,
    LabeledSelectFieldComponent,
    CotizadorComponent,
    PageNotFoundComponent,
    BreedsDisplayComponent,
    DogComponent,
    ToggleButtonComponent,
  ],
  imports: [
    BrowserModule,
    LightboxModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

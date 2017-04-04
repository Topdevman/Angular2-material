import 'hammerjs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';

// Defind the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

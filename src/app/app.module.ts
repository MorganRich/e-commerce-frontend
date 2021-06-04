import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AffichageLivreComponent } from './composants/affichage-livre/affichage-livre.component';
import { MenuComponent } from './composants/menu/menu.component';
import { DetailsLivreComponent } from './composants/details-livre/details-livre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AffichageLivreComponent,
    MenuComponent,
    DetailsLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

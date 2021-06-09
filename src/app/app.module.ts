import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AffichageLivreComponent } from './composants/affichage-livre/affichage-livre.component';
import { MenuComponent } from './composants/menu/menu.component';
import { DetailsLivreComponent } from './composants/details-livre/details-livre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultatRechercheComponent } from './composants/resultat-recherche/resultat-recherche.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AffichageLivreComponent,
    MenuComponent,
    DetailsLivreComponent,
    ResultatRechercheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

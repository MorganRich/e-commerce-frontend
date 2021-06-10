import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AffichageLivreComponent } from './composants/affichage-livre/affichage-livre.component';
import { MenuComponent } from './composants/menu/menu.component';
import { DetailsLivreComponent } from './composants/details-livre/details-livre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultatRechercheComponent } from './composants/resultat-recherche/resultat-recherche.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

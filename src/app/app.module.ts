import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichageLivreComponent } from './composants/affichage-livre/affichage-livre.component';
import { MenuComponent } from './composants/menu/menu.component';
import { DetailsLivreComponent } from './composants/details-livre/details-livre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultatRechercheComponent } from './composants/resultat-recherche/resultat-recherche.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { CommandeComponent } from './composants/commande/commande.component';
import { CreationCompteComponent } from './composants/creation-compte/creation-compte.component';
import { PanierComponent } from './composants/panier/panier.component';
import { CompteComponent } from './composants/compte/compte.component';

@NgModule({
  declarations: [
    AppComponent,
    AffichageLivreComponent,
    MenuComponent,
    DetailsLivreComponent,
    ResultatRechercheComponent,
    ConnexionComponent,
    CreationCompteComponent,
    CommandeComponent,
    PanierComponent,
    CompteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
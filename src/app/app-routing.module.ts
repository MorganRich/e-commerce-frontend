import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AffichageLivreComponent } from './composants/affichage-livre/affichage-livre.component';
import { CommandeComponent } from './composants/commande/commande.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { CreationCompteComponent } from './composants/creation-compte/creation-compte.component';
import { DetailsLivreComponent } from './composants/details-livre/details-livre.component';
import { ResultatRechercheComponent } from './composants/resultat-recherche/resultat-recherche.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: "livres", component: AffichageLivreComponent },
  { path: "livres/:id", component: DetailsLivreComponent },
  { path: "recherche/:param", component: ResultatRechercheComponent},
  { path: "connexion", component: ConnexionComponent },
  { path: "compte/creation", component: CreationCompteComponent},
  { path: "commande", component: CommandeComponent, canActivate :[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

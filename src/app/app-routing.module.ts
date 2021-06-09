import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageLivreComponent } from './composants/affichage-livre/affichage-livre.component';
import { DetailsLivreComponent } from './composants/details-livre/details-livre.component';
import { ResultatRechercheComponent } from './composants/resultat-recherche/resultat-recherche.component';

const routes: Routes = [
  { path: "livres", component: AffichageLivreComponent },
  { path: "livres/:id", component: DetailsLivreComponent },
  { path: "recherche/:param", component: ResultatRechercheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

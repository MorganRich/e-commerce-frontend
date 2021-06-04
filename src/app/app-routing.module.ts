import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageLivreComponent } from './composants/affichage-livre/affichage-livre.component';
import { DetailsLivreComponent } from './composants/details-livre/details-livre.component';

const routes: Routes = [
  { path: "livres", component: AffichageLivreComponent },
  { path: "livres/:id", component: DetailsLivreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

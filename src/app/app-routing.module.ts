import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageLivreComponent } from './composants/affichage-livre/affichage-livre.component';

const routes: Routes = [
  { path: "livres", component: AffichageLivreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

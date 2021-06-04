import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AffichageLivreComponent } from './composants/affichage-livre/affichage-livre.component';
import { MenuComponent } from './composants/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AffichageLivreComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

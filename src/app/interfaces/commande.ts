import { ligneCommande } from "./ligneCommande";

export interface Commande {
    prixTotalCommande?: number;
    numCommande? : number;
    dateCommande? : Date;
    lignesCommande? : ligneCommande[];
}
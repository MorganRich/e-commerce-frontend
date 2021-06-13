import { LignePanier } from "./lignePanier";
import { Personne } from "./personne";

export interface Commande {

    idUtilisateur? : number;
    referenceArticle?: number;
    prixTotalCommande?: number;
    
    lignesCommande? : LignePanier[];
    error?: boolean;

}

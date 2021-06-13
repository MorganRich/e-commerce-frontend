import { LignePanier } from "./lignePanier";


export interface Panier {

    idUtilisateur? : number;
    prixTotalCommande?: number;
    lignesPanier? : LignePanier[];
    
    

}
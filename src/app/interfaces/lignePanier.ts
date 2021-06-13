import { Livres } from "./livres";

export interface LignePanier {
    quantiteArticle?: number;

    prixTotalLigne?: number;
    livres?: Livres;
    quantiteEnStock? :number;
    stockErr? :string;
    

    prixTotalLigne?: number;
    livre?: Livres;

}
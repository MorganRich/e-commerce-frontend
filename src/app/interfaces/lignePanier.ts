import { Livres } from "./livres";

export interface LignePanier {
    quantiteArticle?: number;
    prixTotalLigne?: number;
    livre?: Livres;
}
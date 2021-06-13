import { Livres } from "./livres";


export interface LignePanier  {
   
    quantiteArticle?: number;
   // referenceArticle?: number;
    prixTotalLigne?: number;
    livres?: Livres;
    quantiteEnStock? :number;
    stockErr? :string;
    
}
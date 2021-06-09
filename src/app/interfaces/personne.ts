import { Adresse } from "./adresse";

export interface Personne {
    nom?: string;
    prenom?: string;
    motDePasse?: string;
    adresses?: Adresse[];
    email?: string;
}
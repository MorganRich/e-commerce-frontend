import { Adresse } from "./adresse";

export interface Personne {
    id?: number;
    nom?: string;
    prenom?: string;
    adresse?: Adresse[];
    email?: string;
    motDePasse?: string;
}

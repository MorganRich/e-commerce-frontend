import { Adresse } from "./adresse";

export interface Personne {
    idUtilisateur?: number;
    nom?: string;
    prenom?: string;
    adresse?: Adresse[];
    email?: string;
    motDePasse?: string;
}

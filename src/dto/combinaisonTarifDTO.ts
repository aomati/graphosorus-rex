/**
 * Settings API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BesoinToProduitDTO } from './besoinToProduitDTO';
import { TarifLightDTO } from './tarifLightDTO';


export interface CombinaisonTarifDTO {
    dateEntreeVigueur?: string;
    caisses?: Array<string>;
    produits?: Array<string>;
    selectedProduit?: string;
    besoinsToProduits?: Array<BesoinToProduitDTO>;
    tarifs?: Array<TarifLightDTO>;
}

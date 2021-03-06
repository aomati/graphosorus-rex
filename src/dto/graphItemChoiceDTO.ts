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
import { GraphPartItemDTO } from './graphPartItemDTO';
import { I18nDTO } from './i18nDTO';


/**
 * Information about a choice
 */
export interface GraphItemChoiceDTO extends GraphPartItemDTO {
    /**
     * the rank of the value (bit to activate)
     */
    rank: number;
}

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
import { GraphEdgeDTO } from './graphEdgeDTO';
import { GraphItemChoicesDTO } from './graphItemChoicesDTO';
import { GraphPartItemDTO } from './graphPartItemDTO';
import { I18nDTO } from './i18nDTO';


/**
 * Describe a vertice (a node) in the graph. Each vertices has a set of parents and a set of child. Those items are edges
 */
export interface GraphVerticeDTO extends GraphPartItemDTO {
    /**
     * array of parents edges
     */
    parents?: Array<number>;
    /**
     * array of child edges
     */
    children?: Array<GraphEdgeDTO>;
    choices?: GraphItemChoicesDTO;
}

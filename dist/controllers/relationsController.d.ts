import { Request, Response } from 'express';
/**
 * Get all active relations
 * Used in dropdowns for selecting student guardian relations
 */
export declare const getRelations: (req: Request, res: Response) => Promise<void>;
/**
 * Create a new relation (Admin only)
 */
export declare const createRelation: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
/**
 * Update a relation (Admin only)
 */
export declare const updateRelation: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
/**
 * Delete a relation (Admin only)
 * Soft delete - sets is_active to 0
 */
export declare const deleteRelation: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=relationsController.d.ts.map
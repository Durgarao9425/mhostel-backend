import { Request, Response } from 'express';
/**
 * Get all active ID proof types
 * Used in dropdowns for student forms
 */
export declare const getIdProofTypes: (req: Request, res: Response) => Promise<void>;
/**
 * Get ID proof type by ID
 */
export declare const getIdProofTypeById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
/**
 * Create a new ID proof type (Admin only)
 */
export declare const createIdProofType: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
/**
 * Update an ID proof type (Admin only)
 */
export declare const updateIdProofType: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
/**
 * Delete an ID proof type (Admin only)
 * Soft delete - sets is_active to 0
 */
export declare const deleteIdProofType: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=idProofTypesController.d.ts.map
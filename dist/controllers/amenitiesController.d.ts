import { Request, Response } from 'express';
/**
 * Get all active amenities
 * Used in dropdowns for adding/editing hostels
 */
export declare const getAmenities: (req: Request, res: Response) => Promise<void>;
/**
 * Get all active room amenities
 * Used in room forms for selecting room amenities
 */
export declare const getRoomAmenities: (req: Request, res: Response) => Promise<void>;
/**
 * Create a new amenity (Admin only)
 */
export declare const createAmenity: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
/**
 * Update an amenity (Admin only)
 */
export declare const updateAmenity: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
/**
 * Delete an amenity (Admin only)
 * Soft delete - sets is_active to 0
 */
export declare const deleteAmenity: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=amenitiesController.d.ts.map
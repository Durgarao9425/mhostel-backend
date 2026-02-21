import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
export declare const createHostel: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllHostels: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getHostelDetails: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateHostel: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteHostel: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=hostelController.d.ts.map
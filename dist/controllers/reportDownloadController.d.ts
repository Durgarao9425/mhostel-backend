import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
export declare const downloadPDFReport: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const downloadExcelReport: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=reportDownloadController.d.ts.map
import { Request, Response, NextFunction } from 'express';
import { TokenPayload } from '../utils/jwt.js';
export interface AuthRequest extends Request {
    user?: TokenPayload;
}
export declare const authMiddleware: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const isAdmin: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.d.ts.map
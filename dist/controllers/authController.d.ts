import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
export declare const authController: {
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    registerOwner(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    me(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
    changePassword(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    forgotPassword(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    resetPassword(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    verifyResetToken(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=authController.d.ts.map
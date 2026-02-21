import { verifyToken } from '../utils/jwt.js';
export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                error: 'Access token is required',
            });
        }
        const token = authHeader.substring(7);
        const payload = verifyToken(token);
        req.user = payload;
        next();
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            error: 'Invalid or expired token',
        });
    }
};
export const isAdmin = (req, res, next) => {
    if (req.user?.role_id !== 1) {
        return res.status(403).json({
            success: false,
            error: 'Admin access required',
        });
    }
    next();
};
//# sourceMappingURL=auth.js.map
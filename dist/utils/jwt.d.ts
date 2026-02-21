export interface TokenPayload {
    user_id: number;
    email: string;
    role_id: number;
    hostel_id?: number | null;
}
export declare const generateToken: (payload: TokenPayload) => string;
export declare const verifyToken: (token: string) => TokenPayload;
//# sourceMappingURL=jwt.d.ts.map
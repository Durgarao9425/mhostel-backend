export interface EmailOptions {
    to: string;
    subject: string;
    html: string;
}
export declare const sendEmail: (options: EmailOptions) => Promise<void>;
export declare const sendPasswordResetEmail: (email: string, resetToken: string, userName: string) => Promise<void>;
//# sourceMappingURL=email.d.ts.map
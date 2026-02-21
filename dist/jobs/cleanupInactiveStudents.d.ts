/**
 * Cleanup Job: Delete inactive students after 1 month
 *
 * This job should be run periodically (e.g., daily via cron job)
 * It deletes students who have been inactive for more than 1 month
 *
 * Logic:
 * - Find students with status = 'Inactive'
 * - Check if inactive_date is more than 1 month old
 * - Delete those student records permanently
 */
export declare const cleanupInactiveStudents: () => Promise<{
    success: boolean;
    deleted: number;
    message: string;
    students?: undefined;
    error?: undefined;
} | {
    success: boolean;
    deleted: number;
    students: any[];
    message: string;
    error?: undefined;
} | {
    success: boolean;
    deleted: number;
    error: string;
    message?: undefined;
    students?: undefined;
}>;
//# sourceMappingURL=cleanupInactiveStudents.d.ts.map
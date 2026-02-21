export declare const startMonthlyFeesGenerationJob: () => import("node-cron").ScheduledTask;
export declare const triggerManualMonthlyFeesGeneration: () => Promise<({
    skipped: boolean;
    reason: string;
    success?: undefined;
    students_count?: undefined;
    fees_created?: undefined;
    carry_forward_count?: undefined;
    total_records?: undefined;
    error?: undefined;
    message?: undefined;
    hostel_id: any;
    hostel_name: any;
} | {
    success: boolean;
    students_count: number;
    fees_created: number;
    carry_forward_count: number;
    total_records: number;
    skipped?: undefined;
    reason?: undefined;
    error?: undefined;
    message?: undefined;
    hostel_id: any;
    hostel_name: any;
} | {
    error: boolean;
    message: string;
    skipped?: undefined;
    reason?: undefined;
    success?: undefined;
    students_count?: undefined;
    fees_created?: undefined;
    carry_forward_count?: undefined;
    total_records?: undefined;
    hostel_id: any;
    hostel_name: any;
})[]>;
//# sourceMappingURL=monthlyFeesGeneration.d.ts.map
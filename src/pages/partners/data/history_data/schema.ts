import { z } from 'zod';

const HistorySchema = z.object({
    id: z.string(),
    name: z.string(),
    vat_number: z.string(),
    received_date: z.date(),
    comment: z.string(),
    status: z.object({
        type: z.string(),
        date: z.date(),
    })
});

export type History = z.infer<typeof HistorySchema>;
export default HistorySchema;
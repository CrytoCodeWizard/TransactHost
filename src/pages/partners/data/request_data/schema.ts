import { z } from 'zod';

const RequestSchema = z.object({
    id: z.string(),
    company_detail: z.object({
        name: z.string(),
        code: z.string(),
        address: z.string(),
    }),
    contact_info: z.object({
        name: z.string(),
        number: z.string(),
        mail: z.string(),
    }),
    received_date: z.date(),
});

export type Request = z.infer<typeof RequestSchema>;
export default RequestSchema;
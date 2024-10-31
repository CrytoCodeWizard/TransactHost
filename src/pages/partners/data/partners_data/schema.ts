import { z } from 'zod';

const PartnerSchema = z.object({
    id: z.string(),
    name: z.string(),
    connections: z.string(),
    outgoing: z.string(),
    incoming: z.string(),
});

export type Partner = z.infer<typeof PartnerSchema>;
export default PartnerSchema;
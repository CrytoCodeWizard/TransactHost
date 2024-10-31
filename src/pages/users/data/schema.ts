import { z } from 'zod';

const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    role: z.string(),
    status: z.string(),
});

export type User = z.infer<typeof UserSchema>;
export default UserSchema;
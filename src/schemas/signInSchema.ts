import * as z from "zod";

export const signInSchema = z.object({
    identifier: z.string(), //email
    password: z.string(),
})
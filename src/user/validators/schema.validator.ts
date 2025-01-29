import { z } from 'zod'

export const registerSchema = z.object({
    email: z.string().trim().toLowerCase().email({
        message: "Email is invalid"
    }),
    password: z.string().min(6,{
        message: "Password must be at least 6 characteres long"
    }),
    username: z.string().trim().min(3, {
        message: "User name must be at least 3 charactes long"
    })
})

export const loginSchema = z.object({
    email: z.string().trim().toLowerCase().email({
        message: "Email is invalid"
    }),
    password: z.string().min(6,{
        message: "Password must be at least 6 characteres long"
    }),
})
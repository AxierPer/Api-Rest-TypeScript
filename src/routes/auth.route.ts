import { Hono } from "hono";
import { registerSchema,loginSchema } from "../schemasValidator/schema.validator";
import { zValidator } from '@hono/zod-validator'

export const authRouter = new Hono();

// final path -> /api/v1/auth/login
authRouter.post('/login', zValidator('json', loginSchema),async (c)=>{
    return c.json({message: "Login"})
});

// final path -> /api/v1/auth/register
authRouter.post('/register',zValidator('json', registerSchema),async (c)=>{
    const {email,password,username} = await c.req.json()
    return c.json(
        {
            message: "Register",
            "user-data": {email,password,username}
        }
    )
});

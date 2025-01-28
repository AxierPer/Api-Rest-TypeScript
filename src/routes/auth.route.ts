import { Hono } from "hono";
import { registerSchema,loginSchema } from "../schemasValidator/schema.validator";
import { zValidator } from '@hono/zod-validator'
import { getUserByEmail } from "../database/queries/select.query";
import { createUser } from "../database/queries/insert.query";
import { hashingPassword, matchHashedPassword } from "../utils/hashing.utils";
import type { InsertUser } from "../database/schema";

export const authRouter = new Hono();

// final path -> /api/v1/auth/login
authRouter.post('/login', zValidator('json', loginSchema),async (c)=>{
    const { password, email } = await c.req.json()

    // Get data in DB and validate if user exist
    const [user] = await getUserByEmail(email)
    if (!user){
        return c.json({ message: "User not register in DB" }, 400)
    }

    // Validate match the password with hash in DB
    const match = await matchHashedPassword(password, user.password)

    // If Match is false, send error message
    if (match != true){
        return c.json({ message: "Email or Password is invalid" }, 401)
    }

    return c.json({message: "Login"})
});

// final path -> /api/v1/auth/register
authRouter.post('/register',zValidator('json', registerSchema),async (c)=>{
    const {email,password,username} = await c.req.json()

    // confirm with email already exist, you have change for Id or other parameter 
    const user = getUserByEmail(email)
    if ((await user).length > 0){
        return c.json({
            message: "Email already registered"
        }, 400)
    }

    // Hashing the password
    const hash = await hashingPassword(password)

    // create the user object with InsertUser class.
    const userData: InsertUser = {
        email: email,
        password: hash,
        username: username ?? email.split("@")[0], // <- Here the system takes the username from position 0 (user@mail.com), extracts "user," and saves it in the database.
    }

    // Insert data in DB
    const response = await createUser(userData)

    return c.json({ message: response })
});

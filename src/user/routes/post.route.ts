import { Hono } from "hono";
import { jwt } from "hono/jwt";
import { JWT_SECRET } from "../../utils/config.utils";

export const postRouter = new Hono();

// final path -> /api/v1/posts/
postRouter.get(
    '/',
    jwt({
        secret: JWT_SECRET,
    }),
    async (c)=>{
        const payload = c.get('jwtPayload');
        return c.json({message: "Hello post", payload});
    }
);
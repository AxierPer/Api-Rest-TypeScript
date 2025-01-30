import { Hono } from "hono";
import { getPosts } from "../queries/select.query";
import { jwt } from "hono/jwt";
import { JWT_SECRET } from "../../utils/config.utils";


export const principalRouter = new Hono();

// final path -> /api/v1/principal/
principalRouter.get('/', async (c)=>{
    const posts = await getPosts()
    return c.json({posts})
})

principalRouter.post(
    '/commented',
    jwt({
        secret: JWT_SECRET
    }),
    async (c)=>{
        const payload = c.get('jwtPayload');
        return c.json({message: "You can realize a comment in post", payload});
    }
)
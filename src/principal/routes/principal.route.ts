import { Hono } from "hono";
import { getPosts } from "../queries/select.query";

export const principalRouter = new Hono();

principalRouter.get('/', async (c)=>{
    const posts = await getPosts()
    return c.json({posts})
})
import { Hono } from "hono";
import { authRouter } from "./user/routes/auth.route";
import { postRouter } from "./user/routes/post.route";
import type { JwtVariables } from 'hono/jwt'
import { principalRouter } from "./principal/routes/principal.route";

type Variables = JwtVariables
const app = new  Hono<{ Variables: Variables }>();

app.route("/api/v1/auth", authRouter)
app.route("/api/v1/posts", postRouter)
app.route("/api/v1/principal", principalRouter)

export default {
    port: 4000,
    fetch: app.fetch,
}
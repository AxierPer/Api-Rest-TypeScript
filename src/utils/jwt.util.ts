import { decode, sign, verify } from "hono/jwt";
import { SECRET } from "../utils/config.utils";

export async function jwtGenerate(username:string, email:string, password:string){
    const payload = {
        sub: username,
        email: email,
        password: password,
        exp: Math.floor(Date.now()/1000) + 60 * 5, // if you want expire in one day use Math.floor(Date.now()/1000) + 60 * 60 * 24 
    }

    const secret = SECRET
    const token = await sign(payload, secret) 
    return token
}
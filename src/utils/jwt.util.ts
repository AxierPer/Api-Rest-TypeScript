import { sign } from "hono/jwt";
import { JWT_SECRET } from "../utils/config.utils";

export async function jwtGenerate(id:number, username:string, email:string, password:string){
    const payload = {
        sub: username,
        id:id,
        email: email,
        password: password,
        exp: Math.floor(Date.now()/1000) + 60 * 5, // if you want expire in one day use Math.floor(Date.now()/1000) + 60 * 60 * 24 
    }

    if (JWT_SECRET === 'YOUR JWT_SECRET') {
        throw Error('You must set the JWT_SECRET env variable')
    }

    const token = await sign(payload, JWT_SECRET) 
    return token
}
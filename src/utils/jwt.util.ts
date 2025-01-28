import { decode, sign, verify } from "hono/jwt";

export function jwtGenerate(){
    const payload = {
        sub: '',
        role: '',
        exp: Math.floor(Date.now()/1000) + 60 * 5, // if you want expire in one day use Math.floor(Date.now()/1000) + 60 * 60 * 24 
    }
}
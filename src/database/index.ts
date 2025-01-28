import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { AUTH_TOKEN,URL } from "../utils/config.utils";

function validateCredentials(url: string, token: string){
    if (token === 'YOUR AUTH_TOKEN'){
        throw new Error("Missing TURSO_AUTH_TOKEN. Please configure it in the environment or utils file.");
    };
    
    if (url === 'YOUR URL'){
        throw new Error("Missing TURSO_CONNECTION_URL. Please configure it in the environment or utils file.");
    };
}

validateCredentials(URL,AUTH_TOKEN)

const client = createClient({
    url: URL,
    authToken: AUTH_TOKEN
})

export const db = drizzle({ client })

/*
*This option is easier if you want less code,
*but Drizzle handles all the configuration,
*and you don't have flexibility in case you need to configure the client.

*export const db = drizzle({
*    connection: {
*        url: URL,
*        authToken: AUTH_TOKEN    
*    }
* })
*/
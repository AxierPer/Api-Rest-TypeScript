import { createClient } from "@libsql/client";
import { AUTH_TOKEN,SYNC_URL,URL } from "../utils/config.utils";

export const client = createClient({
    url: URL,
    syncUrl: SYNC_URL,
    authToken: AUTH_TOKEN,
});
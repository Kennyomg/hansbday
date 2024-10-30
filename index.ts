import { serve, file } from "bun";
const BASE_PATH = "./public";

serve({
    port: 3000,
    async fetch(req) {
        const path = new URL(req.url).pathname;
        let filePath = BASE_PATH + path;
        if (path === "/") {
            filePath = BASE_PATH + "/index.html";
        }

        const f = file(filePath);
        return new Response(f);
    },
    error() {
        return new Response(null, { status: 404 });
    },
});
Bun.serve({
    port: Bun.env.PORT,
    async fetch(req) {
        console.log("Received request:", req.method, req.url);
        const url = new URL(req.url);

        if (url.pathname.startsWith('/api/') || url.pathname === '/api') {
            return await Route(url);
        }

        const filePath = `../front/dist${url.pathname === '/' ?     '/index.html' : url.pathname}`;
        try {
            const file = Bun.file(filePath);
            if (await file.exists())
                return new Response(file)
        
        } catch (e) {
            console.error("Error serving file, falling back to index:", e);
        }
        return new Response(Bun.file('../front/dist/index.html'));
    }
})

async function Route(url: URL): Promise<Response> {
    if (url.pathname === '/api/shared') {
        const { sharedString } = await import("@shared/shared");
        return new Response(sharedString);
    }
    return new Response("Hello from the backend!");
}
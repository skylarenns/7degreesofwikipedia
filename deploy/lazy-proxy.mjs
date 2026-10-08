import http from "node:http";

// Retain the public endpoint without ever starting the retired graph backend.
const body = JSON.stringify({
  error: "project_decommissioned",
  message: "Project decommissioned. Have a good day!",
});

const server = http.createServer((request, response) => {
  response.writeHead(410, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "access-control-allow-origin": "*",
  });
  response.end(request.method === "HEAD" ? undefined : body);
});

server.listen(Number(process.env.LISTEN_PORT ?? 7878), process.env.LISTEN_HOST ?? "127.0.0.1");
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.once(signal, () => server.close(() => process.exit(0)));
}

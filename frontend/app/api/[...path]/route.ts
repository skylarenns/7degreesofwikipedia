export const dynamic = "force-dynamic";

function handle(): Response {
  return Response.json(
    { error: "project_decommissioned", message: "Project decommissioned. Have a good day!" },
    { status: 410, headers: { "Cache-Control": "no-store" } }
  );
}

export { handle as GET, handle as POST, handle as PUT, handle as PATCH, handle as DELETE, handle as HEAD, handle as OPTIONS };

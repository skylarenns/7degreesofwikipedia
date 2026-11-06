# Hosting retirement status — 2026-11-06

This is the status recorded during the domain migration. It distinguishes completed dedicated-backend and DNS retirement from Vercel-only cleanup. Retired hostnames have no replacement on `skylar.sh`. References below can be external dependencies; they do not imply this repository owns every service.

| Endpoint | Verified status |
|---|---|
| `7wiki.skylarenns.com` | Dedicated backend retired; DNS record(s) removed. Vercel custom-domain binding/alias absent. No replacement hostname. |
| `7wikiapi.skylarenns.com` | Dedicated backend retired; DNS record(s) removed. Vercel custom-domain binding/alias absent. No replacement hostname. |

## Documentation and deployment examples

The original URLs in source, environment examples and historical operational instructions are retained for provenance and rollback. They are not an instruction to recreate a retired public endpoint. Do not substitute the skylar.sh suffix for retirement-listed services. Local development instructions remain useful; hosting claims must be interpreted using the endpoint status above.

Migration-listed external dependencies still require their own verified cutover. Keep their legacy addresses while authentication, callbacks and cross-service behavior are being checked. Personal website/email addresses and explicitly retained applications stay on skylarenns.com.

No repository, database, recording, volume or configuration was deleted by this documentation change. Vercel project deletion is not implied by removal of its custom-domain binding.

## Evidence and rollback

The operator migration bundle contains `migration/retirement-results.md`, `migration/cloudflare/retired-dns-ledger.ndjson`, and `migration/vercel-retirement-ledger.json`. These are operational evidence paths, not files claimed to exist in this repository. Dedicated service/container originals and rollback commands are recorded separately in `migration/retirement-execution.json` and `migration/retirement-containers-execution.json`; DNS and Vercel snapshots remain separate. Restore only the exact intended service and dependency state during a deliberate rollback.

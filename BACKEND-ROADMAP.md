# Production backend rollout

The current UI is a complete demo-first experience. Before advertising cloud features, wire the following server-side milestones:

1. Onboard authenticated users by creating `profiles`, `worlds`, and owner `world_members` in one database transaction.
2. Build invitation create/accept Route Handlers. Generate a 32-byte random token, SHA-256 hash it before insertion, and only put the raw token in the URL. On acceptance, lock the invitation row, validate session/expiry/single-use, insert the partner membership, and mark it accepted in one transaction.
3. Write room changes with `revision = expectedRevision` and increment the revision. A zero-row result is a conflict: refetch, show the latest layout, and ask the user to retry.
4. Subscribe only to member-authorized Realtime channels; insert reaction/messages through validated server actions.
5. Upload images to the private bucket through a signed upload URL. Store only validated storage paths and issue signed download URLs after server-side membership verification.

No service role key should be imported into a client module or exposed as `NEXT_PUBLIC_*`.

# ServiceFlow — Agent Instructions

## Project overview

ServiceFlow is a multi-tenant SaaS platform for service businesses.

The repository is a monorepo managed with npm workspaces:

- `apps/web` — Next.js frontend with React and MUI.
- `apps/api` — NestJS backend with TypeScript.
- PostgreSQL — local development database started through Docker Compose.
- Prisma — database access layer for the API.

The project is currently in an early foundation stage. Avoid assuming that business features already exist.

## Repository structure

- Frontend source: `apps/web/src`
- Backend source: `apps/api/src`
- Prisma schema: `apps/api/prisma/schema.prisma`
- Backend tests: `apps/api/src/**/*.spec.ts`, `apps/api/test/**/*.e2e-spec.ts`
- Local infrastructure: `compose.yaml`

## Development commands

Run from the repository root:

```bash
npm install
docker compose up -d
npm run dev:web
npm run dev:api
```

Useful validation commands:

```bash
npm run build:web
npm run build:api
npm run test --workspace=apps/api
npm run test:e2e --workspace=apps/api
npm run format:check
```

## Coding conventions

- Use TypeScript with strict type checking.
- Follow the existing project formatting and ESLint/Prettier configuration.
- Prefer small, focused modules.
- Keep business logic out of controllers and React page components when it can be placed in services or dedicated modules.
- Reuse existing MUI theme and components instead of introducing another UI system.
- Preserve the monorepo structure and npm workspace conventions.
- Do not add dependencies unless they are necessary and the reason is clear.

## Backend conventions

- Use NestJS modules, controllers, and injectable services.
- Keep API contracts explicit and validated.
- Add or update unit tests for backend behavior.
- Add e2e tests for externally visible API behavior.
- Use Prisma for database access.
- Never put secrets or real credentials into source files.
- Keep database schema changes and migrations reviewable.

## Frontend conventions

- Use the Next.js App Router.
- Use MUI for UI components and the existing theme in `apps/web/src/theme.ts`.
- Keep server/client component boundaries intentional.
- Ensure pages remain accessible and responsive.
- Avoid downloading external assets during production builds when a local alternative is practical.

## Working rules

Before changing code:

1. Inspect the relevant files and existing tests.
2. State the intended scope and affected files.
3. Reuse existing patterns before introducing new abstractions.
4. Make the smallest complete change.
5. Run the most relevant tests or build commands.
6. Report what was changed and which checks passed or failed.

Do not:

- Rewrite unrelated code.
- Remove existing tests to make a build pass.
- Change database data destructively without explicit approval.
- Commit, push, deploy, or modify external systems unless explicitly requested.
- Claim that a check passed unless it was actually run.

## Current known limitations

- The Prisma schema does not yet contain domain models.
- Authentication and tenant isolation are not implemented.
- The backend currently contains only starter endpoints and health check functionality.
- The frontend is currently a starter page.
- The frontend build may require network access because the layout currently uses `next/font/google`.

When requirements are ambiguous, preserve the existing architecture and ask for clarification before making a large product or data-modeling decision.

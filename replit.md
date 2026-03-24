# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `artifacts/fireplace-services` (`@workspace/fireplace-services`)

React + Vite frontend for **Strata Property Services** (stratapropertyservices.com) — a multi-trade property maintenance company. SEO-optimized site targeting ~5800 words per page across ~220 unique pages.

Pages:
- **Home page** (`/`): Hero with property services background, trust bar, multi-trade services grid, pricing tiers, EyeSpyR diagnostic gallery, safety section, FAQ accordion, booking form, footer
- **About Us** (`/about`): Company story, team profiles (Colin Hamilton & Robert Hamilton), service divisions grid, CTA
- **Sample Report** (`/sample-report`): Printable Annual Gas Fireplace Inspection Report
- **City Pages** (`/areas/:city`): 17 city-specific landing pages — all 13 trades listed per city, maintenance guide articles, expanded FAQs
- **Trade Landing Pages** (`/services/:trade`): 13 trade pages — long description, 6-step process, benefits, 5 educational articles, industry insights, materials & methods, strata-specific content, seasonal considerations, safety & compliance, 10+ FAQs
- **Trade+City Pages** (`/services/:trade/:city`): 221 trade × city combo pages — full trade content + city-specific local facts and neighborhoods
- **Blog** (`/blog`): Blog listing page with 14 SEO articles with featured images, category filtering; individual posts at `/blog/:slug` with hero image, featured image, related services sidebar, and related articles. Homepage shows 4 most recent posts in a blog roll grid.

Key data files:
- `src/data/cities.ts`: 17 cities (incl. separate North Vancouver & West Vancouver) with neighborhoods, local facts, coordinates, meta descriptions
- `src/data/trades.ts`: 13 trades with features, FAQs, city intro templates, hero images
- `src/data/tradeContent.ts`: ~3500 words of unique SEO content per trade (longDescription, processSteps, educationalSections, extendedFaqs, benefits, industryInsight, materialsAndMethods, strataSpecificContent, seasonalConsiderations, safetyAndCompliance)
- `src/data/contacts.ts`: Contact info for Colin Hamilton (main) and Robert Hamilton (Gas/HVAC), with `getTradeContact()` helper
- `src/data/blogPosts.ts`: 14 SEO blog articles covering all 13 trades with categories, trade/city cross-references, full-length content, and featured images

Contact routing:
- Colin Hamilton (Owner): 604-761-1518, steelstud.ca — main contact for most trades, homepage, and default floater
- Robert Hamilton (Gas & HVAC): 604-765-8424 — contact for HVAC/gas fitting pages; floater shows Robert's number on HVAC pages
- Vee / ACC Construction Ltd: 778-636-7714, acconstructionltd@gmail.com, strataroofers.com — contact for roofing pages; floater shows Vee's number on roofing pages
- Floating phone button is route-aware: shows the appropriate contact's number based on trade page

Brand: STRATA PROPERTY SERVICES (logo: STRATA orange, PROPERTY SERVICES white), Domain: stratapropertyservices.com
Colors: dark slate secondary (#2d3748) + orange primary (#d84315), accent (#ff6f00)
Address: 19906 32 Ave, Langley, BC V3A 4T1; Email: info@stratapropertyservices.com
Credentials: Class B Gas Fitter #CGA0100182243, Gas Contractor License #LGA0041068, WorkSafeBC, Est. 1989
17 Cities: Vancouver, Burnaby, Surrey, Coquitlam, Langley, North Vancouver, West Vancouver, New Westminster, Richmond, Port Coquitlam, Port Moody, Maple Ridge, Delta, White Rock, Abbotsford, Mission, Chilliwack
13 Trades: snow-removal, condo-renovations, hvac, mini-excavation, siding, roofing, landscaping, painting, flooring, perimeter-drain, plumbing, drywall, restoration

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.

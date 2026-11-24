# Current Feature

<!-- Feature Name -->

Dashboard UI Phase 3

## Status

<!-- Not Started|In Progress|Completed -->

Completed

## Goals

<!-- Goals & requirements -->

- The main area to the right of the sidebar
- Recent collections
- Pinned items
- 10 recent items
- 4 stats cards at the top: number of items, collections, favorite items and favorite collections (not in screenshot)

## Notes

<!-- Any extra notes -->

- Phase 3 of 3 for the dashboard UI layout. Full spec: @context/features/dashboard-phase-3-spec.md
- Use mock data imported directly from @src/lib/mock-data.ts until the database is implemented
- References:
  - @context/screenshots/dashboard-ui-main.png
  - @context/project-overview.md
  - @src/lib/mock-data.ts
  - @context/features/dashboard-phase-1-spec.md
  - @context/features/dashboard-phase-2-spec.md

## History

<!-- Keep this updated. Earliest to latest -->

- Initial Next.js 16 setup with TypeScript and Tailwind CSS v4
- Project setup and boilerplate cleanup
- Mock data for dashboard UI (src/lib/mock-data.ts)
- Dashboard UI Phase 1: shadcn/ui setup, /dashboard route, dark mode default, top bar with search and New Item button, sidebar/main placeholders
- Dashboard UI Phase 2: collapsible sidebar (icon rail on desktop, drawer below 1024px), item types with links to /items/TYPE, favorite and recent collections, user avatar area, sidebar toggle in top bar
- Dashboard UI Phase 3: main area with 4 stats cards, recent collections grid, pinned items and 10 most recent items

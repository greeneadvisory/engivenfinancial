This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Engiven Admin API setup

To load live NPO data in the Master NPO List page, create a `.env.local` file in the project root with:

```bash
ENGIVEN_ADMIN_API_KEY=your_admin_api_key_here
SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
SUPABASE_SECRET_KEY=your_supabase_secret_key
```

Then restart the dev server.

### Master NPO sync (preview before save)

1. Run [supabase/sql/master_npo_sync.sql](supabase/sql/master_npo_sync.sql) in the Supabase SQL Editor.
	- If your table already exists, run [supabase/sql/master_npo_sync_add_missing_columns.sql](supabase/sql/master_npo_sync_add_missing_columns.sql) to add newly tracked fields.
2. Open the Master NPO List page.
3. Click **Preview API Changes** to compare incoming Engiven records against stored Supabase records.
4. Review the change list and select rows you want to apply.
5. Click **Save Selected Changes** to upsert only approved records.

If you already had saved rows before adding new columns, use **Backfill Saved Columns** once to repopulate all tracked fields from `raw_record`.

This flow writes approved changes into `master_npo_records` and logs applied diffs in `master_npo_change_log`.

### Crypto workflow setup

1. Run [supabase/sql/crypto_workflow_records.sql](supabase/sql/crypto_workflow_records.sql) in the Supabase SQL Editor.
2. Run [supabase/sql/ui_preferences.sql](supabase/sql/ui_preferences.sql) in the Supabase SQL Editor.

This enables persistent crypto workflow state and server-stored table field settings.

### Pagination standard (for all future pages)

Use the shared pagination pattern so all pages have consistent performance and UX:

1. Parse API query params with `parsePaginationParams` from [shared/lib/pagination.ts](shared/lib/pagination.ts).
2. Return paged API payloads with `page`, `perPage`, and `totalCount`.
3. Use `STANDARD_PAGE_SIZE_OPTIONS` and `DEFAULT_PAGE_SIZE` from [shared/lib/pagination.ts](shared/lib/pagination.ts).
4. Use [shared/@spk-reusable-components/uielements/spk-pagination-controls.tsx](shared/@spk-reusable-components/uielements/spk-pagination-controls.tsx) for non-DataTable pages.
5. For heavy records, return lightweight list rows first and fetch full detail on row focus/click.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

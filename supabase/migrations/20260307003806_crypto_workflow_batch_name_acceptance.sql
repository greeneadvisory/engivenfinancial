alter table public.crypto_workflow_records
	add column if not exists batch_name text null,
	add column if not exists accepted_at timestamptz null;

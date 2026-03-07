alter table public.crypto_workflow_records
	add column if not exists hidden_at timestamptz null;

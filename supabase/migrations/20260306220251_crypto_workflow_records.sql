create table if not exists public.crypto_workflow_records (
	transaction_id text primary key,
	raw_record jsonb not null,
	created_at_source timestamptz null,
	updated_at_source timestamptz null,
	batch_transaction_number text null,
	batch_assigned_at timestamptz null,
	created_at timestamptz not null default timezone('utc', now()),
	updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists crypto_workflow_records_batch_transaction_number_idx
	on public.crypto_workflow_records (batch_transaction_number);

create or replace function public.set_crypto_workflow_records_updated_at()
returns trigger
language plpgsql
set search_path = pg_catalog
as $$
begin
	new.updated_at = timezone('utc', now());
	return new;
end;
$$;

drop trigger if exists set_crypto_workflow_records_updated_at on public.crypto_workflow_records;

create trigger set_crypto_workflow_records_updated_at
before update on public.crypto_workflow_records
for each row
execute function public.set_crypto_workflow_records_updated_at();

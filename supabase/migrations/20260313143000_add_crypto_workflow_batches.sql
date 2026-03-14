create table if not exists public.crypto_workflow_batches (
  batch_transaction_number text primary key,
  batch_name text null,
  batch_assigned_at timestamptz null,
  transaction_count integer not null default 0,
  gross_total numeric(14, 2) not null default 0,
  fee_total numeric(14, 2) not null default 0,
  payout_total numeric(14, 2) not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.crypto_workflow_batches enable row level security;

drop policy if exists crypto_workflow_batches_service_role_all on public.crypto_workflow_batches;
create policy crypto_workflow_batches_service_role_all
on public.crypto_workflow_batches
for all
to service_role
using (true)
with check (true);

create or replace function public.set_crypto_workflow_batches_updated_at()
returns trigger
language plpgsql
set search_path = pg_catalog
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists set_crypto_workflow_batches_updated_at on public.crypto_workflow_batches;
create trigger set_crypto_workflow_batches_updated_at
before update on public.crypto_workflow_batches
for each row
execute function public.set_crypto_workflow_batches_updated_at();

insert into public.crypto_workflow_batches (
  batch_transaction_number,
  batch_name,
  batch_assigned_at,
  transaction_count,
  gross_total,
  fee_total,
  payout_total
)
select
  w.batch_transaction_number,
  max(w.batch_name),
  max(w.batch_assigned_at),
  count(*)::integer,
  coalesce(sum(coalesce(nullif(replace(m.usd_value_at_confirmation, ',', ''), ''), '0')::numeric), 0)::numeric(14, 2),
  (
    coalesce(sum(coalesce(nullif(replace(m.usd_value_at_confirmation, ',', ''), ''), '0')::numeric), 0)
    - coalesce(sum(coalesce(nullif(replace(m.usd_value_for_npo, ',', ''), ''), '0')::numeric), 0)
  )::numeric(14, 2),
  coalesce(sum(coalesce(nullif(replace(m.usd_value_for_npo, ',', ''), ''), '0')::numeric), 0)::numeric(14, 2)
from public.crypto_workflow_donations w
join public.master_crypto_records m on m.transaction_id = w.transaction_id
where w.batch_transaction_number is not null
group by w.batch_transaction_number
on conflict (batch_transaction_number) do update
set
  batch_name = excluded.batch_name,
  batch_assigned_at = excluded.batch_assigned_at,
  transaction_count = excluded.transaction_count,
  gross_total = excluded.gross_total,
  fee_total = excluded.fee_total,
  payout_total = excluded.payout_total;
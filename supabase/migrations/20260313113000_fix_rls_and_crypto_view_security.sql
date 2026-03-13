alter table public.master_npo_change_log enable row level security;
alter table public.master_npo_records enable row level security;
alter table public.master_crypto_records enable row level security;
alter table public.crypto_workflow_donations enable row level security;

create or replace view public.crypto_donation_records
with (security_invoker = true) as
select
  m.transaction_id,
  m.raw_record,
  m.transaction_confirmed_timestamp,
  m.created_at_source,
  m.updated_at_source,
  w.batch_transaction_number,
  w.batch_name,
  w.batch_assigned_at,
  w.accepted_at,
  w.hidden_at
from public.master_crypto_records m
join public.crypto_workflow_donations w on w.transaction_id = m.transaction_id;
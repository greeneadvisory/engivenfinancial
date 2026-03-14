create unique index if not exists crypto_workflow_batches_batch_date_name_unique_idx
  on public.crypto_workflow_batches (((batch_assigned_at at time zone 'utc')::date), lower(btrim(batch_name)))
  where batch_assigned_at is not null and batch_name is not null and btrim(batch_name) <> '';
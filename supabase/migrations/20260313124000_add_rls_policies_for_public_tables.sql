drop policy if exists master_npo_records_service_role_all on public.master_npo_records;
create policy master_npo_records_service_role_all
on public.master_npo_records
for all
to service_role
using (true)
with check (true);

drop policy if exists master_npo_change_log_service_role_all on public.master_npo_change_log;
create policy master_npo_change_log_service_role_all
on public.master_npo_change_log
for all
to service_role
using (true)
with check (true);

drop policy if exists master_crypto_records_service_role_all on public.master_crypto_records;
create policy master_crypto_records_service_role_all
on public.master_crypto_records
for all
to service_role
using (true)
with check (true);

drop policy if exists crypto_workflow_donations_service_role_all on public.crypto_workflow_donations;
create policy crypto_workflow_donations_service_role_all
on public.crypto_workflow_donations
for all
to service_role
using (true)
with check (true);
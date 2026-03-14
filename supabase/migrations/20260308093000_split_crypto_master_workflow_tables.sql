create table if not exists public.master_crypto_records (
  transaction_id text primary key,
  raw_record jsonb not null,
  created_at_source timestamptz null,
  updated_at_source timestamptz null,
  npo text null,
  npo_name text null,
  ein text null,
  guide_star_npo text null,
  guide_star_name text null,
  guide_star_ein text null,
  api_partner text null,
  api_partner_name text null,
  instant_partner text null,
  instant_partner_name text null,
  affiliate text null,
  affiliate_name text null,
  to_address text null,
  destination_tag text null,
  donor_name text null,
  donor_phone text null,
  donor_address1 text null,
  donor_address2 text null,
  donor_city text null,
  donor_state text null,
  donor_zip_code text null,
  donor_country text null,
  donor_memo text null,
  notes text null,
  transaction_hash text null,
  transaction_promised_timestamp text null,
  transaction_confirmed_timestamp text null,
  transaction_expired_timestamp text null,
  transaction_status text null,
  is_custody text null,
  pledged_amount text null,
  amount text null,
  custody_amount text null,
  custody_deposit_fee text null,
  currency text null,
  currency_name text null,
  usd_value_at_confirmation text null,
  usd_value_for_npo text null,
  status_from_admin text null,
  ach_date_entered text null,
  ach_reference_number text null,
  fiscal_sponsor text null,
  status_from_fiscal_sponsor text null,
  status_note_fiscal_sponsor text null,
  ach_date_entered_fiscal_sponsor text null,
  ach_reference_number_fiscal_sponsor text null,
  gemini_fee text null,
  anonymous_to_beneficiary text null,
  custom_donor text null,
  custom_donor_name text null,
  custom_donor_email text null,
  custom_donor_crypto_fee_rate text null,
  custom_donor_fiscal_sponsor_fee text null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.crypto_workflow_donations (
  transaction_id text primary key references public.master_crypto_records (transaction_id) on delete cascade,
  batch_transaction_number text null,
  batch_name text null,
  batch_assigned_at timestamptz null,
  accepted_at timestamptz null,
  hidden_at timestamptz null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

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

create unique index if not exists crypto_workflow_batches_batch_date_name_unique_idx
  on public.crypto_workflow_batches (((batch_assigned_at at time zone 'utc')::date), lower(btrim(batch_name)))
  where batch_assigned_at is not null and batch_name is not null and btrim(batch_name) <> '';

create index if not exists crypto_workflow_donations_batch_transaction_number_idx
  on public.crypto_workflow_donations (batch_transaction_number);

create index if not exists crypto_workflow_donations_accepted_at_idx
  on public.crypto_workflow_donations (accepted_at);

create index if not exists crypto_workflow_donations_hidden_at_idx
  on public.crypto_workflow_donations (hidden_at);

alter table public.master_crypto_records enable row level security;
alter table public.crypto_workflow_donations enable row level security;
alter table public.crypto_workflow_batches enable row level security;

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

drop policy if exists crypto_workflow_batches_service_role_all on public.crypto_workflow_batches;
create policy crypto_workflow_batches_service_role_all
on public.crypto_workflow_batches
for all
to service_role
using (true)
with check (true);

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

create or replace function public.set_master_crypto_records_updated_at()
returns trigger
language plpgsql
set search_path = pg_catalog
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create or replace function public.set_crypto_workflow_donations_updated_at()
returns trigger
language plpgsql
set search_path = pg_catalog
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

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

drop trigger if exists set_master_crypto_records_updated_at on public.master_crypto_records;
create trigger set_master_crypto_records_updated_at
before update on public.master_crypto_records
for each row
execute function public.set_master_crypto_records_updated_at();

drop trigger if exists set_crypto_workflow_donations_updated_at on public.crypto_workflow_donations;
create trigger set_crypto_workflow_donations_updated_at
before update on public.crypto_workflow_donations
for each row
execute function public.set_crypto_workflow_donations_updated_at();

drop trigger if exists set_crypto_workflow_batches_updated_at on public.crypto_workflow_batches;
create trigger set_crypto_workflow_batches_updated_at
before update on public.crypto_workflow_batches
for each row
execute function public.set_crypto_workflow_batches_updated_at();

do $$
begin
  if to_regclass('public.crypto_workflow_records') is null then
    return;
  end if;

  insert into public.master_crypto_records (
    transaction_id,
    raw_record,
    created_at_source,
    updated_at_source,
    npo,
    npo_name,
    ein,
    guide_star_npo,
    guide_star_name,
    guide_star_ein,
    api_partner,
    api_partner_name,
    instant_partner,
    instant_partner_name,
    affiliate,
    affiliate_name,
    to_address,
    destination_tag,
    donor_name,
    donor_phone,
    donor_address1,
    donor_address2,
    donor_city,
    donor_state,
    donor_zip_code,
    donor_country,
    donor_memo,
    notes,
    transaction_hash,
    transaction_promised_timestamp,
    transaction_confirmed_timestamp,
    transaction_expired_timestamp,
    transaction_status,
    is_custody,
    pledged_amount,
    amount,
    custody_amount,
    custody_deposit_fee,
    currency,
    currency_name,
    usd_value_at_confirmation,
    usd_value_for_npo,
    status_from_admin,
    ach_date_entered,
    ach_reference_number,
    fiscal_sponsor,
    status_from_fiscal_sponsor,
    status_note_fiscal_sponsor,
    ach_date_entered_fiscal_sponsor,
    ach_reference_number_fiscal_sponsor,
    gemini_fee,
    anonymous_to_beneficiary,
    custom_donor,
    custom_donor_name,
    custom_donor_email,
    custom_donor_crypto_fee_rate,
    custom_donor_fiscal_sponsor_fee,
    created_at,
    updated_at
  )
  select
    transaction_id,
    raw_record,
    created_at_source,
    updated_at_source,
    raw_record ->> 'npo',
    raw_record ->> 'npoName',
    raw_record ->> 'EIN',
    raw_record ->> 'guideStarNPO',
    raw_record ->> 'guideStarName',
    raw_record ->> 'guideStarEIN',
    raw_record ->> 'apiPartner',
    raw_record ->> 'apiPartnerName',
    raw_record ->> 'instantPartner',
    raw_record ->> 'instantPartnerName',
    raw_record ->> 'affiliate',
    raw_record ->> 'affiliateName',
    raw_record ->> 'toAddress',
    raw_record ->> 'destinationTag',
    raw_record ->> 'donorName',
    raw_record ->> 'donorPhone',
    raw_record ->> 'donorAddress1',
    raw_record ->> 'donorAddress2',
    raw_record ->> 'donorCity',
    raw_record ->> 'donorState',
    raw_record ->> 'donorZipCode',
    raw_record ->> 'donorCountry',
    raw_record ->> 'donorMemo',
    raw_record ->> 'notes',
    raw_record ->> 'transactionHash',
    raw_record ->> 'transactionPromisedTimeStamp',
    raw_record ->> 'transactionConfirmedTimeStamp',
    raw_record ->> 'transactionExpiredTimeStamp',
    raw_record ->> 'transactionStatus',
    raw_record ->> 'isCustody',
    raw_record ->> 'pledgedAmount',
    raw_record ->> 'amount',
    raw_record ->> 'custodyAmount',
    raw_record ->> 'custodyDepositFee',
    raw_record ->> 'currency',
    raw_record ->> 'currencyName',
    raw_record ->> 'usdValueAtConfirmation',
    raw_record ->> 'usdValueForNpo',
    raw_record ->> 'statusFromAdmin',
    raw_record ->> 'achDateEntered',
    raw_record ->> 'achReferenceNumber',
    raw_record ->> 'fiscalSponsor',
    raw_record ->> 'statusFromFiscalSponsor',
    raw_record ->> 'statusNoteFiscalSponsor',
    raw_record ->> 'achDateEnteredFiscalSponsor',
    raw_record ->> 'achReferenceNumberFiscalSponsor',
    raw_record ->> 'geminiFee',
    raw_record ->> 'anonymousToBeneficiary',
    raw_record ->> 'customDonor',
    raw_record ->> 'customDonorName',
    raw_record ->> 'customDonorEmail',
    raw_record ->> 'customDonorCryptoFeeRate',
    raw_record ->> 'customDonorFiscalSponsorFee',
    created_at,
    updated_at
  from public.crypto_workflow_records
  on conflict (transaction_id) do update
  set
    raw_record = excluded.raw_record,
    created_at_source = excluded.created_at_source,
    updated_at_source = excluded.updated_at_source,
    npo = excluded.npo,
    npo_name = excluded.npo_name,
    ein = excluded.ein,
    guide_star_npo = excluded.guide_star_npo,
    guide_star_name = excluded.guide_star_name,
    guide_star_ein = excluded.guide_star_ein,
    api_partner = excluded.api_partner,
    api_partner_name = excluded.api_partner_name,
    instant_partner = excluded.instant_partner,
    instant_partner_name = excluded.instant_partner_name,
    affiliate = excluded.affiliate,
    affiliate_name = excluded.affiliate_name,
    to_address = excluded.to_address,
    destination_tag = excluded.destination_tag,
    donor_name = excluded.donor_name,
    donor_phone = excluded.donor_phone,
    donor_address1 = excluded.donor_address1,
    donor_address2 = excluded.donor_address2,
    donor_city = excluded.donor_city,
    donor_state = excluded.donor_state,
    donor_zip_code = excluded.donor_zip_code,
    donor_country = excluded.donor_country,
    donor_memo = excluded.donor_memo,
    notes = excluded.notes,
    transaction_hash = excluded.transaction_hash,
    transaction_promised_timestamp = excluded.transaction_promised_timestamp,
    transaction_confirmed_timestamp = excluded.transaction_confirmed_timestamp,
    transaction_expired_timestamp = excluded.transaction_expired_timestamp,
    transaction_status = excluded.transaction_status,
    is_custody = excluded.is_custody,
    pledged_amount = excluded.pledged_amount,
    amount = excluded.amount,
    custody_amount = excluded.custody_amount,
    custody_deposit_fee = excluded.custody_deposit_fee,
    currency = excluded.currency,
    currency_name = excluded.currency_name,
    usd_value_at_confirmation = excluded.usd_value_at_confirmation,
    usd_value_for_npo = excluded.usd_value_for_npo,
    status_from_admin = excluded.status_from_admin,
    ach_date_entered = excluded.ach_date_entered,
    ach_reference_number = excluded.ach_reference_number,
    fiscal_sponsor = excluded.fiscal_sponsor,
    status_from_fiscal_sponsor = excluded.status_from_fiscal_sponsor,
    status_note_fiscal_sponsor = excluded.status_note_fiscal_sponsor,
    ach_date_entered_fiscal_sponsor = excluded.ach_date_entered_fiscal_sponsor,
    ach_reference_number_fiscal_sponsor = excluded.ach_reference_number_fiscal_sponsor,
    gemini_fee = excluded.gemini_fee,
    anonymous_to_beneficiary = excluded.anonymous_to_beneficiary,
    custom_donor = excluded.custom_donor,
    custom_donor_name = excluded.custom_donor_name,
    custom_donor_email = excluded.custom_donor_email,
    custom_donor_crypto_fee_rate = excluded.custom_donor_crypto_fee_rate,
    custom_donor_fiscal_sponsor_fee = excluded.custom_donor_fiscal_sponsor_fee,
    updated_at = timezone('utc', now());

  insert into public.crypto_workflow_donations (
    transaction_id,
    batch_transaction_number,
    batch_name,
    batch_assigned_at,
    accepted_at,
    hidden_at,
    created_at,
    updated_at
  )
  select
    transaction_id,
    batch_transaction_number,
    batch_name,
    batch_assigned_at,
    accepted_at,
    hidden_at,
    created_at,
    updated_at
  from public.crypto_workflow_records
  on conflict (transaction_id) do update
  set
    batch_transaction_number = excluded.batch_transaction_number,
    batch_name = excluded.batch_name,
    batch_assigned_at = excluded.batch_assigned_at,
    accepted_at = excluded.accepted_at,
    hidden_at = excluded.hidden_at,
    updated_at = timezone('utc', now());

  drop table public.crypto_workflow_records;
end;
$$;

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
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

create index if not exists crypto_workflow_donations_batch_transaction_number_idx
  on public.crypto_workflow_donations (batch_transaction_number);

create index if not exists crypto_workflow_donations_accepted_at_idx
  on public.crypto_workflow_donations (accepted_at);

create index if not exists crypto_workflow_donations_hidden_at_idx
  on public.crypto_workflow_donations (hidden_at);

create or replace function public.set_master_crypto_records_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create or replace function public.set_crypto_workflow_donations_updated_at()
returns trigger
language plpgsql
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

-- Optional migration from the legacy table if it still exists.
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
  set raw_record = excluded.raw_record;

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
  on conflict (transaction_id) do nothing;
end;
$$;
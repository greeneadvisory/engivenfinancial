create extension if not exists pgcrypto;

create table if not exists public.master_npo_records (
  id bigint generated always as identity primary key,
  source_id text,
  npo_external_id text not null unique,
  created_at_source text,
  updated_at_source text,
  npo_name text,
  ein text,
  affiliate text,
  affiliate_name text,
  api_partner text,
  api_partner_name text,
  instant_partner text,
  instant_partner_name text,
  website_url text,
  address text,
  verification_status text,
  city text,
  state text,
  zip_code text,
  country_of_origin text,
  notification_email text,
  gemini_bank_connection_status text,
  fiscal_sponsor text,
  raw_record jsonb not null,
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  last_applied_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_master_npo_records_external_id on public.master_npo_records (npo_external_id);
create index if not exists idx_master_npo_records_updated_at on public.master_npo_records (updated_at desc);

create table if not exists public.master_npo_change_log (
  id bigint generated always as identity primary key,
  npo_external_id text not null,
  change_type text not null check (change_type in ('insert', 'update')),
  changed_fields text[] not null default '{}',
  previous_record jsonb,
  new_record jsonb not null,
  previewed_at timestamptz not null default now(),
  applied_at timestamptz not null default now(),
  applied_by text,
  created_at timestamptz not null default now()
);

create index if not exists idx_master_npo_change_log_external_id on public.master_npo_change_log (npo_external_id);
create index if not exists idx_master_npo_change_log_applied_at on public.master_npo_change_log (applied_at desc);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_master_npo_records_updated_at on public.master_npo_records;
create trigger trg_master_npo_records_updated_at
before update on public.master_npo_records
for each row
execute function public.set_updated_at();

create table if not exists public.ui_preferences (
  preference_key text primary key,
  preference_value jsonb null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create or replace function public.set_ui_preferences_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists set_ui_preferences_updated_at on public.ui_preferences;

create trigger set_ui_preferences_updated_at
before update on public.ui_preferences
for each row
execute function public.set_ui_preferences_updated_at();

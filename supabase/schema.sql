create extension if not exists pgcrypto;

create table if not exists public.decks (
  id text primary key default gen_random_uuid()::text,
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  file_name text not null,
  deck_text text not null,
  key_card text not null default '-1',
  sort_index text not null default '0',
  revision integer not null default 0,
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  source_client text not null default 'unknown'
);

create index if not exists decks_user_updated_idx on public.decks (user_id, updated_at desc);
create index if not exists decks_user_deleted_idx on public.decks (user_id, deleted_at);

alter table public.decks enable row level security;

drop policy if exists "Users can read own decks" on public.decks;
create policy "Users can read own decks"
on public.decks for select
using (auth.uid() = user_id);

drop policy if exists "Users can insert own decks" on public.decks;
create policy "Users can insert own decks"
on public.decks for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can update own decks" on public.decks;
create policy "Users can update own decks"
on public.decks for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can delete own decks" on public.decks;
create policy "Users can delete own decks"
on public.decks for delete
using (auth.uid() = user_id);

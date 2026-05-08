-- Migration: 001_create_visitor_logs
-- Run this in the Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

create table if not exists public.visitor_logs (
  id          uuid        default gen_random_uuid() primary key,
  ip          text,
  country     text,
  city        text,
  user_agent  text,
  path        text        not null,
  method      text        not null default 'GET',
  referer     text,
  created_at  timestamptz default now() not null
);

-- Performance indexes
create index if not exists visitor_logs_created_at_idx on public.visitor_logs (created_at desc);
create index if not exists visitor_logs_country_idx    on public.visitor_logs (country);
create index if not exists visitor_logs_path_idx       on public.visitor_logs (path);

-- Row Level Security: deny all direct access, only service role can read/write
alter table public.visitor_logs enable row level security;

-- No policy = deny all for anon/authenticated roles
-- The Nuxt server uses the service_role key which bypasses RLS entirely

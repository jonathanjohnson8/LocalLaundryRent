create policy "Allow anon insert" on public.leads
  for insert
  to anon
  with check (true);

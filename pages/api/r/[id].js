import { supabaseAdmin } from '@/lib/supabaseAdmin';

export default async function handler(req, res) {
  const { id } = req.query;
  if (!id) return res.status(400).end();

  const { data, error } = await supabaseAdmin
    .from('posts')
    .select('link_url, clicks_count')
    .eq('id', id)
    .single();

  if (error || !data) return res.status(404).end();

  await supabaseAdmin.from('posts').update({ clicks_count: (data.clicks_count ?? 0) + 1 }).eq('id', id);

  res.writeHead(302, { Location: data.link_url });
  res.end();
}
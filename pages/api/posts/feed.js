import { supabaseAdmin } from '@/lib/supabaseAdmin';

export default async function handler(req, res) {
  const country = String(req.query.country || '');
  const category = String(req.query.category || '');
  if (!country || !category) return res.status(400).json({ error: 'missing_filters' });

  const { data, error } = await supabaseAdmin
    .from('posts')
    .select('id,title,link_url,country,category,published_at,expires_at,clicks_count,publisher,type')
    .eq('status','active')
    .gt('expires_at', new Date().toISOString())
    .eq('country', country)
    .eq('category', category)
    .order('published_at', { ascending: false })
    .limit(100);

  if (error) return res.status(500).json({ error: 'db_query_failed' });
  res.status(200).json({ posts: data || [] });
}
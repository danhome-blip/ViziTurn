import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { isBlockedText, isBlockedLink } from '@/lib/blocklist';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { title, link_url, country, category, duration_days, publisher, type='standard' } = req.body || {};

  const allowedCats = ['arta','muzica','carte','ong','eveniment','educatie'];
  const allowedTypes = ['standard','ong','media'];

  if (!title || !link_url || !country || !category || ![1,3,7].includes(Number(duration_days))) {
    return res.status(400).json({ error: 'fields_missing_or_invalid' });
  }
  if (!allowedCats.includes(String(category).toLowerCase())) {
    return res.status(400).json({ error: 'category_not_allowed' });
  }
  if (!allowedTypes.includes(String(type))) {
    return res.status(400).json({ error: 'type_not_allowed' });
  }
  if (isBlockedText(`${title} ${publisher||''}`) || isBlockedLink(link_url)) {
    return res.status(400).json({ error: 'content_blocked' });
  }

  // Reguli speciale
  const finalDuration = (type === 'media') ? 1 : Number(duration_days);

  const expiresAt = new Date(Date.now() + finalDuration * 86400000).toISOString();
  const { data, error } = await supabaseAdmin.from('posts').insert({
    title, link_url, country, category, duration_days: finalDuration, expires_at: expiresAt,
    status: 'active', publisher: publisher || null, type
  }).select('id').single();

  if (error) return res.status(500).json({ error: 'db_insert_failed', details: error.message });
  res.status(200).json({ ok: true, id: data.id });
}
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export default async function handler(_req, res) {
  const nowIso = new Date().toISOString();
  const { error } = await supabaseAdmin
    .from('posts')
    .update({ status:'expired' })
    .lte('expires_at', nowIso)
    .eq('status','active');

  if (error) return res.status(500).json({ error: 'expire_failed' });
  res.status(200).json({ ok: true });
}
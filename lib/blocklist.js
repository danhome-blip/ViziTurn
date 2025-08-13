// Termeni/Domenii interzise (exemplu minimal). Extinde după nevoie.
export const BLOCK_TERMS = [
  'gambling','bet','cazino','videochat','forex','get-rich-quick','binary options',
  'porn','xxx','escort'
];
export function isBlockedText(s='') {
  const low = String(s).toLowerCase();
  return BLOCK_TERMS.some(t => low.includes(t));
}
export function isBlockedLink(url='') {
  try {
    const u = new URL(url);
    const badHosts = ['bit.ly','goo.gl','tinyurl.com'];
    return badHosts.includes(u.hostname.toLowerCase());
  } catch { return true; }
}
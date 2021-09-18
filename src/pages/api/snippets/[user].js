import { getUserSnippets } from '@/utils/fauna';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405);
  }
  
  try {
    const snippets = await getUserSnippets(req.query.user)
    return res.status(200).json(snippets)
  } catch (err) {
    return res.status(500).json(err);
  }
}
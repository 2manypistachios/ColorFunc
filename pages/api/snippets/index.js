import { getPublicSnippets } from '@/utils/Fauna';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405);
  }
  
  try {
    const snippets = await getPublicSnippets()
    return res.status(200).json(snippets)
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Something went wrong.' });
  }
}
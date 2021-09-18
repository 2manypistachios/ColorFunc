import { getPublicSnippets } from 'src/utils/Fauna';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405);
  }
  
  try {
    const snippets = await getPublicSnippets()
    return res.status(200).json(snippets)
  } catch (err) {
    return res.status(500).json(err);
  }
}
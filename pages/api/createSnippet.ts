import { createSnippet } from '@/utils/Fauna';
import { Snippet } from '@/utils/Fauna';

export default async function handler(req, res) {
  const { user, isPublic, hex, harmony, loop, brightFunc, satFunc, name }: Snippet = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ msg: "Only POST allowed." });
  }

  try {
    const createdSnippet = await createSnippet({ user, isPublic, hex, harmony, loop, brightFunc, satFunc, name });
    return res.status(200).json(createdSnippet)
  } catch (err) {
    // console.error(err);
    return res.status(500).json({ msg: 'Something went wrong.' });
  }
}
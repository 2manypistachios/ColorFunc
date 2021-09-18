import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { deleteSnippet, getSnippetById } from 'src/utils/Fauna';

export default withApiAuthRequired(async (req, res) => {
  const session = getSession(req, res);
  const {nickname} = session.user;

  if (req.method !== 'DELETE') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }

  const { id } = req.body;
  const existingRecord = await getSnippetById(id);
  if (!existingRecord || existingRecord.data.user !== nickname) {
    res.statusCode = 404;
    return res.json({ msg: 'Record not found' });
  }

  try {
    const deleted = await deleteSnippet(id);
    return res.status(200).json(deleted);
  } catch (err) {
    // console.error(err);
    return res.status(500).json({ msg: 'Something went wrong.' });
  }
})

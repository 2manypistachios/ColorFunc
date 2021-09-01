import faunadb, { query } from 'faunadb';
const { Map, Paginate, Match, Index, Lambda, Get, Var, Delete, Ref, Collection, Create } = query;

const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET, domain: 'db.us.fauna.com' });


const getPublicSnippets = async () => {
  const { data } = await faunaClient.query(
    Map(
      Paginate(Match(Index("snippets_by_public"), true)),
      Lambda("ref", Get(Var("ref")))
    )
  );

  const snippets = data.map(snippet => {
    snippet.id = snippet.ref.id;
    delete snippet.ref;
    return snippet;
  });

  return snippets;
};

const getUserSnippets = async (user) => {
  const { data } = await faunaClient.query(
    Map(
      Paginate(Match(Index("snippets_by_user"), user)),
      Lambda("ref", Get(Var("ref")))
    )
  );

  const snippets = data.map(snippet => {
    snippet.id = snippet.ref.id;
    delete snippet.ref;
    return snippet;
  });

  return snippets;
}

const createSnippet = async ({ user, isPublic, startingColor, colorScheme, loop, brightFunc, satFunc, name }) => {
  return await faunaClient.query(
    Create(Collection('snippets'), {
      data: {
        user, isPublic, startingColor, colorScheme, loop, brightFunc, satFunc, name
      }
    })
  )
}

const getSnippetById = async (id) => {
  const snippet = await faunaClient.query(Get(Ref(Collection('snippets'), id)));
  snippet.id = snippet.ref.id;
  delete snippet.ref;

  console.log("get snipped by id snippet: ", snippet, id)
  return snippet;
};

const deleteSnippet = async (id) => {
  console.log("delete snipped id: ", id)
  return await faunaClient.query(
    Delete(Ref(Collection('snippets'), id))
  );
};

module.exports = {
  getPublicSnippets,
  getUserSnippets,
  getSnippetById,
  createSnippet,
  deleteSnippet
};
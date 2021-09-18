import faunadb, { query } from 'faunadb';
import * as Fauna from 'faunadb/src/types/values'

const { Map, Paginate, Match, Index, Lambda, Get, Var, Delete, Ref, Collection, Create } = query;
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET, domain: 'db.us.fauna.com' });

import {GenHarmony, GenTones} from '@/utils/colors'

interface FaunaInfo {
  name: string, 
  user: string,
  isPublic: boolean,
  ref?: {
    id: string
  }
  id?: string
}

export type Snippet =
  FaunaInfo &
  GenTones &
  Omit<GenHarmony, 'startingColor'> &
  {
    hex: string
  }

type FaunaResult = Fauna.values.Document<Snippet[]>

export const getPublicSnippets = async () => {
  const result: FaunaResult = await faunaClient.query(
    Map(
      Paginate(Match(Index("snippets_by_public"), true)),
      Lambda("ref", Get(Var("ref")))
    )
  );

  const snippets = result.data.map(snippet => {
    snippet.id = snippet.ref.id;
    delete snippet.ref;
    return snippet;
  });

  return snippets;
};

export const getUserSnippets = async (user) => {
  const result: FaunaResult = await faunaClient.query(
    Map(
      Paginate(Match(Index("snippets_by_user"), user)),
      Lambda("ref", Get(Var("ref")))
    )
  );

  const snippets = result.data.map(snippet => {
    snippet.id = snippet.ref.id;
    delete snippet.ref;
    return snippet;
  });

  return snippets;
}

export const createSnippet = async (snippet:Snippet) => {
  const result: FaunaResult = await faunaClient.query(
    Create(Collection('snippets'), {
      data: {... snippet}
    })
  )
  return result;
}

export const getSnippetById = async (id: string) => {
  const snippet: Snippet = await faunaClient.query(Get(Ref(Collection('snippets'), id)));
  snippet.id = snippet.ref.id;
  delete snippet.ref;

  return snippet;
};

export const deleteSnippet = async (id: string) => {
  return faunaClient.query(
    Delete(Ref(Collection('snippets'), id))
  );
};


/* eslint-disable @typescript-eslint/naming-convention */
import { HoudiniClient, type RequestHandlerArgs } from '$houdini';
import { browser } from '$app/environment';

async function fetchQuery({ fetch, text = '', variables = {}, metadata }: RequestHandlerArgs) {
  const url = import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql';
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  if (metadata?.Authorization) {
    headers['Authorization'] = `bearer ${metadata?.Authorization}`;
  }

  const result = await fetch(url, {
    method: 'POST',
    headers,

    body: JSON.stringify({
      query: text,
      variables
    })
  });
  return await result.json();
}

export default new HoudiniClient(fetchQuery);

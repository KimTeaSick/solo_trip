import { gql } from 'graphql-request';
import { GraphQLU } from ".";

const fetchSolplaceLogs = gql`
query{
  fetchSolplaceLogs(page:${1})
  {
	id,
  introduction,
  solplaceName,
  images,
  userId,
  createdAt,
  updatedAt,
  deletedAt
	}}`

export const fetchSolplaceLogsQuery = async () => {
  const client = new GraphQLU()
  const res = await client.client.request(fetchSolplaceLogs)
  console.log('tes', res);
  return res

}
import { gql } from 'graphql-request'
import { GraphQLU } from '.'

const fetchSolplaceLogsForNameSet = gql`
query{
  fetchSolplaceLogsForNameSet(page:"유")
}
`

export const fetchSolplaceLogsForNameSetCall = async () => {
  const client = new GraphQLU()
  const res = await client.client.request(fetchSolplaceLogsForNameSet)
  console.log('res', res);
}
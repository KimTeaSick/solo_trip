import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://exam.backend.solotrip.kr/graphql';

export class GraphQLU {
  token = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : ''
  client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${this.token}`, // 필요에 따라 인증 토큰 추가
    },
  });
}


// export const client = new GraphQLClient(endpoint, {
//   headers: {
//     authorization: `Bearer ${token}`, // 필요에 따라 인증 토큰 추가
//   },
// });
import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://exam.backend.solotrip.kr/graphql';

const token = localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : ''

export const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`, // 필요에 따라 인증 토큰 추가
  },
});

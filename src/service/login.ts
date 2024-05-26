import { gql } from 'graphql-request';
import { GraphQLU } from '.';


const login = (email: string, password: string) => gql`
mutation{
  login(loginInput:{
    email:"${email}", 
    password:"${password}"}){
    accessToken,
    name
  }
  }
`;

export const loginMutation = async (email: string, password: string) => {
  try {
    const client = new GraphQLU()
    const res = await client.client.request(login(email, password))
    localStorage.setItem('accessToken', res.login.accessToken)
    console.log('asdsad', res)
    return 1
  } catch {
    console.log('eer');
    return 2
  }
}
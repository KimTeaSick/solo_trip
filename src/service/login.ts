import { gql } from 'graphql-request';
import { client } from '.';


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
    const res = await client.request(login(email, password))
    localStorage.setItem('accessToken', res.login.accessToken)
    console.log('asdsad', res)
  } catch {
    console.log('eer');
  }
}
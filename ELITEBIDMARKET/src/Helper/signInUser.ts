import axios from 'axios';
import React, {useContext} from 'react'
// import { SignInContext } from '../App';


interface SignInRequestBody {
  username: string;
  password: string;
}


interface SignInResponseBody {
  ChallengeParameters: {};
  AuthenticationResult: {
    AccessToken: string;
    ExpiresIn: number;
    TokenType: string;
    RefreshToken: string;
    IdToken: string;
  };
  ResponseMetadata: {
    RequestId: string;
    HTTPStatusCode: number;
    HTTPHeaders: {};
    RetryAttempts: number;
  };
  name: string;
  Message: string;
}

async function signInUser(userData: SignInRequestBody): Promise<SignInResponseBody> {
  const SIGN_IN = import.meta.env.VITE_SIGN_IN;
  const response = await axios.post(SIGN_IN, userData);
  const ID_TOKEN = response.data.data.AuthenticationResult.IdToken;
  localStorage.setItem("user-token", ID_TOKEN)
  
  return response.data as SignInResponseBody;
}

export default signInUser
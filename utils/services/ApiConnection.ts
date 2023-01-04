/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ApiHeaders = {
  Accept: 'application/json',
};
const baseUrl = 'http://localhost:4000';
const createRequest = (url: string, method: any): any => ({
  url,
  headers: ApiHeaders,
  method,
});
const postRequest = (url: string, method: string, body: object): any => ({
  url,
  headers: ApiHeaders,
  method,
  body,
});
const postRequestWithHeader = (url: string, method: string, headers: any): any => ({
  url,
  headers,
  method,
});
const edoBaseApi = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Post', 'Get'],

  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (body: any) => postRequest('/auth/login', 'POST', body),
      invalidatesTags: ['Post'],
    }),
    postSignUp: builder.mutation({
      query: (body: any) => postRequest('/auth/sign-up', 'POST', body),
      invalidatesTags: ['Post'],
    }),
  }),
});
export const {
  usePostLoginMutation,
  usePostSignUpMutation,
} = edoBaseApi;
export default edoBaseApi;

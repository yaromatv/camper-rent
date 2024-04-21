import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const campersApi = createApi({
  reducerPath: 'campersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://661feb6e16358961cd95e8f5.mockapi.io/api/',
  }),
  tagTypes: ['Campers'],
  endpoints: builder => ({
    getCampers: builder.query({
      query: () => 'campers',
      providesTags: ['Campers'],
    }),
  }),
});

export const { useGetCampersQuery } = campersApi;

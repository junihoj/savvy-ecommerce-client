import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
});

export const reduxApiService = createApi({
    reducerPath: 'splitApi',
    baseQuery,
    endpoints: () => ({}),
});
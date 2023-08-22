import { createApi } from '@reduxjs/toolkit/query/react'
import {customFetchBase} from "@/app/api-query/base-api-refetch";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['Me'],
    baseQuery: customFetchBase,
    endpoints: () => ({}),
})
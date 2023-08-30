import {baseApi} from "@/app/api-query/base-api";


const authApi = baseApi.injectEndpoints({
    endpoints: builder =>{
        return {
            login: builder.mutation<void, {email: string; password: string}>({
                query: body => ({
                    url: '/api/myMoney/login',
                    method: 'POST',
                    body: body
                }),
                invalidatesTags: ['Me'],
            }),
            me: builder.query<any | null, void>({
                query: () => ({
                    url: '/api/myMoney',
                    method: 'GET',
                }),
                extraOptions: { maxRetries: 0 },
                providesTags: ['Me'],
            }),
        }
    }
})

export const {useLoginMutation, useMeQuery} = authApi
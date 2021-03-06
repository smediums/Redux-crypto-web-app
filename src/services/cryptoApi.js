import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "bb804b2dfbmsh3db29c08b4ede90p17f554jsn0312354f70c2",
}

const baseUrl = "https://coinranking1.p.rapidapi.com/coins"

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCrptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})
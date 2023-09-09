import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreAPi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam.p.rapidapi.com',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','da7199589amshbf94a788133e134p110c43jsne8dac26ebe9d');
            return headers;
        }
    }),
    endpoints:(builder)=>({
        getTopCharts:builder.query({query: () => ({ url: '/charts/track' })}),
        getSongDetails:builder.query({query:(songid)=>`songs/get-details?key=${songid}&locale=en-US`}),
        getSongRelated:builder.query({query:(songid)=>`/tracks/related?trac`})
    })
})

export const{
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
}=shazamCoreAPi;
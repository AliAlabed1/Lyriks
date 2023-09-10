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
        getSongDetails:builder.query({query:(songid)=>`/songs/get-details?key=${songid}&locale=en-US`}),
        getArtistDetails:builder.query({query:(artistsid)=>`artists/get-details?id=${artistsid}&l=en-US`}),
        getArtistTopSongs:builder.query({query:(artistid)=>`/artists/get-top-songs?id=${artistid}&l=en-US`})
    })
})

export const{
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetArtistDetailsQuery,
    useGetArtistTopSongsQuery,
    
}=shazamCoreAPi;
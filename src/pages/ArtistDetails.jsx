import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import {DetailsHeader,Error,Loader,RelatedSongs} from '../components'
import { useGetArtistDetailsQuery, useGetArtistTopSongsQuery} from "../redux/services/shazamCore";


const ArtistDetails = () => {
    const {id:artistid}=useParams();
    const {data:artistData,isFetching:isFetchingArtistData,error}=useGetArtistDetailsQuery(artistid);
   
    const {data:topSongs,isFetching:isFetchingTopSongs,error1}=useGetArtistTopSongsQuery(artistid)
    
    if(isFetchingArtistData||isFetchingTopSongs) return <Loader title={'Loading Artist Details...'}/>
    if(error ) return <Error />
    return(
        <div className="flex flex-col">
            <DetailsHeader artistId={artistid} artistData={artistData.data[0]}/>

            <RelatedSongs 
              data={topSongs.data}
              artistId={artistid}
            />
        </div>
    )
};

export default ArtistDetails;

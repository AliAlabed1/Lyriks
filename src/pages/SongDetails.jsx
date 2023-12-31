import { useParams } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import {DetailsHeader,Error,Loader,RelatedSongs} from '../components'
import { setActiveSong,playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery ,useGetTopChartsQuery} from "../redux/services/shazamCore";


const SongDetails = () => {
    const {songid}=useParams();
    const dispatch=useDispatch();
    const {activeSong,isPlaying}=useSelector((state)=>state.player);
    const {data:songData,isFetching:isFetchingSongDetails,error}=useGetSongDetailsQuery(songid);
    const {data:relatedSong,isFetching:isFetchingRelatedSong,error:relatedError}=useGetTopChartsQuery();
    const handlePauseClick =()=>{
        dispatch(playPause(false))
    }
    const handlePlayClick=(song,i)=>{
        dispatch(setActiveSong({song,data:relatedSong?.tracks,i}));
        dispatch(playPause(true));
    }
    if(isFetchingSongDetails) return <Loader title={'Loading Song Details...'}/>
    if(isFetchingRelatedSong||isFetchingSongDetails) return <Loader title={'Loading Song Details...'}/>
    if(error || relatedError) return <Error />
    return(
        <div className="flex flex-col">
            <DetailsHeader artistId="" songData={songData}/>
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics</h2>
                <div className="mt-5">
                    {
                        songData?.sections[1].type==='LYRICS'?
                        songData?.sections[1].text.map((line,idx)=>(
                            <p key={idx} className="text-gray-400 text-base my-1">{line}</p>
                        )):
                        <p className="text-gray-400 text-base my-1">Sorry ,No Lyrics Found!</p>
                    }
                </div>
            </div>
            <RelatedSongs 
                data={relatedSong.tracks}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePlayClick={handlePlayClick}
                handlePauseClick={handlePauseClick}
            />
        </div>
    )
};

export default SongDetails;

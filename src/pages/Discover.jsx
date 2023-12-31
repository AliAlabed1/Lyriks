import { Error,Loader , SongCard } from "../components";
import {genres} from '../assets/constants'
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useDispatch,useSelector } from "react-redux";
const Discover = () =>{
    const dispatch=useDispatch()
    const{activeSong,isPlaying}=useSelector((state)=>state.player)
    const genraTitle='POP'
    const{data,isFetching,error}=useGetTopChartsQuery();
    if(isFetching)return <Loader title='Loading Songs ...'/>
    if(error)return <Error />
    return(
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {
                    data?.tracks.map((song,idx)=>(
                        <SongCard
                          key={idx}
                          song={song}
                          i={idx}
                          isPlaying={isPlaying}
                          activeSong={activeSong}
                          data={data?.tracks}
                        />
                    ))
                }
            </div>
        </div>
    )    
}

export default Discover;

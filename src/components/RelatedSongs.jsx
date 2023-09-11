import SongBar from "./SongBar";
const RelatedSongs = ({data,isPlaying,activeSong,handlePlayClick,handlePauseClick,artistId}) => {
  
  return(
     <div className="flex flex-col">
        <h1 className="font-bold text-xl text-white">Related Song:</h1>
        <div className="mt-6 w-full flex flex-col">
          {
            data.map((song,idx)=>(
              <SongBar 
                key={idx}
                song={song}
                i={idx}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
              />
            ))
          }
        </div>
     </div>
  )
}

export default RelatedSongs;

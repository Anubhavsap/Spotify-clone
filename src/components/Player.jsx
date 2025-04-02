// import React from 'react'
// import {assets, songsData} from '../assets/assets'
// import { PlayerContext ,useContext } from '../context/PlayerContext';
// function Player() {
//     const {seekBar,seekBg,playStaus,play,pause} = useContext(PlayerContext);
//   return (
//      <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
//           <div className='hidden lg:flex items-center gap-4'>
//           <img className='w-12' src={songsData[0].image} alt="" />
//           <div>
//             <p>{songsData[0].name}</p>
//             <p>{songsData[0].desc.slice(0,12)}</p>
//           </div>
//         </div>
//         <div className='flex flex-col items-center gap-1 m-auto'>
//            <div className='flex gap-4'>
//               <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
//               <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
//               <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
//               <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
//               <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
//               <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
//             </div>
//             <div className='flex item-center gap-5'>
//                 <p>1:06</p>
//                 <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
//                     <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
//                 </div>
//                 <p>3:06</p>
//             </div>
//         </div>
//         <div className='hidden lg:flex items-center gap-2 opactity-75'>
//           <img className='w-4' src={assets.plays_icon} alt="" />
//           <img className='w-4' src={assets.mic_icon} alt="" />
//           <img className='w-4' src={assets.queue_icon} alt="" />
//           <img className='w-4' src={assets.speaker_icon} alt="" />
//           <img className='w-4' src={assets.volume_icon} alt="" />
//           <div className='w-20  bg-slate-50 h-1 rounded'>
//           </div>
//           <img className='w-4' src={assets.mini_player_icon} alt="" />
//           <img className='w-4' src={assets.zoom_icon} alt="" />
//         </div>
//      </div>  
//   )
// }

// export default Player

import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

function Player() {
    const { seekBar, seekBg, playStatus, play, pause, track, time, previous, next, seekSong} = useContext(PlayerContext);

    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            {/* Song Info */}
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={track.image} alt={track.name} />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>

            {/* Controls */}
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
                    <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="Previous" />
                   {playStatus
                   ?<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="Pause" />
                    :<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="Play" />
                   }
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
                </div>
                
                {/* Seek Bar */}
                <div className='flex items-center gap-5'>
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <div ref={seekBar} className='h-1 bg-green-800 rounded-full transition-all duration-300' style={{ width: '0%' }} />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>

            {/* Additional Player Controls */}
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img className='w-4' src={assets.plays_icon} alt="Plays" />
                <img className='w-4' src={assets.mic_icon} alt="Mic" />
                <img className='w-4' src={assets.queue_icon} alt="Queue" />
                <img className='w-4' src={assets.speaker_icon} alt="Speaker" />
                <img className='w-4' src={assets.volume_icon} alt="Volume" />
                <div className='w-20 bg-slate-50 h-1 rounded'></div>
                <img className='w-4' src={assets.mini_player_icon} alt="Mini Player" />
                <img className='w-4' src={assets.zoom_icon} alt="Zoom" />
            </div>
        </div>  
    );
}

export default Player;


import React ,{useRef, useState}from 'react'

const Music = () => {
  const audioRef = useRef(null);
  const[volume,setVolume] = useState(1);
  const playAudio = ()=>{
    audioRef.current.play()
  }
  const pauseAudio = ()=>{
    audioRef.current.pause()
  }
  const handleVolumeChange = (event) =>{
    const volumeValue = event.target.value;
    setVolume(volumeValue);
    audioRef.current.volume = volumeValue;
  }
  return (
    <div style={{backgroundColor:"#c3c4c7"}}>
      <h3>React audio player</h3>
      <audio ref = {audioRef} src='src\assets\128-Khoobsurat - Stree 2 128 Kbps.mp3'></audio>
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
      <input type = "range"
      min="0"
      max="1"
      step="0.1"
      value={volume}
      onChange={handleVolumeChange}/>
      <span>Volume:{Math.round(volume*100)}%</span>
      <div style={{boxShadow:"3px 4px black"}}>KHUBSURAT<br/>
           From: Stree 2

      </div>
      
    </div>
  )
}

export default Music
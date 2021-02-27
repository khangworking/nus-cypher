import './Controls.scss'
import { useState, useEffect } from 'react'

function Controls(props) {
  let { player, yt } = props
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(100)

  useEffect(() => {
    let interval;
    if (player) {
      player.setVolume(100)
      // interval = setInterval(() => {
      //   console.log(player.getCurrentTime())
      // }, 1000)
    }
    return () => clearInterval(interval)
  }, [player])

  let onPlayClick = e => {
    if (player.getPlayerState() === yt.PlayerState.PLAYING) {
      player.pauseVideo()
      setPlaying(false)
    } else {
      player.playVideo()
      setPlaying(true)
    }
  }

  let onVolumnClick = e => {
    let newVolume = volume === 100 ? 0 : 100
    setVolume(newVolume)
    player.setVolume(newVolume)
  }

  return (
    <div className="Controls">
      <button className="Controls__play" onClick={onPlayClick}>
        {!playing && <i className="fas fa-play"></i>}
        {!!playing && <i className="fas fa-pause"></i>}
      </button>

      <button className="Controls__volumn" onClick={onVolumnClick}>
        {volume === 100 && <i className="fas fa-volume-up"></i>}
        {!volume && <i className="fas fa-volume-off"></i>}
      </button>
    </div>
  )
}

export default Controls
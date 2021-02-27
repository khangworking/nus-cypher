import './Video.scss'
import { useState } from 'react'

function Video({ video }) {
  const { snippet, player } = video
  const [play, setPlay] = useState(false)

  let backgroundImage = {
    'backgroundImage': !!snippet.thumbnails.standard ? `url(${snippet.thumbnails.standard.url})` : 'url()'
  }
  const handleMouseEnter = e => {
    setPlay(true)
  }
  const handleMouseLeave = e => {
    setPlay(false)
  }
  return (
    <div className="Video">
      <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="Video__thumbnail" style={backgroundImage}>
        {play && <iframe src={`http://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&showinfo=0`} frameborder="0" allow='autoplay'></iframe>}
        {play && <div className="overlay"></div>}
      </div>
      <div className="Video__title">{ snippet.title }</div>
    </div>
  )
}

export default Video
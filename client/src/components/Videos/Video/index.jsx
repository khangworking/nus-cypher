import './Video.scss'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Video({ video }) {
  const { snippet } = video
  const [play, setPlay] = useState(false)
  let history = useHistory()

  let backgroundImage = {
    'backgroundImage': !!snippet.thumbnails.standard && !play ? `url(${snippet.thumbnails.standard.url})` : 'url()'
  }
  const handleMouseEnter = e => {
    setPlay(true)
  }
  const handleMouseLeave = e => {
    setPlay(false)
  }
  const handleClick = e => {
    history.push(`/videos/${video.id}`)
  }
  return (
    <div className="Video" onClick={handleClick}>
      <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="Video__thumbnail" style={backgroundImage}>
        {play && <iframe title={`video-${video.id}`} src={`http://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&showinfo=0`} frameBorder="0" allow='autoplay'></iframe>}
        {play && <div className="overlay"></div>}
      </div>
      <div className="Video__title">{ snippet.title }</div>
    </div>
  )
}

export default Video

import './VideoDetail.scss'
import Lobby from '../../layouts/Lobby'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import YouTubeIframeLoader from 'youtube-iframe'
import Controls from './Controls'

let player, yt

function VideoDetail() {
  let { id } = useParams()
  const [ready, setReady] = useState(false)

  let onReady = e => {
    setReady(true)
  }

  let onStateChange = e => {}

  useEffect(() => {
    YouTubeIframeLoader.load(YT => {
        yt = YT
        player = new YT.Player('player', {
          videoId: id,
          playerVars: { 'autoplay': 0, 'controls': 0 },
          events: {
            onStateChange, onReady
          }
        })
      }
    )
  }, [id])

  return (
    <Lobby>
      <div className="VideoDetail">
        <div id="player"></div>
      </div>
      {ready && <Controls player={player} yt={yt} />}
    </Lobby>
  )
}

export default VideoDetail

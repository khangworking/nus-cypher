import './VideoDetail.scss'
import Lobby from '../../layouts/Lobby'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const YOUTUBE_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos'

function VideoDetail() {
  let { id } = useParams()

  useEffect(() => {

  }, [])

  return (
    <Lobby>
      {id}
    </Lobby>
  )
}

export default VideoDetail
import './VideoDetail.scss'
import Lobby from '../../layouts/Lobby'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { list, embedUrl } from '../../utils/youtube'

function VideoDetail() {
  let { id } = useParams()

  return (
    <Lobby>
      <div className="VideoDetail">
        <iframe width="100%" src={`${embedUrl(id)}?controls=0&showinfo=0`} frameborder="0"></iframe>
      </div>
    </Lobby>
  )
}

export default VideoDetail

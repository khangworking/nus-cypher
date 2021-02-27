import Video from './Video'
import './Videos.scss'
import React, { useEffect, useState } from 'react'
import { list } from '../../utils/youtube'

let nextPage

function Videos(props) {
  const [videos, setVideos] = useState([])
  const [pageToken, setPageToken] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleClick = e => setPageToken(nextPage)

  useEffect(() => {
    setLoading(true)
    list({ pageToken }).then(results => {
      console.log(results)
      const { data: { items, nextPageToken } } = results
      setVideos(videos => ([...videos, ...items]))
      setLoading(false)
      nextPage = nextPageToken
    })
  }, [pageToken])

  return (
    <div className="Videos">
      <div className="Videos__grid">
        {videos.map(video => <Video key={video.id} video={video} />)}
      </div>
      {!loading && (<div className="Videos__button-wrapper">
                    <button onClick={handleClick} className="Videos__more-button">
                      {loading ? <i className="fas fa-spinner"></i> : 'Load more'}
                    </button>
                  </div>)}
    </div>
  )
}

export default Videos

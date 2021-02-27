import Video from './Video'
import './Videos.scss'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

let nextPage
const YOUTUBE_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos'

function Videos(props) {
  const [videos, setVideos] = useState([])
  const [pageToken, setPageToken] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleClick = e => setPageToken(nextPage)

  useEffect(() => {
    setLoading(true)
    let params = {
      part: 'snippet,contentDetails,statistics,player',
      chart: 'mostPopular',
      maxResults: '12',
      videoCategoryId: '10',
      regionCode: 'VN',
      key: process.env.REACT_APP_YOUTUBE_API_KEY
    }
    if (!!pageToken)
      params['pageToken'] = pageToken
    axios.get(YOUTUBE_VIDEOS_URL, { params }).then(results => {
      console.log(results)
      const { data: { items, nextPageToken } } = results
      setVideos([...videos, ...items])
      setLoading(false)
      nextPage = nextPageToken
    })
  }, [pageToken])

  return (
    <div className="Videos">
      <div className="Videos__grid">
        {videos.map(video => <Video key={video.id} video={video} />)}
      </div>
      {!!videos.length && (<div className="Videos__button-wrapper">
                    <button onClick={handleClick} className="Videos__more-button">
                      {loading ? <i className="fas fa-spinner"></i> : 'Load more'}
                    </button>
                  </div>)}
    </div>
  )
}

export default Videos
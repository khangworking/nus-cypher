import Video from './Video'
import './Videos.scss'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

let nextPage

function Videos(props) {
  const [videos, setVideos] = useState([])
  const [pageToken, setPageToken] = useState(null)

  const handleClick = e => setPageToken(nextPage)

  useEffect(() => {
    let params = {
      part: 'snippet,contentDetails,statistics,player',
      chart: 'mostPopular',
      maxResults: '12',
      videoCategoryId: '10',
      regionCode: 'VN',
      key: 'AIzaSyAGr4ma1QlUDjselmEvcf0gK54Hm2Pk06E'
    }
    if (!!pageToken)
      params['pageToken'] = pageToken
    axios.get('https://www.googleapis.com/youtube/v3/videos', { params }).then(results => {
      console.log(results)
      const { data: { items, nextPageToken } } = results
      setVideos([...videos, ...items])
      nextPage = nextPageToken
    })
  }, [pageToken])

  return (
    <div className="Videos">
      <div className="Videos__grid">
        {videos.map(video => <Video key={video.id} video={video} />)}
      </div>
      {!!videos.length && (<div className="Videos__button-wrapper">
                    <button onClick={handleClick} className="Videos__more-button">Load more</button>
                  </div>)}
    </div>
  )
}

export default Videos
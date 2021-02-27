import axios from 'axios'

const YOUTUBE_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos'
const key = process.env.REACT_APP_YOUTUBE_API_KEY

const list = props => {
  const { pageToken, videoId, chart = 'mostPopular' } = props
  let params = {
    part: 'snippet,contentDetails,statistics,player',
    key
  }
  if (!!pageToken)
    params = { ...params, pageToken }
  if (!!videoId)
    params = { ...params, id: videoId }
  else
    params = { ...params, chart, videoCategoryId: '10', regionCode: 'VN', maxResults: 12 }
  return axios.get(YOUTUBE_VIDEOS_URL, { params })
}

const embedUrl = id => {
  return `http://www.youtube.com/embed/${id}`
}

export {
  list, embedUrl
}

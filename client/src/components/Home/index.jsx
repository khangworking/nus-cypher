import './Home.scss'
import Videos from '../Videos'

function Home() {
  return (
    <div className="HomePage">
      <div className='tophead'></div>
      <div className="sideleft"></div>
      <div className="main">
        <Videos />
      </div>
      <div className="sideright"></div>
    </div>
  )
}

export default Home;
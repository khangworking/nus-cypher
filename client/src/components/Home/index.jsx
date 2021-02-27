import './Home.scss'
import Videos from '../Videos'
import Lobby from '../../layouts/Lobby'

function Home() {
  return (
    <Lobby>
      <section className="most-popular">
        <Videos />
      </section>
    </Lobby>
  )
}

export default Home;
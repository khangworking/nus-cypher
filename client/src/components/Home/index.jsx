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
  // return (
  //   <div className="HomePage">
  //     <div className='tophead'></div>
  //     <div className="sideleft"></div>
  //     <div className="main">
  //       <section className="most-popular">
  //         <Videos />
  //       </section>
  //     </div>
  //     <div className="sideright"></div>
  //   </div>
  // )
}

export default Home;
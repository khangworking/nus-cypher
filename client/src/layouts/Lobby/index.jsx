import './Lobby.scss'

function Lobby(props) {
  return (
    <div className="Lobby">
      <div className='tophead'></div>
      <div className="sideleft"></div>
      <div className="main">
        {props.children}
      </div>
      <div className="sideright"></div>
    </div>
  )
}

export default Lobby
import './index.css'

const NavBar = props => {
  const {score, totalScore, isGameEnd} = props

  return isGameEnd ? (
    <nav className="nav-bar">
      <div className="emoji-card">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-title"> Emoji Game </h1>
      </div>
    </nav>
  ) : (
    <nav className="nav-bar">
      <div className="emoji-card">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-title"> Emoji Game </h1>
      </div>
      <div className="score-card">
        <p className="score"> Score: {score}</p>
        <p className="score"> Top Score: {totalScore}</p>
      </div>
    </nav>
  )
}
export default NavBar

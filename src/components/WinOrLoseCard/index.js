import './index.css'

const WinOrLoseCard = props => {
  const {isWin, score, toRestart} = props
  const winOrLose = isWin ? 'You Won' : 'You Lose'
  const scoreOrBestScore = isWin ? 'Best Score' : 'Score'
  const reqImg = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onRestart = () => {
    toRestart()
  }

  return (
    <div className="result-card">
      <div className="result-inner-card">
        <h1 className="result"> {winOrLose} </h1>
        <p className="result-heading"> {scoreOrBestScore} </p>
        <p className="result-score"> {score}/12 </p>
        <button className="restart" type="button" onClick={onRestart}>
          Play Again
        </button>
      </div>
      <img className="res-image" src={reqImg} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    totalScore: 0,
    isGameEnd: false,
  }

  toRestart = () => {
    this.setState({
      clickedEmojisList: [],
      isGameEnd: false,
    })
  }

  gameEndCard = () => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props
    const isWin = clickedEmojisList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWin={isWin}
        score={clickedEmojisList.length}
        toRestart={this.toRestart}
      />
    )
  }

  isEmojiClicked = id => {
    const {emojisList} = this.props
    const {clickedEmojisList, totalScore} = this.state
    const isIdPresent = clickedEmojisList.includes(id)

    if (isIdPresent) {
      if (clickedEmojisList.length > totalScore) {
        this.setState({
          totalScore: clickedEmojisList.length,
          isGameEnd: true,
        })
      } else {
        this.setState({
          isGameEnd: true,
        })
      }
    } else if (emojisList.length - 1 === clickedEmojisList.length) {
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        totalScore: clickedEmojisList.length,
        isGameEnd: true,
      }))
    } else {
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojisCard = () => {
    const shuffledList = this.shuffledEmojisList()

    return (
      <ul className="list-items">
        {shuffledList.map(each => (
          <EmojiCard
            key={each.id}
            item={each}
            isEmojiClicked={this.isEmojiClicked}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, totalScore, isGameEnd} = this.state

    return (
      <div className="bg-container">
        <NavBar
          score={clickedEmojisList.length}
          totalScore={totalScore}
          isGameEnd={isGameEnd}
        />
        <div className="card">
          {isGameEnd ? this.gameEndCard() : this.emojisCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame

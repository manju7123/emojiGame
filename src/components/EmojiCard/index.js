import './index.css'

const EmojiCard = props => {
  const {item, isEmojiClicked} = props
  const {id, emojiName, emojiUrl} = item

  const onButtonClick = () => {
    isEmojiClicked(id)
  }

  return (
    <li className="item">
      <button className="btn" type="button" onClick={onButtonClick}>
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard

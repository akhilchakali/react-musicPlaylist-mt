const Item = props => {
  const {details} = props
  const {imageUrl, name, genre, duration} = details
  return (
    <li>
      <img src={imageUrl} alt="track" />
      <p>{name}</p>
      <p>{genre}</p>
      <p>{duration}</p>
      <button type="button" data-testid="delete">
        del
      </button>
    </li>
  )
}
export default Item

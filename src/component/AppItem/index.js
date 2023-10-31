import './index.css'

const AppItem = props => {
  const {imageDetails, setIdThumbnail} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    setIdThumbnail(id)
  }

  return (
    <li className="list-image">
      <button
        type="button"
        className="button tab-button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default AppItem

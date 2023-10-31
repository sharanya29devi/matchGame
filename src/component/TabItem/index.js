import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, setActiveTabId} = props
  const {tabId, displayText} = tabDetails
  const buttonClassName = isActive ? 'button tab-color-button' : 'button'

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-items">
      <button type="button" className={buttonClassName} onClick={onClickTab}>
        <h1>{displayText}</h1>
      </button>
    </li>
  )
}

export default TabItem

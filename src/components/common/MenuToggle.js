import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuToggle = ({
  buttonText,
  icon,
  isOpen,
  setIsOpen,
  toggle,
  mobileNav = false }) => {

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      toggle()
    } else if (event.keyCode === 9) {
      handleBlur(event)
    } else if (event.keyCode === 27) {
      setIsOpen(false)
    }
  }
  
  const handleBlur = (event) => {

    if (event.relatedTarget
      && !event.currentTarget.contains(event.relatedTarget)
      && !event.target.parentNode.contains(event.relatedTarget)) {
        // Not triggered when swapping focus between children or siblings
        setIsOpen(false)
    }
  }
  
  const blurProp = !mobileNav ? {'onBlur': handleBlur} : null

  return (
    <button
      aria-haspopup="true"
      aria-expanded={isOpen}
      className={`settings-controls__toggle`}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      {...blurProp}
      onTouchEnd={toggle}
    >
      {icon && <><FontAwesomeIcon icon={icon} />{' '}</>}{buttonText}
    </button>
  )
}

export default MenuToggle;

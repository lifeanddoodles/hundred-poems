import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';

const MenuToggle = ({
  buttonText,
  icon,
  isOpen,
  setIsOpen,
  toggle,
  mobileNav = false }) => {

  const handleKeyDown = (event) => {
    if (event.keyCode === 9) {
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
    <Button
      aria-haspopup="true"
      aria-expanded={isOpen}
      className={`settings-controls__toggle`}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      {...blurProp}
      onTouchEnd={toggle}
      variant="contained"
      color="primary"
    >
      {icon && <><FontAwesomeIcon icon={icon} />{' '}</>}{buttonText}
    </Button>
  )
}

export default MenuToggle;

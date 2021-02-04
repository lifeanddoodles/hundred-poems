import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handleBlur } from "../../utils";

const MenuToggle = ({buttonText, icon, isOpen, setIsOpen, menuRef}) => {
  return (
    <button
      aria-haspopup="true"
      aria-expanded={isOpen}
      className={`settings-controls__toggle`}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={(event) => handleBlur(menuRef, setIsOpen, event)}
    >
      {icon && <><FontAwesomeIcon icon={icon} />{' '}</>}{buttonText}
    </button>
  )
}

export default MenuToggle;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuToggle = ({buttonText, icon, isOpen, setIsOpen, handleBlur, menuRef}) => {
    return (
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`settings-controls__toggle`}
        onClick={() => setIsOpen(!isOpen)}
        // onBlur={(e) => handleBlur(menuRef, e)}
      >
        {icon && <><FontAwesomeIcon icon={icon} />{' '}</>}{buttonText}
      </button>
    )
  }

export default MenuToggle;

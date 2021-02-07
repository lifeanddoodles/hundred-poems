import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handleBlur } from "../../utils";
import { MenuContext } from './Menu'

const MenuToggle = ({buttonText, icon}) => {
  const {ref, isOpen, setIsOpen} = useContext(MenuContext);
  
  return (
    <button
      aria-haspopup="true"
      aria-expanded={isOpen}
      className={`settings-controls__toggle`}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={(event) => handleBlur(ref, setIsOpen, event)}
    >
      {icon && <><FontAwesomeIcon icon={icon} />{' '}</>}{buttonText}
    </button>
  )
}

export default MenuToggle;

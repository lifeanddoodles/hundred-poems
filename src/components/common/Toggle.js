import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handleBlur, valueToBoolean } from "../../utils";
import { PoemsContext } from '../../PoemsContext';
import { MenuContext } from './Menu'

const Toggle = ({label, id, localStorageKey, checkedValue, falseIcon, trueIcon}) => {
  const {handleUpdate} = useContext(PoemsContext);
  const {ref, setIsOpen} = useContext(MenuContext);
  
    return (
      <label className="controls__label settings-controls__control">
        <span className="control__label-text">{label}</span>
        <span className={`control__toggle-container ${valueToBoolean(checkedValue) ? 'toggled' : 'not-toggled'}`}>
        {falseIcon && <FontAwesomeIcon icon={falseIcon} />}
        <div className="toggle">
          <input
            type="checkbox"
            // aria-label={ariaLabel}
            id={id}
            checked={valueToBoolean(checkedValue)}
            onChange={event => handleUpdate(localStorageKey, event)}
            onKeyDown={event => handleUpdate(localStorageKey, event)}
            onBlur={(event) => handleBlur(ref, setIsOpen, event)}
            tabIndex="0"
          />
          <span className="slider round"></span>
        </div>
        {trueIcon && <FontAwesomeIcon icon={trueIcon} />}
        </span>
      </label>
    )
  }

export default Toggle;

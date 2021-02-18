import React, {useContext} from 'react';
import { valueToBoolean } from "../../utils";
import { PoemsContext } from '../../PoemsContext';

const Select = ({label, id, localStorageKey, options}) => {
    const {
        showRomajiColumn,
        showEnglishColumn,
        selectedLayout,
        handleUpdate
    } = useContext(PoemsContext);

    const allAreasActive = valueToBoolean(showRomajiColumn) && valueToBoolean(showEnglishColumn);

    return (
        <>
            <label
                className="controls__label settings-controls__control"
                htmlFor={id}
            >
                {label}
            </label>
            <select
                name={id}
                id={id}
                className="settings-controls__control"
                value={selectedLayout}
                onChange={event => handleUpdate(localStorageKey, event)}
                onKeyDown={event => handleUpdate(localStorageKey, event)}
                disabled={!allAreasActive}
            >
                {options.map((option,index) => <option key={index} value={option.value}>{option.text}</option>)}
            </select>
        </>
    )
}

export default Select

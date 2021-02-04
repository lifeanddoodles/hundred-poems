import React, {useContext, useRef} from 'react';
import { faCog, faColumns, faEye, faEyeSlash, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { valueToBoolean } from "../../utils";
import { PoemsContext } from '../../PoemsContext';
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Toggle from "./Toggle";

const Header = () => {
  
  const allControls = useRef();

  const japaneseControls = useRef();

  const layoutControls = useRef();

  const {
    showFurigana,
    traditionalJapanese,
    showRomajiColumn,
    showEnglishColumn,
    carouselView,
    selectedLayout,
    handleUpdate
  } = useContext(PoemsContext);

  const allAreasActive = valueToBoolean(showRomajiColumn) && valueToBoolean(showEnglishColumn);

    return (
        <header className="site-header">
            <nav className={`settings-controls`}>
                <Menu
                    buttonText="Settings"
                    icon={faCog}
                    ref={allControls}
                    isMobileNav
                >
                    <Menu
                        buttonText="Change Japanese"
                        icon={faLanguage}
                        ref={japaneseControls}
                    >
                        <MenuItem itemComponent={
                            <Toggle
                                label="Show furigana"
                                id="furigana_checkbox"
                                localStorageKey='showFurigana'
                                checkedValue={showFurigana}
                                falseIcon={faEyeSlash}
                                trueIcon={faEye}
                            />
                        }/>
                        <MenuItem itemComponent={
                            <Toggle
                                label="Enable Traditional"
                                id="traditional_checkbox"
                                localStorageKey='traditionalJapanese'
                                checkedValue={traditionalJapanese}
                            />
                        }/>
                    </Menu>
                    <Menu
                        buttonText="Change layout"
                        icon={faColumns}
                        ref={layoutControls}
                    >
                        <Toggle
                            label="Carousel view"
                            id="view_carousel_checkbox"
                            localStorageKey='carouselView'
                            checkedValue={carouselView}
                            falseIcon={faEyeSlash}
                            trueIcon={faEye}
                        />
                        <Toggle
                            label="View English column"
                            id="english_checkbox"
                            localStorageKey='showEnglishColumn'
                            checkedValue={showEnglishColumn}
                            falseIcon={faEyeSlash}
                            trueIcon={faEye}
                        />
                        <Toggle
                            label="View romaji column"
                            id="romaji_checkbox"
                            localStorageKey='showRomajiColumn'
                            checkedValue={showRomajiColumn}
                            falseIcon={faEyeSlash}
                            trueIcon={faEye}
                        />
                        <label
                            className="controls__label settings-controls__control"
                            htmlFor="selected_layout"
                        >
                            Choose layout
                        </label>
                        <select
                            name="selected_layout"
                            id="selected_layout"
                            className="settings-controls__control"
                            value={selectedLayout}
                            onChange={event => handleUpdate('selectedLayout', event)}
                            onKeyDown={event => handleUpdate('selectedLayout', event)}
                            disabled={!allAreasActive}
                        >
                            <option disabled={valueToBoolean(traditionalJapanese)} value="columns">Columns</option>
                            <option value="main--left">Main left</option>
                            <option value="main--right">Main right</option>
                            <option value="main--top">Main top</option>
                            <option value="main--bottom">Main bottom</option>
                        </select>
                    </Menu>
                </Menu>
            </nav>
        </header>
    )
}

export default Header

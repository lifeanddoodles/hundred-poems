import React, {useContext, useRef} from 'react';
import { faCog, faColumns, faEye, faEyeSlash, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { PoemsContext } from '../../PoemsContext';
import Menu from "./Menu";
import Toggle from "./Toggle";
import Select from './Select';
import Submenu from './Submenu';

const Header = () => {

  const japaneseControls = useRef();
  const layoutControls = useRef();

  const {
    showFurigana,
    traditionalJapanese,
    showRomajiColumn,
    showEnglishColumn,
    carouselView,
  } = useContext(PoemsContext);

    return (
      <header className="site-header">
        <nav className={`settings-controls`}>
          <Menu
              buttonText="Settings"
              icon={faCog}
          >
            <Submenu
                buttonText="Change Japanese"
                icon={faLanguage}
                ref={japaneseControls}
            >
              <Toggle
                label="Show furigana"
                id="furigana_checkbox"
                localStorageKey='showFurigana'
                checkedValue={showFurigana}
                falseIcon={faEyeSlash}
                trueIcon={faEye}
              />
          
              <Toggle
                label="Enable Traditional"
                id="traditional_checkbox"
                localStorageKey='traditionalJapanese'
                checkedValue={traditionalJapanese}
              />
            </Submenu>
            <Submenu
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
              <Select
                label="Choose layout"
                id="selected_layout"
                localStorageKey='selectedLayout'
                options={[
                {value: "columns", text: 'Columns'},
                {value: "main--left", text: 'Main left'},
                {value: "main--right", text: 'Main right'},
                {value: "main--top", text: 'Main top'},
                {value: "main--bottom", text: 'Main bottom'}
                ]}
              />
            </Submenu>
          </Menu>
        </nav>
      </header>
    )
}

export default Header

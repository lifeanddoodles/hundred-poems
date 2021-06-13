import React, {useContext, useRef} from 'react';
// import SvgIcon from '@material-ui/core/SvgIcon';
// import { CogIcon } from '@material-ui/icons';
import { faCog, faColumns, faEye, faEyeSlash, faLanguage } from '@fortawesome/free-solid-svg-icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { PoemsContext } from '../../PoemsContext';
import { valueToBoolean } from "../../utils";
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

  const allAreasActive = valueToBoolean(showRomajiColumn) && valueToBoolean(showEnglishColumn);
    
  const twoAreasActive = (valueToBoolean(showRomajiColumn) || valueToBoolean(showEnglishColumn)) && !allAreasActive;
  
  const multipleAreasActive = twoAreasActive || allAreasActive;

    return (
      <AppBar color="secondary">
        {/* <header className="site-header"> */}
        <Toolbar>
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
                {value: "columns", text: 'Columns', requiredAreas: null},
                {value: "main--left", text: 'Japanese left', requiredAreas: multipleAreasActive},
                {value: "main--right", text: 'Japanese right', requiredAreas: multipleAreasActive},
                {value: "main--top", text: 'Japanese top', requiredAreas: allAreasActive},
                {value: "main--bottom", text: 'Japanese bottom', requiredAreas: allAreasActive}
                ]}
              />
            </Submenu>
          </Menu>
        </nav>
        </Toolbar>
      {/* </header> */}
      </AppBar>
    )
}

export default Header

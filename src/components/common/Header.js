import React, {useContext, useRef} from 'react';
import { faCog, faColumns, faEye, faEyeSlash, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { PoemsContext } from '../../PoemsContext';
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Toggle from "./Toggle";
import Select from './Select';

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
  } = useContext(PoemsContext);

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
                        <MenuItem itemComponent={
                            <Toggle
                                label="Carousel view"
                                id="view_carousel_checkbox"
                                localStorageKey='carouselView'
                                checkedValue={carouselView}
                                falseIcon={faEyeSlash}
                                trueIcon={faEye}
                            />
                        }/>
                        <MenuItem itemComponent={
                            <Toggle
                                label="View English column"
                                id="english_checkbox"
                                localStorageKey='showEnglishColumn'
                                checkedValue={showEnglishColumn}
                                falseIcon={faEyeSlash}
                                trueIcon={faEye}
                            />
                        }/>
                        <MenuItem itemComponent={
                            <Toggle
                                label="View romaji column"
                                id="romaji_checkbox"
                                localStorageKey='showRomajiColumn'
                                checkedValue={showRomajiColumn}
                                falseIcon={faEyeSlash}
                                trueIcon={faEye}
                            />
                        }/>
                        <MenuItem itemComponent={
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
                        }/>
                    </Menu>
                </Menu>
            </nav>
        </header>
    )
}

export default Header

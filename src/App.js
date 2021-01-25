import React, { useEffect, useRef, useState } from 'react';
import { poems } from './data/poemsSample';
import PoemsView from './components/PoemsView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faColumns, faEye, faEyeSlash, faLanguage } from '@fortawesome/free-solid-svg-icons'

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || ''
  );
 
  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
 
  return [value, setValue];
};

const App = () => {
  const [showFurigana, toggleShowFurigana] = useStateWithLocalStorage('showFurigana');
  const [traditionalJapanese, toggleTraditionalJapanese] = useStateWithLocalStorage('traditionalJapanese');
  const [showRomajiColumn, toggleShowRomajiColumn] = useStateWithLocalStorage('showRomajiColumn');
  const [showEnglishColumn, toggleShowEnglishColumn] = useStateWithLocalStorage('showEnglishColumn');
  const [carouselView, toggleCarouselView] = useStateWithLocalStorage('carouselView');
  const [currentPoem, setCurrentPoem] = useState(0);
  const [selectedLayout, setSelectedLayout] = useState('columns');

  const nextPoem = () => {
    setCurrentPoem((currentPoem + 1) % poems.length);
  }

  const prevPoem = () => {
    if ((currentPoem - 1) % poems.length === -1) {
        setCurrentPoem(poems.length - 1);
        return;
    }
    setCurrentPoem(currentPoem - 1);
  }

  const handleOptionChange = (event) => {
    setSelectedLayout(event.target.value);
  }

  const handleBlur = (refElement, e) => {
      // if (e.currentTarget === e.target) {
      //   console.log('unfocused self',  e.currentTarget ? `Current: ${e.currentTarget.outerText}` : '', e.target ? `Target: ${e.target.outerText}` : '', e.relatedTarget ? `Related: ${ e.relatedTarget.outerText}` : '');
      // }
      // if (!e.currentTarget.contains(e.relatedTarget)) {
      //   // Not triggered when swapping focus between children
      //   // e.currentTarget.parentElement.classList.remove('is-open');
      //   console.log('focus left self',   e.currentTarget ? `Current: ${e.currentTarget.outerText}` : '', e.target ? `Target: ${e.target.outerText}` : '', e.relatedTarget ? `Related: ${ e.relatedTarget.outerText}` : '');
      // }
  }

  const allControls = useRef();

  const japaneseControls = useRef();

  const layoutControls = useRef();

  const allAreasActive = showRomajiColumn && showEnglishColumn;

  const twoAreasActive = (showRomajiColumn || showEnglishColumn) && !allAreasActive;

  const multipleAreasActive = twoAreasActive || allAreasActive;

  const handleToggle = (localStorageKey, event) => {
    if((event.type === 'change') || (event.type === 'keydown' && event.keyCode === 13)) {
    switch (localStorageKey) {
      case 'showFurigana':
        toggleShowFurigana(!showFurigana);
        break;
      case 'traditionalJapanese':
        toggleTraditionalJapanese(!traditionalJapanese);
        break;
      case 'showEnglishColumn':
        toggleShowEnglishColumn(!showEnglishColumn);
        break;
      case 'showRomajiColumn':
        toggleShowRomajiColumn(!showRomajiColumn);
        break;
      case 'carouselView':
        toggleCarouselView(!carouselView);
        break;
      default:
        break;
    }
  }
  }

  const valueToBoolean = (value) => {
    if (value !== 'false') {
      return !!value;
    }
    return false
  }

  const Toggle = ({label, id, localStorageKey, checkedValue, toggleFunction, falseIcon, trueIcon}) => {
    return (
      <label className="controls__label settings-controls__control">
        <span className="control__label-text">{label}</span>
        <span className="control__toggle-container">
        {falseIcon && <FontAwesomeIcon icon={falseIcon} />}
        <div className="toggle">
          <input
            type="checkbox"
            // aria-label={ariaLabel}
            id={id}
            checked={valueToBoolean(checkedValue)}
            onChange={event => handleToggle(localStorageKey, event)}
            onKeyDown={event => handleToggle(localStorageKey, event)}
            tabIndex="0"
          />
          <span className="slider round"></span>
        </div>
        {trueIcon && <FontAwesomeIcon icon={trueIcon} />}
        </span>
      </label>
    )
  }

  const MenuItem = ({ itemComponent }) => { 
    return (
      <>
       {itemComponent}  
      </>
    )
  }

  const MenuToggle = ({buttonText, icon, isOpen, setIsOpen, handleBlur, menuRef}) => {
    return (
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`settings-controls__toggle`}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={(e) => handleBlur(menuRef, e)}
      >
        {icon && <><FontAwesomeIcon icon={icon} />{' '}</>}{buttonText}
      </button>
    )
  }

  const Menu = React.forwardRef((props, ref) => {
    const {buttonText, icon, isMobileNav, children} = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
    <section
      className={`settings-controls__container ${isOpen ? 'is-open' : ''}  ${isMobileNav ? 'settings-controls__container--mobile' : 'settings-controls__container--submenu'}`}
      ref={ref}
      // onBlur={(e) => handleBlur(ref, e)}
    >
      <MenuToggle
        buttonText={buttonText}
        icon={icon}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        // onBlur={(e) => handleBlur(ref, e)}
        handleBlur={handleBlur}
        menuRef={ref}
      />
      <div className={`settings-controls__options`} role="presentation">
      {children}
      </div>
    </section>
    )
  })

  return (
    <div className="App">
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
                  toggleFunction={toggleShowFurigana}
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
                  toggleFunction={toggleTraditionalJapanese}
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
                toggleFunction={toggleCarouselView}
                falseIcon={faEyeSlash}
                trueIcon={faEye}
              />
              <Toggle
                label="View English column"
                id="english_checkbox"
                localStorageKey='showEnglishColumn'
                checkedValue={showEnglishColumn}
                toggleFunction={toggleShowEnglishColumn}
                falseIcon={faEyeSlash}
                trueIcon={faEye}
              />
              <Toggle
                label="View romaji column"
                id="romaji_checkbox"
                localStorageKey='showRomajiColumn'
                checkedValue={showRomajiColumn}
                toggleFunction={toggleShowRomajiColumn}
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
                onChange={handleOptionChange}
                disabled={!allAreasActive}
                >
                <option disabled={!!traditionalJapanese} value="columns">Columns</option>
                <option value="main--left">Main left</option>
                <option value="main--right">Main right</option>
                <option value="main--top">Main top</option>
                <option value="main--bottom">Main bottom</option>
              </select>
            </Menu>
          </Menu>
        </nav>
      </header>
        { <PoemsView
          poems={poems}
          traditionalJapanese={valueToBoolean(traditionalJapanese)}
          showFurigana={valueToBoolean(showFurigana)}
          showEnglishColumn={valueToBoolean(showEnglishColumn)}
          showRomajiColumn={valueToBoolean(showRomajiColumn)}
          carouselView={valueToBoolean(carouselView)}
          currentPoem={currentPoem}
          selectedLayout={selectedLayout}
          multipleAreasActive={multipleAreasActive}
          allAreasActive={allAreasActive}
        /> }
      {carouselView &&
      <section className="poem-controls">
        <button
          className="control control--prev"
          onClick={prevPoem}>
            Previous
        </button>
        <button
          className="control control--next"
          onClick={nextPoem}>
            Next
        </button>
      </section>}
    </div>
  );
}

export default App;

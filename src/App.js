import React, { useEffect, useRef, useState } from 'react';
import { poems } from './data/poemsSample';
import PoemsView from './components/PoemsView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faColumns, faEye, faEyeSlash, faLanguage } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [showFurigana, toggleShowFurigana] = useState(false);
  const [traditionalJapanese, toggleTraditionalJapanese] = useState(false);
  const [showRomajiColumn, toggleShowRomajiColumn] = useState(true);
  const [showEnglishColumn, toggleShowEnglishColumn] = useState(true);
  const [currentPoem, setCurrentPoem] = useState(0);
  const [carouselView, toggleCarouselView] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState(!traditionalJapanese ? 'columns' : 'main--top');
  const [prevRef, setPrevRef] = useState(null);


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

  const handleToggle = (checked, setToggleFunction, e) => {
    // console.log(e);
    if(e.type === 'change') {
      setToggleFunction(!checked)
    }
    else if(e.type === 'keydown') {
      if(e.keyCode === 13) {
        setToggleFunction(!checked)
      }
    }
  }

  const handleOptionChange = (event) => {
    setSelectedLayout(event.target.value);
  }

  const handleBlur = (refElement, e) => {
    // console.log(e.currentTarget, refElement, e.target);
    // console.log(refElement.current.outerText, e.target.innerText, e.relatedTarget.innerText, );
    // console.log('before:' + refElement.current.className + ", " + refElement.current.outerText );
      if(e.relatedTarget !== null) {
        if(e.target.parentElement.classList.contains('is-open')) {
        // if(refElement.current.classList.contains('is-open')) {
          // refElement.current.classList.remove('is-open');
          // e.target.parentElement.classList.remove('is-open');
          // console.log(e)
          console.log('contains class')
        }
      }
      // if(!e.currentTarget.contains(e.relatedTarget)) {
      //   if(refElement.current.classList.contains('is-open')) {
      //     // refElement.current.classList.remove('is-open');
      //   }
      //   // console.log(refElement.current.outerText, e.currentTarget.innerText, e.target.innerText, e.relatedTarget.innerText, );
      //   // console.log('after:' + refElement.current.className + ", " + refElement.current.outerText );
      // }
      // if(!refElement.current.contains(e.currentTarget) || !refElement.current.contains(e.relatedTarget)) {
      //   if(refElement.current.classList.contains('is-open')) {
      //     refElement.current.classList.remove('is-open');
      //   }
      //   console.log(refElement.current.outerText, e.currentTarget.innerText, e.target.innerText, e.relatedTarget.innerText, );
      //   // console.log('after:' + refElement.current.className + ", " + refElement.current.outerText );
      // }
      // if(!refElement.current.contains(e.target) && refElement.current.classList.contains('is-open')) {
      //   refElement.current.classList.remove('is-open');
      //   console.log('after:' + refElement.current.className + ", " + refElement.current.outerText );
      // }
    // if(e.currentTarget.contains(e.target)) {
      // console.log(e.currentTarget, e.target);
    // }
    // console.log(e.currentTarget, e.relatedTarget)
    // if (e.currentTarget !== e.target || !e.currentTarget.contains(e.relatedTarget)) {
    //   if(refElement.current.classList.contains('is-open')) {
    //     refElement.current.classList.remove('is-open');
    //   }
    // }
    // if (e.currentTarget !== e.target && !e.currentTarget.contains(e.target) ) {
      // if(refElement.current.classList.contains('is-open')) {
      //   refElement.current.classList.remove('is-open');
      // }
    // }

      // if (e.currentTarget === e.target) {
      //   console.log('unfocused self');
      // } else {
      //   console.log('unfocused child', e.target);
      // }
      // if (!e.currentTarget.contains(e.relatedTarget)) {
      //   // Not triggered when swapping focus between children
      //   console.log('focus left self');
      // }
  }

  const allControls = useRef();

  const japaneseControls = useRef();

  const layoutControls = useRef();

  const allAreasActive = showRomajiColumn && showEnglishColumn;

  const twoAreasActive = (showRomajiColumn || showEnglishColumn) && !allAreasActive;

  const multipleAreasActive = twoAreasActive || allAreasActive;

  function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  });
  const WindowResizeListener = () => {
    useEffect(() => {
      const debouncedHandleResize = debounce(function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
      }, 250)

      window.addEventListener('resize', debouncedHandleResize)

      return _ => {
        window.removeEventListener('resize', debouncedHandleResize)
      }
    })
    return null;
  }
  // const isSmall = dimensions.width <= 719;
  // const isMedium = dimensions.width >= 720 && dimensions.width <= 1279;
  // const isLarge = dimensions.width >= 1008;

  const Toggle = ({label, id, checked, toggleFunction, falseIcon, trueIcon}) => {
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
            checked={checked}
            onChange={(e) => handleToggle(checked, toggleFunction, e)}
            onKeyDown={(e) => handleToggle(checked, toggleFunction, e)}
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
        {/* {isOpen ? 'Close' : buttonText } */}
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
      <WindowResizeListener />
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
                  checked={showFurigana}
                  toggleFunction={toggleShowFurigana}
                  falseIcon={faEyeSlash}
                  trueIcon={faEye}
                />
              }/>
              <MenuItem itemComponent={
                <Toggle
                  label="Enable Traditional"
                  id="traditional_checkbox"
                  checked={traditionalJapanese}
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
                checked={carouselView}
                toggleFunction={toggleCarouselView}
                falseIcon={faEyeSlash}
                trueIcon={faEye}
              />
              <Toggle
                label="View English column"
                id="english_checkbox"
                checked={showEnglishColumn}
                toggleFunction={toggleShowEnglishColumn}
                falseIcon={faEyeSlash}
                trueIcon={faEye}
              />
              <Toggle
                label="View romaji column"
                id="romaji_checkbox"
                checked={showRomajiColumn}
                toggleFunction={toggleShowRomajiColumn}
                falseIcon={faEyeSlash}
                trueIcon={faEye}
              />
              <label  className="controls__label settings-controls__control" htmlFor="selected_layout">Choose layout</label>
              <select
                name="selected_layout"
                id="selected_layout"
                className="settings-controls__control"
                value={selectedLayout}
                onChange={handleOptionChange}
                disabled={!allAreasActive}
                >
                <option disabled={traditionalJapanese} value="columns">Columns</option>
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
          traditionalJapanese={traditionalJapanese}
          showFurigana={showFurigana}
          showEnglishColumn={showEnglishColumn}
          showRomajiColumn={showRomajiColumn}
          carouselView={carouselView}
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

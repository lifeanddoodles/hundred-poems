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

  const handleNavMenuToggle = (refElement) => {
    if(prevRef === null) {
      setPrevRef(refElement);
    }
    refElement.current.classList.toggle('is-open');
    if (prevRef !== null && prevRef !== refElement) {
      prevRef.current.classList.remove('is-open');
      setPrevRef(refElement);
    }
  }

  const handleBlur = (refElement, e) => {
    // console.log(e)
    if(e.currentTarget.contains(e.target)) {
      console.log(e.currentTarget, e.target);
    }
    // console.log(e.currentTarget, e.relatedTarget)
    // if (!e.currentTarget.contains(e.relatedTarget)) {
    //   if(refElement.current.classList.contains('is-open')) {
    //     refElement.current.classList.remove('is-open');
    //   }
    // }
    // console.log(e.relatedTarget)
    // console.log(refElement, e)
    // let related = e.relatedTarget ? e.relatedTarget : "none";
    // console.log(related)

    // if(e.target === refElement.current) {
    //   console.log('submenu clicked')
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
  // const handleBlurAlt = (refElement) => {
  //   console.log(refElement)
  //   if(refElement.current.classList.contains('is-open')) {
  //     refElement.current.classList.remove('is-open');
  //   }
  // }

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
  const isSmall = dimensions.width <= 719;
  const isMedium = dimensions.width >= 720 && dimensions.width <= 1279;
  // const isLarge = dimensions.width >= 1008;

  const Toggle = ({label, id, checked, toggleFunction, falseIcon, trueIcon}) => {
    return (
      <label className="controls__label settings-controls__control">
        {label}
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
      </label>
    )
  }

  const NavigationToggle = () => {
    return (
      isSmall ?
      <button
        className="settings-controls__toggle settings-controls__toggle--mobile"
        onClick={() => handleNavMenuToggle(allControls)}
        onBlur={(e) => handleBlur(allControls, e)}
      >
        <FontAwesomeIcon icon={faCog} /> Menu
      </button> : isMedium ?
      <React.Fragment>
        {/* <button
          className="settings-controls__toggle settings-controls__toggle--japanese"
          onClick={() => handleNavMenuToggle(japaneseControls)}
          onBlur={(e) => handleBlur(japaneseControls, e)}
        >
          <FontAwesomeIcon icon={faLanguage} /> Change Japanese
        </button> */}
        <button
          className="settings-controls__toggle settings-controls__toggle--layout"
          onClick={() => handleNavMenuToggle(layoutControls)}
          onBlur={(e) => handleBlur(layoutControls, e)}
        >
          <FontAwesomeIcon icon={faColumns} /> Change layout
        </button>
      </React.Fragment> : ''
    )
  }

  const MenuItem = ({ itemComponent }) => { 
    return (
      <>
       {itemComponent}  
      </>
    )
  }

  const MenuToggle = ({buttonText, icon, isOpen, setIsOpen}) => {
    return (
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="settings-controls__toggle"
        onClick={() => setIsOpen(!isOpen)}
        // onBlur={(e) => handleBlur(allControls, e)}
        // onBlur={(e) => handleBlur(japaneseControls, e)}
      >
        {icon && <><FontAwesomeIcon icon={icon} />{' '}</>}{buttonText}
        {/* {isOpen ? 'Close' : buttonText } */}
      </button>
    )
  }

  const Menu = React.forwardRef((props, ref) => {
    const {buttonText, icon, children} = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
    <section
      className={`settings-controls__container ${isOpen ? 'is-open' : ''}`}
      ref={ref}
      onBlur={(e) => handleBlur(ref, e)}
    >
      <MenuToggle
        buttonText={buttonText}
        icon={icon}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className={`settings-controls__options`} role="presentation">
      { isOpen ? children : '' }
      </div>
    </section>
    )
  })

  return (
    <div className="App">
      <WindowResizeListener />
      <header className="site-header">
        <nav className={`settings-controls`}>
          <NavigationToggle />
          <div
            className="settings-controls-container"
            ref={allControls}
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
            {/* <section
              className="settings-controls__japanese-area settings-controls__submenu"
              ref={japaneseControls}
            >
              <Toggle
                label="Show furigana"
                id="furigana_checkbox"
                checked={showFurigana}
                toggleFunction={toggleShowFurigana}
                falseIcon={faEyeSlash}
                trueIcon={faEye}
              />
              <Toggle
                label="Enable Traditional"
                id="traditional_checkbox"
                checked={traditionalJapanese}
                toggleFunction={toggleTraditionalJapanese}
              />
            </section> */}
            <section
              className="settings-controls__layout settings-controls__submenu"
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
            </section>
          </div>
        </nav>
        
        {/* <Menu buttonText="Second nav">
          <a href="/home">Home</a>
          <a href="/about">About</a>
        </Menu> */}
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

import React, { useEffect, useRef, useState } from 'react';
import { poems } from './data/poemsSample';
import PoemsView from './components/PoemsView';

const App = () => {
  const [showFurigana, toggleShowFurigana] = useState(false);
  const [traditionalJapanese, toggleTraditionalJapanese] = useState(false);
  const [showRomajiColumn, toggleShowRomajiColumn] = useState(true);
  const [showEnglishColumn, toggleShowEnglishColumn] = useState(true);
  const [currentPoem, setCurrentPoem] = useState(0);
  const [carouselView, toggleCarouselView] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState(!traditionalJapanese ? 'columns' : 'main--top');
  const [prevRef, setPrevRef] = useState(null);

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

  const handleToggleCarouselView = () => {
    toggleCarouselView(!carouselView);
  }

  const handleToggleShowFurigana = () => {
    toggleShowFurigana(!showFurigana);
  }

  const handleToggleTraditionalJapanese = () => {
    toggleTraditionalJapanese(!traditionalJapanese);
  }

  const handleToggleShowRomajiColumn = () => {
    toggleShowRomajiColumn(!showRomajiColumn);
  }

  const handleToggleShowEnglishColumn = () => {
    toggleShowEnglishColumn(!showEnglishColumn);
  }

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
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })
  return null;
}
const isSmall = dimensions.width <= 719;
const isMedium = dimensions.width >= 720 && dimensions.width <= 1199;
// const isLarge = dimensions.width >= 1008;

const allControls = useRef();

const japaneseControls = useRef();

const layoutControls = useRef();

const NavigationToggle = () => {

  return (
    isSmall ?
    <button
      className="settings-controls__toggle settings-controls__toggle--mobile"
      onClick={() => handleNavMenuToggle(allControls)}
    >
      Menu
    </button> : isMedium ?
    <React.Fragment>
      <button
        className="settings-controls__toggle settings-controls__toggle--japanese"
        onClick={() => handleNavMenuToggle(japaneseControls)}
      >
        Change Japanese
      </button>
      <button
        className="settings-controls__toggle settings-controls__toggle--layout"
        onClick={() => handleNavMenuToggle(layoutControls)}
      >
        Change layout
      </button>
    </React.Fragment> : ''
  )
}

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
            <section
              className="settings-controls__japanese-area settings-controls__submenu"
              ref={japaneseControls}
            >
              <label className="controls__label settings-controls__control">
                Enable Furigana
                <div className="toggle">
                  <input
                    type="checkbox"
                    aria-label="Enable Furigana"
                    id="furigana_checkbox"
                    checked={showFurigana}
                    onChange={handleToggleShowFurigana}
                  />
                  <span className="slider round"></span>
                </div>
              </label>
              <label className="controls__label settings-controls__control">
                Enable Traditional
                <div className="toggle">
                  <input
                    type="checkbox"
                    aria-label="Enable traditional style"
                    id="traditional_checkbox"
                    checked={traditionalJapanese}
                    onChange={handleToggleTraditionalJapanese}
                  />
                  <span className="slider round"></span>
                </div>
              </label>
            </section>
            <section
              className="settings-controls__layout settings-controls__submenu"
              ref={layoutControls}
            >
              <label className="controls__label settings-controls__control">
                Carousel view
                <div className="toggle">
                  <input
                    type="checkbox"
                    aria-label="Carousel view"
                    id="view_carousel_checkbox"
                    checked={carouselView}
                    onChange={handleToggleCarouselView}
                  />
                  <span className="slider round"></span>
                </div>
              </label>
              <label className="controls__label settings-controls__control">
                View English column
                <div className="toggle">
                  <input
                    type="checkbox"
                    aria-label="Enable English column"
                    id="english_checkbox"
                    checked={showEnglishColumn}
                    onChange={handleToggleShowEnglishColumn}
                  />
                  <span className="slider round"></span>
                </div>
              </label>
              <label className="controls__label settings-controls__control">
                View romaji column
                <div className="toggle">
                  <input
                    type="checkbox"
                    aria-label="Enable romaji column"
                    id="romaji_checkbox"
                    checked={showRomajiColumn}
                    onChange={handleToggleShowRomajiColumn}
                  />
                  <span className="slider round"></span>
                </div>
              </label>
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
      </header>
      <main className={`poems ${carouselView ?
      'poems--carousel' : ''} ${multipleAreasActive ? // START: at least two areas active
        allAreasActive ?
        'poems--three-cards' : //all areas are active = true
        `poems--two-cards ${showEnglishColumn ?
          'poems--two-cards-english' :
          'poems--two-cards-romaji'}` // say which secondary area is active
        : '' // END: at least two areas active = false
        } ${selectedLayout}`}>
        { <PoemsView
          poems={poems}
          traditionalJapanese={traditionalJapanese}
          showFurigana={showFurigana}
          showEnglishColumn={showEnglishColumn}
          showRomajiColumn={showRomajiColumn}
          carouselView={carouselView}
          currentPoem={currentPoem}
        /> }
      </main>
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
      </section>
    </div>
  );
}

export default App;

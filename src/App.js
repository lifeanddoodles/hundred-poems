import { useState } from 'react';
import { poems } from './data/poemsSample';
import PoemsView from './components/PoemsView';

const App = () => {
  const [showFurigana, toggleShowFurigana] = useState(false);
  const [traditionalJapanese, toggleTraditionalJapanese] = useState(false);
  const [showRomajiColumn, toggleShowRomajiColumn] = useState(true);
  const [showEnglishColumn, toggleShowEnglishColumn] = useState(true);
  const [currentPoem, setCurrentPoem] = useState(0);
  const [carouselView, toggleCarouselView] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState('columns');

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

// console.log(selectedLayout);
  return (
    <div className="App">
      <nav className="site-header">
        <section className="controls">
          <label className="controls__label">
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
          <label className="controls__label">
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
          <label className="controls__label">
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
          <label className="controls__label">
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
          <label className="controls__label">
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
          <select name="selected_layout"
            id="selected_layout"
            value={selectedLayout}
            onChange={handleOptionChange}
            disabled={!(showRomajiColumn || showEnglishColumn)}
            >
            <option value="columns">Columns</option>
            <option value="main--left">Main left</option>
            <option value="main--right">Main right</option>
            <option value="main--top">Main top</option>
            <option value="main--bottom">Main bottom</option>
          </select>
        </section>
      </nav>
      <main className={`poems ${carouselView ?
      'poems--carousel' : ''} ${showRomajiColumn || showEnglishColumn ? // START: at least two areas active
        showRomajiColumn && showEnglishColumn ?
        'poems--three-cards' : //all areas are active = true
        showEnglishColumn ?'poems--two-cards poems--two-cards-english' : 'poems--two-cards poems--two-cards-romaji'
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

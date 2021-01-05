import { Fragment, useState } from 'react';
import { poems } from './data/poemsSample';
import PoemsView from './components/PoemsView';

const App = () => {
  const [showFurigana, toggleShowFurigana] = useState(false);
  const [traditionalJapanese, toggleTraditionalJapanese] = useState(false);
  const [showRomajiColumn, toggleShowRomajiColumn] = useState(false);
  const [showEnglishColumn, toggleShowEnglishColumn] = useState(false);
  const [currentPoem, setCurrentPoem] = useState(0);

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
// console.log(`current: ${currentPoem}`);
  return (
    <div className="App">
      <nav className="site-header">
        <section className="controls">
        <label className="controls__label">
          Enable Furigana
          <div className="toggle">
            <input
              type="checkbox"
              aria-label="Enable Furigana"
              id="furigana_checkbox"
              value={showFurigana}
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
                value={traditionalJapanese}
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
                value={showEnglishColumn}
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
                value={showRomajiColumn}
                onChange={handleToggleShowRomajiColumn}
              />
              <span className="slider round"></span>
            </div>
          </label>
        </section>
      </nav>
      <main className="poems">
        { <PoemsView
          poems={poems}
          traditionalJapanese={traditionalJapanese}
          showFurigana={showFurigana}
          showEnglishColumn={showEnglishColumn}
          showRomajiColumn={showRomajiColumn}
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

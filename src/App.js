import { Fragment, useState } from 'react';
import { poems } from './data/poemsSample';
import PoemsView from './components/PoemsView';

const App = () => {
  const [showFurigana, toggleShowFurigana] = useState(false);
  const [traditionalJapanese, toggleTraditionalJapanese] = useState(false);
  const [showRomajiColumn, toggleShowRomajiColumn] = useState(false);
  const [showEnglishColumn, toggleShowEnglishColumn] = useState(false);

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

  return (
    <Fragment>
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
      <main className="App">
        { <PoemsView
          poems={poems}
          traditionalJapanese={traditionalJapanese}
          showFurigana={showFurigana}
          showEnglishColumn={showEnglishColumn}
          showRomajiColumn={showRomajiColumn}
        /> }
      </main>
    </Fragment>
  );
}

export default App;

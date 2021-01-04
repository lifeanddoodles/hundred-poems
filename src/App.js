import { Fragment, useState } from 'react';
import { poems } from './data/poemsSample';
import PoemsView from './components/PoemsView';

const App = () => {
  const [traditionalJapanese, toggleTraditionalJapanese] = useState(false);
  const handleToggleTraditionalJapanese = (event) => {
      toggleTraditionalJapanese(!traditionalJapanese);
      // console.log('clicked')
  }

  return (
    <Fragment>
      <nav>
        <label>
          Enable Traditional
          <div className="switch">
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
      </nav>
      <main className="App">
        { <PoemsView
          poems={poems}
          traditionalJapanese={traditionalJapanese}
        /> }
      </main>
    </Fragment>
  );
}

export default App;

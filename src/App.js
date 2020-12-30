import { poems } from './data/poemsSample';
import PoemContainer from './components/PoemContainer';
const displayPoems = () => poems.map(poem => PoemContainer(poem));


const App = () => {
  return (
    <div className="App">
      { displayPoems() }
    </div>
  );
}

export default App;

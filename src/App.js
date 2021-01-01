import { poems } from './data/poemsSample';
import PoemsView from './components/PoemsView';

const App = () => {
  return (
    <main className="App">
      { <PoemsView poems={poems} /> }
    </main>
  );
}

export default App;

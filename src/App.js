import { poems } from './data/poemsSample';

const App = () => {
  return (
    <div className="App">
      { poems.map(poem => console.log(poem)) }
    </div>
  );
}

export default App;

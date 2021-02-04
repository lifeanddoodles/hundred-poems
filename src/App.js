import { PoemsProvider } from './PoemsContext';
import Header from './components/common/Header';
import CarouselControls from './components/common/CarouselControls';
import PoemsView from './components/PoemsView';

const App = () => {
  return (
    <PoemsProvider>
      <div className="App">
        <Header />
        <PoemsView />
        <CarouselControls />
      </div>
    </PoemsProvider>
  );
}

export default App;

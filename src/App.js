// import { poems } from './data/poemsSample';
import { PoemsProvider } from './PoemsContext';
import Header from './components/common/Header';
import CarouselControls from './components/common/CarouselControls';
import PoemsView from './components/PoemsView';

const App = () => {

  const handleBlur = (refElement, e) => {
      // if (e.currentTarget === e.target) {
      //   console.log('unfocused self',  e.currentTarget ? `Current: ${e.currentTarget.outerText}` : '', e.target ? `Target: ${e.target.outerText}` : '', e.relatedTarget ? `Related: ${ e.relatedTarget.outerText}` : '');
      // }
      // if (!e.currentTarget.contains(e.relatedTarget)) {
      //   // Not triggered when swapping focus between children
      //   // e.currentTarget.parentElement.classList.remove('is-open');
      //   console.log('focus left self',   e.currentTarget ? `Current: ${e.currentTarget.outerText}` : '', e.target ? `Target: ${e.target.outerText}` : '', e.relatedTarget ? `Related: ${ e.relatedTarget.outerText}` : '');
      // }
  }


  return (
    <PoemsProvider>
    <div className="App">
      <Header />
        { <PoemsView
        /> }
      <CarouselControls />
    </div>
    </PoemsProvider>
  );
}

export default App;

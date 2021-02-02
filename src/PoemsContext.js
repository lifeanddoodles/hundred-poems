import React, {useEffect, useState, createContext} from 'react';
import { poems } from './data/poemsSample';

export const PoemsContext = createContext();

const useStateWithLocalStorage = (localStorageKey, initialValue = '') => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || initialValue
  );
 
  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [localStorageKey, value]);
 
  return [value, setValue];
};

export const PoemsProvider = (props) => {
  const [showFurigana, toggleShowFurigana] = useStateWithLocalStorage('showFurigana');
  const [traditionalJapanese, toggleTraditionalJapanese] = useStateWithLocalStorage('traditionalJapanese');
  const [showRomajiColumn, toggleShowRomajiColumn] = useStateWithLocalStorage('showRomajiColumn');
  const [showEnglishColumn, toggleShowEnglishColumn] = useStateWithLocalStorage('showEnglishColumn', 'true');
  const [carouselView, toggleCarouselView] = useStateWithLocalStorage('carouselView');
  const [selectedLayout, setSelectedLayout] = useStateWithLocalStorage('selectedLayout', 'columns');
  const [currentPoem, setCurrentPoem] = useStateWithLocalStorage('currentPoem');
  const handleUpdate = (localStorageKey, event) => {
    if((event.type === 'change') || (event.type === 'keydown' && event.keyCode === 13)) {
      switch (localStorageKey) {
        case 'showFurigana':
          toggleShowFurigana(!showFurigana);
          break;
        case 'traditionalJapanese':
          toggleTraditionalJapanese(!traditionalJapanese);
          break;
        case 'showEnglishColumn':
          toggleShowEnglishColumn(!showEnglishColumn);
          break;
        case 'showRomajiColumn':
          toggleShowRomajiColumn(!showRomajiColumn);
          break;
        case 'carouselView':
          toggleCarouselView(!carouselView);
          if(!currentPoem){
            setCurrentPoem(0)
          }
          break;
        case 'selectedLayout':
          setSelectedLayout(event.target.value);
          break;
        default:
          break;
      }
    }
  }

  return (
      <PoemsContext.Provider value={{
        poems,
        showFurigana,
        toggleShowFurigana,
        traditionalJapanese,
        toggleTraditionalJapanese,
        showRomajiColumn,
        toggleShowRomajiColumn,
        showEnglishColumn,
        toggleShowEnglishColumn,
        carouselView,
        toggleCarouselView,
        selectedLayout,
        setSelectedLayout,
        currentPoem,
        setCurrentPoem,
        handleUpdate
      }}>
        {props.children}
      </PoemsContext.Provider>
  )
}
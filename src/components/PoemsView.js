import {useContext} from 'react';
import { valueToBoolean } from "../utils";
import { PoemsContext } from '../PoemsContext';
import PoemContainer from './PoemContainer';

const PoemsView = () => {
    const {
        poems,
        showRomajiColumn,
        showEnglishColumn,
        carouselView,
        selectedLayout,
    } = useContext(PoemsContext);

    const allAreasActive = valueToBoolean(showRomajiColumn) && valueToBoolean(showEnglishColumn);

    const twoAreasActive = (valueToBoolean(showRomajiColumn) || valueToBoolean(showEnglishColumn)) && !allAreasActive;

    const multipleAreasActive = twoAreasActive || allAreasActive;

    return (
        <main className={`poems ${valueToBoolean(carouselView) ?
            'poems--carousel' : ''} ${
                multipleAreasActive ? // START: at least two areas active
                    allAreasActive ?
                    'poems--three-cards' : //all areas are active = true
                    `poems--two-cards ${
                        valueToBoolean(showEnglishColumn) ?
                        'poems--two-cards-english' :
                        'poems--two-cards-romaji'}` // say which secondary area is active
                : '' // END: at least two areas active = false
                } ${selectedLayout}`}
        >
            {
                poems.map(poem => <PoemContainer
                    key={poem.id}
                    poem={poem}
                />)
            }
        </main>
    )
}
export default PoemsView;
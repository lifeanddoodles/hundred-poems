import PoemContainer from './PoemContainer';

const PoemsView = ({
    poems,
    traditionalJapanese,
    showFurigana,
    showEnglishColumn,
    showRomajiColumn,
    currentPoem,
    selectedLayout,
    carouselView,
    multipleAreasActive,
    allAreasActive
}) => {

    return (
        <main className={`poems ${carouselView ?
            'poems--carousel' : ''} ${
                multipleAreasActive ? // START: at least two areas active
                    allAreasActive ?
                    'poems--three-cards' : //all areas are active = true
                    `poems--two-cards ${
                        showEnglishColumn ?
                        'poems--two-cards-english' :
                        'poems--two-cards-romaji'}` // say which secondary area is active
                : '' // END: at least two areas active = false
                } ${selectedLayout}`}
        >
            {
                poems.map(poem => <PoemContainer
                    key={poem.id}
                    poem={poem}
                    carouselView={carouselView}
                    traditionalJapanese={traditionalJapanese}
                    showFurigana={showFurigana}
                    showEnglishColumn={showEnglishColumn}
                    showRomajiColumn={showRomajiColumn}
                    currentPoem={currentPoem}
                />)
            }
        </main>
    )
}
export default PoemsView;
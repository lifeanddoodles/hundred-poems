import PoemContainer from './PoemContainer';

const PoemsView = ({
    poems,
    traditionalJapanese,
    showFurigana,
    showEnglishColumn,
    showRomajiColumn}) => {

    return poems.map(poem => <PoemContainer
            key={poem.id}
            poem={poem}
            traditionalJapanese={traditionalJapanese}
            showFurigana={showFurigana}
            showEnglishColumn={showEnglishColumn}
            showRomajiColumn={showRomajiColumn}
        />)
}
export default PoemsView;
import PoemContainer from './PoemContainer';

const PoemsView = ({
    poems,
    traditionalJapanese,
    showFurigana,
    showEnglishColumn,
    showRomajiColumn,
    currentPoem}) => {

    return poems.map(poem => <PoemContainer
            key={poem.id}
            poem={poem}
            traditionalJapanese={traditionalJapanese}
            showFurigana={showFurigana}
            showEnglishColumn={showEnglishColumn}
            showRomajiColumn={showRomajiColumn}
            currentPoem={currentPoem}
        />)
}
export default PoemsView;
import PoemContainer from './PoemContainer';

const PoemsView = ({poems, traditionalJapanese, showEnglishColumn, showRomajiColumn}) => {

    return poems.map(poem => <PoemContainer
            key={poem.id}
            poem={poem}
            traditionalJapanese={traditionalJapanese}
            showEnglishColumn={showEnglishColumn}
            showRomajiColumn={showRomajiColumn}
        />)
}
export default PoemsView;
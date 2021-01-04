import PoemContainer from './PoemContainer';

const PoemsView = ({poems, traditionalJapanese}) => {

    return poems.map(poem => <PoemContainer key={poem.id} poem={poem} traditionalJapanese={traditionalJapanese} />)
}
export default PoemsView;
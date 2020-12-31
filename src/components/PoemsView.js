import PoemContainer from './PoemContainer';

const PoemsView = ({poems}) => {
    return poems.map(poem => <PoemContainer key={poem.id} poem={poem} />)
}
export default PoemsView;
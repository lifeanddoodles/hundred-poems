import PoemCard from "./PoemCard";
import {
    getEachCharacter,
    getCompleteWordString
} from "../helpers";

const PoemColumns = ({
    poem,
    traditionalJapanese,
    showFurigana,
    showEnglishColumn,
    showRomajiColumn}) => {

    return [
        <PoemCard
            key={`${poem.id}--ja`}
            poem={poem} language={'ja'}
            wordCallback={getEachCharacter}
            charactersCallback='character'
            traditionalJapanese={traditionalJapanese}
            showFurigana={showFurigana}
        />,
        showRomajiColumn &&
        <PoemCard
            key={`${poem.id}--romaji`}
            poem={poem} language={'ja'}
            wordCallback={getEachCharacter}
            charactersCallback='romaji'
        />,
        showEnglishColumn &&
        <PoemCard
            key={`${poem.id}--en`}
            poem={poem} language={'en'}
            wordCallback={getCompleteWordString}
            charactersCallback={null}
        />,
    ];
}

export default PoemColumns;
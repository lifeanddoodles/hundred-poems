import PoemCard from "./PoemCard";
import {
    getEachCharacter,
    getTheCharacter,
    getTheRomaji,
    getCompleteWordString
} from "../helpers";

const PoemColumns = ({poem}) => {
    return [
        <PoemCard key={`${poem.id}--ja`} poem={poem} language={'ja'} getWordMethod={getEachCharacter} getCharacterMethod={getTheCharacter} />,
        <PoemCard key={`${poem.id}--romaji`} poem={poem} language={'ja'} getWordMethod={getEachCharacter} getCharacterMethod={getTheRomaji} />,
        <PoemCard key={`${poem.id}--en`} poem={poem} language={'en'} getWordMethod={getCompleteWordString} getCharacterMethod={null} />,
    ];
}

export default PoemColumns;
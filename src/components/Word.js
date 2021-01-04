import CharacterContainer from "./CharacterContainer";
import { getEachCharacter } from "../helpers";

const Word = ({
    wordObjectInLine,
    wordCallback,
    charactersCallback,
    showFurigana}) => {

        const allCharacters = wordCallback === getEachCharacter ? wordObjectInLine.word.map((
            characterObject,
            index) => {
    
            return <CharacterContainer
                        key={index}
                        characterObject={characterObject}
                        characterCallback={charactersCallback}
                        showFurigana={showFurigana}
                    />
        }) : null;
    return (
        <span className="word__container">
            {wordCallback === getEachCharacter ? allCharacters : wordObjectInLine.word}
        </span>
    )
}

export default Word;

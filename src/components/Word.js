import { getTheWord } from "../helpers";

const Word = ({
    wordObjectInLine,
    wordCallback,
    charactersCallback}) => {
    return (
        <span className="word__container">
            {getTheWord(
                wordObjectInLine,
                wordCallback,
                charactersCallback
            )}
        </span>
    )
}

export default Word;

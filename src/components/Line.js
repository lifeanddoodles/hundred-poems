import { getAllWords } from "../helpers";

const Line = ({
    lineInPoem,
    wordCallback,
    charactersCallback }) => {
    return (
        <span className="line">
            {getAllWords(
                lineInPoem,
                wordCallback,
                charactersCallback
            )}
        </span>
    )
}

export default Line;

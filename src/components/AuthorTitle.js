import {
    getTheRomaji,
    getAuthor,
} from "../helpers";

const AuthorTitle = ({poemAuthor, language, getWordMethod, getCharacterMethod}) => {
    return (
        <h3 className={`poem__author poem__author--${getCharacterMethod === getTheRomaji ? 'romaji' : language} line`}>{getAuthor(poemAuthor, language, getWordMethod, getCharacterMethod)}</h3>
    )
}

export default AuthorTitle;

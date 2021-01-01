import {
    getTheRomaji,
    getAuthor,
} from "../helpers";

const AuthorTitle = ({poemId, poemAuthor, language, getWordMethod, getCharacterMethod}) => {
    return (
        <h3 id={`${poemId}__author--${language}`} className={`poem__author poem__author--${getCharacterMethod === getTheRomaji ? 'romaji' : language} line`}>{getAuthor(poemId, poemAuthor, language, getWordMethod, getCharacterMethod)}</h3>
    )
}

export default AuthorTitle;

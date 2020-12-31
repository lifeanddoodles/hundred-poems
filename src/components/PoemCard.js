import AuthorTitle from './AuthorTitle'
import {
    getTheRomaji,
    getPoemText
} from "../helpers";

const PoemCard = ({poem, language, getWordMethod, getCharacterMethod}) => {
    return (
        <section className={`poem__card poem__card--${getCharacterMethod !== getTheRomaji ? `${language}` : 'romaji' }`}>
            <AuthorTitle poemId={poem.id} poemAuthor={poem.author} language={language} getWordMethod={getWordMethod} getCharacterMethod={getCharacterMethod} />
            <p className="poem__text">{getPoemText(poem.id, poem.poem, language, getWordMethod, getCharacterMethod)}</p>
        </section>
    )
}

export default PoemCard;

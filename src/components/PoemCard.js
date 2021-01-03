import AuthorTitle from './AuthorTitle'
import {
    getTheRomaji,
    getPoemText
} from "../helpers";

const PoemCard = ({poem, language, getWordMethod, getCharacterMethod}) => {
    let langAttr = (getCharacterMethod !== getTheRomaji && language !== 'en') ? {'lang': language} : ''
    return (
        <section {...langAttr} className={`poem__card poem__card--${getCharacterMethod !== getTheRomaji ? `${language}` : 'romaji' }`}>
            <AuthorTitle poemAuthor={poem.author} language={language} getWordMethod={getWordMethod} getCharacterMethod={getCharacterMethod} />
            <p className="poem__text">{getPoemText(poem.poem, language, getWordMethod, getCharacterMethod)}</p>
        </section>
    )
}

export default PoemCard;

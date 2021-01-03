import AuthorTitle from './AuthorTitle';
import PoemText from './PoemText';

const PoemCard = ({
    poem,
    language,
    wordCallback,
    charactersCallback}) => {

    let langAttr = 
    (charactersCallback !== 'romaji' && language !== 'en') ?
    {'lang': language} : '';

    return (
        <section
            {...langAttr}
            className={
                `poem__card poem__card--${charactersCallback !== 'romaji' ?
                `${language}` : 'romaji' }`
            }
        >
            <AuthorTitle
                poemAuthor={poem.author}
                language={language}
                wordCallback={wordCallback}
                charactersCallback={charactersCallback}
            />
            <PoemText
                poemLines={poem.poem}
                language={language}
                wordCallback={wordCallback}
                charactersCallback={charactersCallback}
            />
        </section>
    )
}

export default PoemCard;

import AuthorTitle from './AuthorTitle';
import PoemText from './PoemText';

const PoemCard = ({
    poem,
    language,
    wordCallback,
    charactersCallback,
    traditionalJapanese,
    showFurigana}) => {

    let langAttr = 
    (charactersCallback !== 'romaji' && language !== 'en') ?
    {'lang': language} : '';
    
    let directionAttr = 
    (language === 'ja' && charactersCallback !== 'romaji' && traditionalJapanese) ?
    {'dir': 'rtl'} : '';

    return (
        <section
            {...langAttr}
            // {...directionAttr}
            className={
                `poem__card poem__card--${charactersCallback !== 'romaji' ?
                `${language}` : 'romaji' } ${(language === 'ja' && charactersCallback !== 'romaji' && traditionalJapanese) ?
                'poem__card--ja-traditional' : ''}`
            }
        >
            <AuthorTitle
                poemAuthor={poem.author}
                language={language}
                wordCallback={wordCallback}
                charactersCallback={charactersCallback}
                showFurigana={showFurigana}
            />
            <PoemText
                poemLines={poem.poem}
                language={language}
                wordCallback={wordCallback}
                charactersCallback={charactersCallback}
                showFurigana={showFurigana}
            />
        </section>
    )
}

export default PoemCard;

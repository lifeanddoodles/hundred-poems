import {useContext} from 'react';
import { valueToBoolean } from "../utils";
import { PoemsContext } from '../PoemsContext';
import AuthorTitle from './AuthorTitle';
import PoemText from './PoemText';

const PoemCard = ({
    poem,
    language,
    wordCallback,
    charactersCallback,
    }) => {

    const {
        traditionalJapanese,
    } = useContext(PoemsContext);

    let langAttr = 
    (charactersCallback !== 'romaji' && language !== 'en') ?
    {'lang': language} : '';

    return (
        <section
            {...langAttr}
            className={
                `poem__card poem__card--${charactersCallback !== 'romaji' ?
                `${language}` : 'romaji' } ${(language === 'ja' && charactersCallback !== 'romaji' && valueToBoolean(traditionalJapanese)) ?
                'poem__card--ja-traditional' : ''}`
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

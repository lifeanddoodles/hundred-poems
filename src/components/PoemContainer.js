import {useContext} from 'react';
import { valueToBoolean } from "../utils";
import PoemColumns from "./PoemColumns";
import { PoemsContext } from '../PoemsContext';

const PoemContainer = ({
    poem,
    }) => {

    const {
        carouselView,
        currentPoem,
    } = useContext(PoemsContext);
        
    return (
        <article className={`poem ${valueToBoolean(carouselView) ? poem.id === parseInt(currentPoem) + 1 ? 'active' : '' : ''}`} key={poem.id}>
            <div className="scroll--unrolled">
                <div className="poem__paper">
                    <header className="poem__number"><h2 id={poem.id}>Poem {poem.id}</h2></header>
                    <section className="poem__columns">
                        <PoemColumns
                            poem={poem}
                        />
                    </section>
                </div>
            </div>
            <div className="scroll">
                <div className="scroll--rolled"></div>
            </div>
        </article>
    )
}

export default PoemContainer;

import {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import { valueToBoolean } from "../utils";
import { PoemsContext } from '../PoemsContext';
import PoemColumns from "./PoemColumns";

const PoemContainer = ({ poem }) => {
  const {
    carouselView,
    currentPoem,
  } = useContext(PoemsContext);
    
  return (
    <article
      className={`poem ${valueToBoolean(carouselView) ? poem.id === parseInt(currentPoem) + 1 ? 'active' : '' : ''}`}
      key={poem.id}>
      <div className="scroll--unrolled">
        <Paper square={true} className="poem__paper">
          <header className="poem__number"><h2 id={poem.id}>Poem {poem.id}</h2></header>
          <section className="poem__columns">
            <PoemColumns poem={poem} />
          </section>
        </Paper>
      </div>
      <div className="scroll">
        <div className="scroll--rolled"></div>
      </div>
    </article>
  )
}

export default PoemContainer;

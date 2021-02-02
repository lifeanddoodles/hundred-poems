import React, {useContext} from 'react';
import { valueToBoolean } from "../../utils";
import { PoemsContext } from '../../PoemsContext';

const CarouselControls = () => {
    const {
        poems,
        carouselView,
        currentPoem,
        setCurrentPoem,
    } = useContext(PoemsContext);

    const nextPoem = () => {
        setCurrentPoem((currentPoem + 1) % poems.length);
    }
    
    const prevPoem = () => {
        if ((currentPoem - 1) % poems.length === -1) {
            setCurrentPoem(poems.length - 1);
            return;
        }
        setCurrentPoem(currentPoem - 1);
    }

    return (
        valueToBoolean(carouselView) &&
            <section className="poem-controls">
              <button
                className="control control--prev"
                onClick={prevPoem}>
                  Previous
              </button>
              <button
                className="control control--next"
                onClick={nextPoem}>
                  Next
              </button>
            </section>
    )
}

export default CarouselControls

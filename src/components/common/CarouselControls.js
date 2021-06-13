import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
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
        setCurrentPoem((parseInt(currentPoem) + 1) % poems.length);
    }
    
    const prevPoem = () => {
        if ((parseInt(currentPoem) - 1) % poems.length === -1) {
            setCurrentPoem(poems.length - 1);
            return;
        }
        setCurrentPoem(parseInt(currentPoem) - 1);
    }

    return (
        valueToBoolean(carouselView) &&
            <section className="poem-controls">
              <Button
                className="control control--prev"
                onClick={prevPoem}
                variant="contained"
                color="primary"
                >
                  Previous
              </Button>
              <Button
                className="control control--next"
                onClick={nextPoem}
                variant="contained"
                color="primary"
                >
                  Next
              </Button>
            </section>
    )
}

export default CarouselControls

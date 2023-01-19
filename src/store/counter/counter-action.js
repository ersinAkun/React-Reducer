import { COUNTER_UP, COUNTER_DOWN, COUNTER_SET } from ".../types";


export const counterUp = () => ( { type: "COUNTER_UP" });


export const counterDown = () => ( { type: "COUNTER_DOWN" });


export const counterSet = (value) => ( { type: COUNTER_SET, payload: value  });
   

    
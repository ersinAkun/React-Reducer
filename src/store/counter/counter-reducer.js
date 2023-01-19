import { COUNTER_DOWN, COUNTER_UP,  COUNTER_SET} from "../types";
import { counterInitialState } from "./counter-initial-state";




export const counterReducer = (state = counterInitialState, action) => { 

    if(action.type === COUNTER_UP){
        const newState = {...state, counter: state.counter+1} 
        return newState;

    }
    else if(action.type === COUNTER_DOWN){

    }
    else if(action.type === COUNTER_SET){

    }

    //Bu satir hic bir if case ine girmediginde geriye mevcut state i gondersin diye yazildi
    //Eger olmazsa tum state ucar.
    return state;

 }









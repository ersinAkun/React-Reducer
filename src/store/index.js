import { createContext, useContext, useReducer } from "react";
import { counterInitialState } from "./counter/counter-initial-state";
import { counterReducer } from "./counter/counter-reducer";


// Bos bir merkezi state olusturuldu
const StoreContext = createContext();


// Componentlerde merkezi state e erisimi kolaylastirmak icin kendi hook umuzu yazdik 
export const useStore = () => useContext(StoreContext);


export const StoreProvider = ({children}) => {
        // useReducer hook una reducer ve initialstate parametre olarak verilir...
        // useReducer fonksiyonu ise geriye setter ve getter lari doner.
        //     getter         setter    
    const [counterState, dispatchCounter] = useReducer(counterReducer, counterInitialState); 



    return(
        <StoreContext.Provider value = {{}}>
            {children}
        </StoreContext.Provider>


    )

}


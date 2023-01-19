import { createContext, useContext } from "react";


// Bos bir merkezi state olusturuldu
const StoreContext = createContext();


// Componentlerde merkezi state e erisimi kolaylastirmak icin kendi hook umuzu yazdik 
export const useStore = () => useContext(StoreContext);


export const StoreProvider = ({children}) => {


    return(
        <StoreContext.Provider value = {{}}>
            {children}
        </StoreContext.Provider>


    )

}


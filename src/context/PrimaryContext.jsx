// imports
import { createContext, useState } from "react";


// create context 
export const primaryContext = createContext();
// export const primaryContext = createContext();

// create provider (add states)
// return providerJSX

const PrimaryProvider = (props) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    return (
        <primaryContext.Provider value={{ products, setProducts }}>
            {props.children}
        </primaryContext.Provider>
    )
}


export default PrimaryProvider
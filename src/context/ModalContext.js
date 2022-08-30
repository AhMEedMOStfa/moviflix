import { createContext, useState } from "react";

export  let ModalContext = createContext(false);
export default function ModalContextProvider({children}){
    let [showModal , setShowModal] = useState(false);
    return <ModalContext.Provider value={{showModal , setShowModal}}>{children}</ModalContext.Provider>
}
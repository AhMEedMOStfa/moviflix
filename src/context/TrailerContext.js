import { createContext, useState } from "react";

export let TrailerContext = createContext('');
export default function TrailerContextProvider({children}){
    let [media , setMedia] = useState('movie');
    let [mediaId , setMediaId] = useState(0);
    return <TrailerContextProvider value={{media , setMedia,mediaId , setMediaId}}>{children}</TrailerContextProvider>
}
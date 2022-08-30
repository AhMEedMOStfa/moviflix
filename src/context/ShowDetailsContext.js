import axios from "axios";
import { createContext , useState } from "react";

export let ShowDetailsContext = createContext({});

export default function ShowDetailsContextProvider(props){
    let[showDetails , setShowDetails] = useState({});
    let[showTrailer , setShowTrailer] = useState({});

    const getShowDetails=async (id , showType='movie')=>{
        let {data}  =await axios.get(`https://api.themoviedb.org/3/${showType}/${id}?api_key=035206e2317d942e4f72edef29754a49&language=en-US`);
        setShowDetails(data);
    }
    const getTrailer=async(id,showType='movie')=>{
        let {data} = await axios.get(`https://api.themoviedb.org/3/${showType}/${id}/videos?api_key=035206e2317d942e4f72edef29754a49&language=en-US`);
        setShowTrailer(data.results);
    }

    return <ShowDetailsContext.Provider value={{showDetails , getShowDetails ,showTrailer, getTrailer}}>{props.children}</ShowDetailsContext.Provider>
}
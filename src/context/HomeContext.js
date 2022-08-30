import axios from 'axios';
import  { createContext, useEffect, useState } from 'react';

export let HomeContext = createContext([]);

export default function HomeContextProvider(props){
    let [heroImages , setHeroImages] = useState([]);
    let [popularShow , setPopularShow] = useState([]);
    let [trendingShow , setTrendingShow] = useState([]);
    let getImagesFromApi = async()=>{
        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=035206e2317d942e4f72edef29754a49&language=en-US&page=1`);
        let {results} = data
        setHeroImages(results);
    }
    let getPopularShow = async (showType='movie')=>{
        let {data} = await axios.get(`https://api.themoviedb.org/3/${showType}/popular?api_key=035206e2317d942e4f72edef29754a49&language=en-US&page=2`);
        let {results} = data;
        setPopularShow(results);
    }
    let getTrendingShow = async (showType='movie')=>{
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${showType}/day?api_key=035206e2317d942e4f72edef29754a49&language=en-US&page=1`);
        let {results} = data;
        setTrendingShow(results);
    }
    useEffect(() => {
        getImagesFromApi(); 
        getPopularShow('movie');
        getTrendingShow('movie'); 
      }
    , [])
    
    return <HomeContext.Provider value={{heroImages ,trendingShow, popularShow , getPopularShow , getTrendingShow}}>{props.children}</HomeContext.Provider>
}
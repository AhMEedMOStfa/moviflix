import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ShowDetailsContext } from '../../context/ShowDetailsContext'
import { TrailerContext } from '../../context/TrailerContext';

export default function Trailer() {
  let {showTrailer , getTrailer}=useContext(ShowDetailsContext);
  let {mediatype , id} = useParams();
  let {media ,mediaId } =useContext(TrailerContext);

  useEffect(()=>{
    getTrailer(id , mediatype);
    console.log(media , mediaId);
  },[])
  let videoSrc = `https://www.youtube.com/watch?v=${showTrailer[0].key ? showTrailer[0].key:''}`
  return (
    <>
    {
      showTrailer
      ?
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl font-extrabold flex justify-center items-center h-full'>HelloWorld</h1>
        <h2>{videoSrc}</h2>
      </div>
      :''

    }
    </>
  )
}

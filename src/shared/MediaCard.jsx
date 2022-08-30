import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai';
import { VscDebugContinue } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

export default function MediaCard({show , mediaType}) {
  return (
    <>
      <div  className='cursor-pointer min-width min-height p-3'>
        <Link to={`/showdetails/${!mediaType?'tv':'movie'}/${show.id}`}>
         <div className='relative card'>
          <img src={`https://image.tmdb.org/t/p/original${show?.poster_path ? show?.poster_path : '/997ToEZvF2Obp9zNZbY5ELVnmrW.jpg'}`} className='w-full min-height rounded' alt="" />
            <div className='card-hover'>
              <span><VscDebugContinue className='border-2 rounded-full text-4xl '/></span>
            </div>
          </div>
          <h6 className='my-2 text-sm'>{show.original_title? (show.original_title)?.slice(0,12):show.original_name?.slice(0,12)}</h6>
          <h3 className='text-gray-500'>{show.first_air_date ? show.first_air_date : show.release_date}</h3>
          <p><AiTwotoneStar className='text-color text-2xl inline-block mr-3' />{Math.floor(show.vote_average)}</p>
        </Link>
      </div>
    </>
   
    
  )
}
